import {
    Particle
} from './Particle';
import * as tf from '@tensorflow/tfjs';
import { themes } from './Themes';
import * as bodyPix from '@tensorflow-models/body-pix';
import GIFEncoder from 'gif-encoder';
import { mod } from '@tensorflow/tfjs';

const renderCanvas = document.getElementById('renderer') as HTMLCanvasElement;
const renderCtx = renderCanvas.getContext('2d');

const particles: Array < Particle > = [];
const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
const context = canvas.getContext('2d');
const worker = new Worker('./worker.ts');
const video = document.getElementById('stream') as HTMLVideoElement;
const captureCanvas = document.getElementById('capture') as HTMLCanvasElement;
const captureCanvasContext = captureCanvas.getContext('2d');
const introImg = document.getElementById("static-img") as HTMLImageElement;

const exportButton = document.getElementById("export") as HTMLButtonElement;
const webcamButton = document.getElementById("webcam") as HTMLButtonElement;
const snapshotButton = document.getElementById("snapshot") as HTMLButtonElement;
const uploadButton = document.getElementById("upload") as HTMLButtonElement;
const downloadDiv = document.getElementById("download-btn-container") as HTMLDivElement;
const downloadAnchor = document.getElementById("download") as HTMLAnchorElement;

/* Style buttons in style dropdown menu */
const styleButton = document.getElementById("styles") as HTMLButtonElement;
const paprikaButton = document.getElementById("paprika") as HTMLButtonElement;
const shinkaiButton = document.getElementById("shinkai") as HTMLButtonElement;
const hayaoButton = document.getElementById("hayao") as HTMLButtonElement;
const hosodaButton = document.getElementById("hosoda") as HTMLButtonElement;
const chihiroButton = document.getElementById("chihiro") as HTMLButtonElement;

/* or? */
const styleButtonArray = document.getElementsByClassName("dropdown-btn") as HTMLCollectionOf<Element>;

const htmlBody = document.getElementsByTagName('body')[0] as HTMLBodyElement;
const userInput = document.getElementById('userInput') as HTMLInputElement;

let mouseX = window.innerWidth/2;
let mouseY = window.innerHeight/2;
let isLoading  = true;

let gifStruct;
let currentInput = '';

let snap = false;
let exporting = false;

let isFore = false;
let isBack = false;

/* Name of chosen model*/
let modelName = '';

document.getElementById('foreground').addEventListener('change', (e: InputEvent) => {
    isFore = e.target.checked;
})

document.getElementById('background').addEventListener('change', (e: InputEvent) => {
    isBack = e.target.checked;
})

const fullMask = tf.ones([256, 256, 1]);

const body = bodyPix.load({
    architecture: 'ResNet50',
    multiplier: 1,
    outputStride: 16,
    quantBytes: 4,
    
})
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
    if(!exporting){
        context.fillStyle = 'rgb(0, 0, 0, 0.3)';
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
    particles.forEach((it: Particle) => {
        it.update();
        it.draw(context);
        if( distance(it.x, it.y, mouseX, mouseY) < 300 && it.s > 7 && !exporting){
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
    for (let i = 0; i < 600; i++) particles.push(new Particle(themes['miyazaki2']));

    requestAnimationFrame(animation);
    main();
};


/**
 * Input Event: Snapshot from webcam stream video
 */
webcamButton.addEventListener('click', () => {
    downloadDiv.style.display = 'none';
    currentInput = "webcam";
    if(snap){
        snap = false;
        captureCanvas.width = 512;
        captureCanvas.height = 512;
        captureCanvas.style.display = 'block';
        snapshotButton.style.display = 'block';
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
    downloadDiv.style.display = 'none';
    userInput.click();
})

userInput.addEventListener('change',async (e: Event) => {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    const usrImg = document.createElement("img");
    const fileURL = URL.createObjectURL(files[0]);

    if (files[0].type === 'image/gif') {
        const gifData = await (await fetch(fileURL)).arrayBuffer();
        const gif = new window.GIF(gifData);
        const frames = gif.decompressFrames(true);
        gifStruct = {gif: frames};
        introImg.src = fileURL;
        captureCanvas.style.display = 'none';
        introImg.style.display = 'block';
        currentInput = "gif";
    } else {
        usrImg.src = fileURL;
        snap = true;
    
        usrImg.onload = () => {
            captureCanvasContext.drawImage(usrImg, 0, 0, 512, 512);
            captureCanvas.style.display = 'block';
            video.style.display = 'none';
            introImg.style.display = 'none';
        }
        currentInput = "img";
    }

});


/**
 * Choose a style from dropdown menu
 * Send the chosen style to worker with a "modelSwitch" tag
 */
for(let styleBtn of styleButtonArray){
    styleBtn.addEventListener("click", async => {
        console.log("Initiate style change to %s\n", styleBtn.id);
        modelName = styleBtn.id;
        styleBtn.innerText = 'Loading';
        styleBtn.className = styleBt.className + ' loading';
        exportButton.className = "button loading";
        styleButton.className = "button loading";
        worker.postMessage({tag: "modelSwitch", newModelName: styleBtn.id});
    });
}


/**
 * Export Event: export cartoonGAN output
 */
exportButton.addEventListener("click", async () => {
    snapshotButton.style.display = 'none';
    if (!isLoading) {
        exporting = true;
        exportButton.innerText = "EXPORTING";
        exportButton.className = "button_loading";

        switch(currentInput){
            case "gif":
                /* gif: gifStruct from processed user input */
                console.log(gifStruct);
                worker.postMessage(gifStruct);
                break;
            default:
                /* img/webcam: grab pixels from captureCanvas*/
                let img = tf.browser.fromPixels(captureCanvas);
                img = tf.image.resizeBilinear(img, [256, 256]);
                img = img.div(127.5).sub(1);
                let imgData = await img.data();
                worker.postMessage({
                    imgData
                });
        }
    }
});

worker.addEventListener('message', (e) => {
    const data = e.data;
    if (data.gif) {
        console.log(data.gif)
        const gif = new GIFEncoder(256, 256);
        const dataBuffer = [];
        gif.on('data', (buf) => dataBuffer.push(buf));
        gif.writeHeader();
        gif.setRepeat(0);
        gif.setDelay(data.delay);
        Promise.all(data.gif.map((it) => {
            const temp = tf.tensor(it, [256, 256, 3]);
            return tf.browser.toPixels(temp);
        })).then(d => {
            d.forEach((it) => {
                gif.addFrame(it)
            });
            gif.finish();
            let binData = dataBuffer.reduce((prev, curr) => (__appendBuffer(prev, curr)), new ArrayBuffer(0))
            let gifData = new Blob([binData], {"type": "image/gif"})
            introImg.src = URL.createObjectURL(gifData);
            downloadAnchor.setAttribute("href", URL.createObjectURL(gifData));
        })
        downloadReady();
        
    } else if (!data.model) {
        const resData = e.data.res;
        let res = tf.tensor(resData, [256, 256, 3]);
        let img = tf.browser.fromPixels(captureCanvas);
        img = tf.image.resizeBilinear(img, [256, 256]);
        res = res.reshape([256, 256, 3]);
        body.then(async (it) => {
            const d = await it.segmentPerson(img, {
                internalResolution: 'full'
            });
            const mask = tf.tensor(d.data, [256, 256, 1]);
            const completeMask = fullMask.sub(mask);
            img = img.div(255);

            const foreground = isFore ? res.mul(mask) : img.mul(mask);
            const background = isBack ? res.mul(completeMask) : img.mul(completeMask);

            await tf.browser.toPixels(foreground.add(background), captureCanvas);
            captureCanvas.toBlob((b) => {
                downloadAnchor.setAttribute("href", URL.createObjectURL(b));
            }, "image/png");
        });
        downloadReady();

    } else {
        modelName = data.model;
        styleButton.innerText = data.model;
        styleButton.className = "button";
        exportButton.className = "button";
        if (!data.reload) {
            isLoading = false;
        }
    }
    
    styleButton.className = "button";
    exportButton.className = "button";
    exportButton.innerText = "EXPORT";
    exporting = false;
})


function downloadReady(){
    downloadAnchor.setAttribute("download", modelName.concat("-").concat((new Date()).getTime().toString()));
    downloadDiv.style.display = "block";
}


function distance(x1: number, y1: number, x2: number, y2: number){
    let d = Math.pow((Math.pow((x1-x2),2) + Math.pow((y1-y2),2)), 0.5);
    return d;
}


const main = async () => {
    //@ts-ignore
    video.srcObject = await navigator.mediaDevices.getUserMedia({
        video: true
    });
    downloadDiv.style.display = "none";
    requestAnimationFrame(drawVideo);

};

function __appendBuffer(buffer1, buffer2) {
    let tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
    tmp.set(new Uint8Array(buffer1), 0);
    tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
    return tmp.buffer;
  };