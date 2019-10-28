import { Particle } from './Particle';
import * as tf from '@tensorflow/tfjs';
import { async } from 'q';

const particles: Array<Particle> = [];
const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
const context = canvas.getContext('2d');
const worker = new Worker('./worker.ts');
const video = document.getElementById('stream') as HTMLVideoElement;
const captureCanvas = document.getElementById('capture') as HTMLCanvasElement;

window.addEventListener('resize', (e: Event) => {
    //@ts-ignore
    canvas.width = e.target.innerWidth;
    //@ts-ignore
    canvas.height = e.target.innerHeight;
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
});

const animation = () => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
    particles.forEach((it: Particle) => {
        it.update();
        it.draw(context);
    });
    requestAnimationFrame(animation);
}

window.onload = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; 
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 500; i++) particles.push(new Particle());
    requestAnimationFrame(animation);
    main();
};

document.getElementById("inputs").addEventListener('click', () => {
    captureCanvas.getContext('2d').drawImage(video, 0, 0, 512, 512);
    video.style.display = 'none';
});

document.getElementById("export").addEventListener("click", async () => {
    let img = tf.browser.fromPixels(captureCanvas);
    img = tf.image.resizeBilinear(img, [256, 256]);
    img = img.div(127.5).sub(1);
    let imgData = await img.data();
    worker.postMessage({imgData});
})

worker.addEventListener('message', (e) => {
    const resData = e.data.res;
    let res = tf.tensor(resData, [256, 256, 3]);
    res = res.reshape([256, 256, 3]);
    tf.browser.toPixels(res, captureCanvas);
})

const main = async () => {
    //@ts-ignore
    video.srcObject = await navigator.mediaDevices.getUserMedia({video: true})

    
};

