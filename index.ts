import {
    Particle
} from './Particle';
import * as tf from '@tensorflow/tfjs';
import { themes } from './Themes';
import { sqrt, fill } from '@tensorflow/tfjs';

const particles: Array < Particle > = [];
const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
const context = canvas.getContext('2d');
const worker = new Worker('./worker.ts');
const video = document.getElementById('stream') as HTMLVideoElement;
const captureCanvas = document.getElementById('capture') as HTMLCanvasElement;
const captureCanvasContext = captureCanvas.getContext('2d');
const introImg = document.getElementById('static-img') as HTMLImageElement;

const exportButton = document.getElementById("export") as HTMLButtonElement;
const styleButtons = document.getElementById("styles") as HTMLButtonElement;
const webcamButton = document.getElementById("webcam") as HTMLButtonElement;
const snapshotButton = document.getElementById('snapshot') as HTMLButtonElement;
const uploadButton = document.getElementById("upload") as HTMLButtonElement;

const htmlBody = document.getElementsByTagName('body')[0] as HTMLBodyElement;
const userInput = document.getElementById('userInput') as HTMLInputElement;

let mouseX = window.innerWidth/2;
let mouseY = window.innerHeight/2;
let isLoading  = true;

let snap = false;

/**
 * Dynamic esponse to window resize
 */
window.addEventListener('resize', (e: Event) => {
    //@ts-ignore
    canvas.width = e.target.innerWidth;
    //@ts-ignore
    canvas.height = e.target.innerHeight;
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
});


/**
 * Update mouse coordinates
 */
htmlBody.addEventListener('mousemove', (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

/**
 * Draw webcam stream on capture canvas
 */
const drawVideo = () => {
    captureCanvasContext.drawImage(video, 80, 0, 480, 480, 0, 0, 512, 512);
    if (!snap) {
        requestAnimationFrame(drawVideo);
    }
}

/**
 * Background animation
 */
const animation = () => {
    context.fillStyle = 'rgb(0, 0, 0, 0.3)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    particles.forEach((it: Particle) => {
        it.update();
        it.draw(context);

        if( distance(it.x, it.y, mouseX, mouseY) < 300 && it.s > 7 ){
            it.line(context, mouseX, mouseY);            
        }

    });
    requestAnimationFrame(animation);
}


/**
 * Window Onload
 */
window.onload = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 600; i++) particles.push(new Particle(themes['Miyazaki']));

    requestAnimationFrame(animation);
    main();
};


/**
 * Input Event: Snapshot from webcam stream video
 */
webcamButton.addEventListener('click', () => {
    if(snap){
        snap = false;
        requestAnimationFrame(drawVideo);
    } else {
        captureCanvas.style.display = 'block';
        snapshotButton.style.display = 'block';
        introImg.style.display = 'none';
    }
});

snapshotButton.addEventListener('click', () => {
    snap = true;
    video.style.display = 'none';
});


/**
 * Input Event: User upload image
 */
uploadButton.addEventListener('click', () => {
    userInput.click();
})

userInput.addEventListener('change', (e: Event) => {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    const usrimg = document.createElement("img");
    usrimg.src = URL.createObjectURL(files[0]);
    snap = true;

    usrimg.onload = () => {
        captureCanvasContext.drawImage(usrimg, 0, 0, 512, 512);
        captureCanvas.style.display = 'block';
        video.style.display = 'none';
        introImg.style.display = 'none';
    }

});


/**
 * Export Event: export cartoonGAN output
 */
exportButton.addEventListener("click", async () => {
    if (!isLoading) {
        let img = tf.browser.fromPixels(captureCanvas);
        img = tf.image.resizeBilinear(img, [256, 256]);
        img = img.div(127.5).sub(1);
        let imgData = await img.data();
        worker.postMessage({
            imgData
        });
    }
})

worker.addEventListener('message', (e) => {
    const data = e.data;
    if (!data.model) {
        const resData = e.data.res;
        let res = tf.tensor(resData, [256, 256, 3]);
        res = res.reshape([256, 256, 3]);
        //@ts-ignore
        tf.browser.toPixels(res, captureCanvas);
    } else {
        styleButtons.innerText = data.model;
        styleButtons.className = "button";
        exportButton.className = "button";
        isLoading = false;
    }

})


function distance(x1: number, y1: number, x2: number, y2: number){
    let d = Math.pow((Math.pow((x1-x2),2) + Math.pow((y1-y2),2)), 0.5);
    return d;
}


const main = async () => {
    //@ts-ignore
    video.srcObject = await navigator.mediaDevices.getUserMedia({
        video: true
    })
    requestAnimationFrame(drawVideo);

};