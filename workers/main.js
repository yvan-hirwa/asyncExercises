const worker = new Worker('worker.js')

worker.onerror = (error) => {
    console.error("Worker Error:", error);
};

worker.onmessage = (message) => {
    console.log(message.data)
    worker.terminate()
}

worker.postMessage({
    command: "filter_evens",
    numbers: [1, 2, 3, 4, 5, 6]
})