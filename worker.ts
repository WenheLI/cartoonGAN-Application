importScripts('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js');
// @ts-ignore
const model = tf.loadGraphModel("/Miyazaki/model.json");

model.then(() => {
    // @ts-ignore
    self.postMessage({
        model: "miyazaki"
    });
})

self.addEventListener('message', (e) => {
    model.then(async (it) => {
        // @ts-ignore
        const temp = tf.tensor(e.data.imgData, [256, 256, 3]);
        let res = await it.predict(temp.reshape([-1, 256, 256, 3]).asType('float32'));
        res = res.reshape([256, 256, 3]).add(1).div(2);
        res = await res.data();
        // @ts-ignore
        self.postMessage({
            res
        });
    });
})