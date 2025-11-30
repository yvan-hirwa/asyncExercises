const worker = new Worker('worker.js')

worker.postMessage({
    command: "filter_evens",
    numbers: [1, 2, 3, 4, 5, 6]
})

worker.onmessage = (message) => {
    console.log(message)
    worker.terminate()
}
