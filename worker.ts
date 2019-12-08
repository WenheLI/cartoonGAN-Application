import * as tf from "@tensorflow/tfjs";
// @ts-ignore
let model = tf.loadGraphModel("/hayao/model.json");

const processGIF = (frames, model) => {
    const tempOffscreen = new OffscreenCanvas(1, 1);
    const tempOffscreenCtx = tempOffscreen.getContext('2d');
    const offscreen = new OffscreenCanvas(1, 1);
    const offscreenCtx = offscreen.getContext('2d');
    const {width, height} = frames[0].dims;
    offscreen.width = width;
    offscreen.height = height;
    console.log(frames)
    const frameImages = frames.map((frame) => {
        const {width, height, left, top} = frame.dims;
        tempOffscreen.width = width;
        tempOffscreen.height = height;
        const imgData = new ImageData(frame.patch, width, height);
        tempOffscreenCtx.putImageData(imgData, 0, 0);
        offscreenCtx.drawImage(tempOffscreen, left, top);
        let temp = tf.browser.fromPixels(offscreenCtx.getImageData(0, 0, width, height));
        temp = tf.image.resizeBilinear(temp, [256, 256]);
        temp = temp.div(127.5).sub(1).reshape([-1, 256, 256, 3]);
        let res = model.predict(temp);
        res = res.reshape([256, 256, 3]).add(1).div(2);
        return res;
    });
    return {frameImages, delay: frames[0].delay};
}

model.then(() => {
    // @ts-ignore
    self.postMessage({
        model: "hayao"
    });
})

self.addEventListener('message', (e) => {
    model.then(async (it) => {
        if(e.data.tag == "modelSwitch"){
            let newModelSrc = '/'.concat(e.data.newModelName).concat("/model.json");
            //newModelSrc.concat(e.data.newModelName).concat("/model.json");
            console.log("e.data.newModelName: %s\n", e.data.newModelName);
            console.log("new model src: %s\n", newModelSrc);
            model = tf.loadGraphModel(newModelSrc);
            model.then(() => {
                self.postMessage({model: e.data.newModelName});
            })
        }
        else if (e.data.gif) {
            const url = e.data.gif;
            const {frameImages, delay} = processGIF(url, it);
            const datas = frameImages.map((it) => it.data());
            Promise.all(datas).then((it) => {
                self.postMessage({
                    gif: it,
                    delay
                });
            })
        } else {
            // @ts-ignore
            const temp = tf.tensor(e.data.imgData, [256, 256, 3]);
            let res = await it.predict(temp.reshape([-1, 256, 256, 3]).asType('float32'));
            res = res.reshape([256, 256, 3]).add(1).div(2);
            res = await res.data();
            // @ts-ignore
            self.postMessage({
                res
            });
        }
    });
})