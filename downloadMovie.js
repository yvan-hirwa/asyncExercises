// Challenge 1: The "Video Buffer" Simulator
// Concept: Async Generators & Streaming Imagine you are building a video player. You cannot download the whole movie at once. You need to download "Chunk 1", play it, then download "Chunk 2", play it, etc.

// The Task:

// Create an async generator function called streamVideo(totalChunks).

// Inside the generator, use a loop to simulate downloading chunks.

// Use your wait helper to simulate a 1000ms download time for each chunk.

// yield a string like "Chunk 1 downloaded", "Chunk 2 downloaded", etc.

// Create a consumer function called playVideo.

// It calls the generator.

// It uses for await...of to loop through the chunks.

// Log "Playing: [Chunk Name]" to the console as soon as each one arrives.

function delay(){
  return new Promise(resolve=>{
    setTimeout(resolve, 1000)
  })
}
async function* streamVideo(totalChunks){
  let counter = 0
  while(counter< totalChunks){
    await delay()
    counter++
    
    yield `Chunk ${counter} downloaded`
  }
}
async function playVideo(){
  const video = streamVideo(5)//Total chunks can be changed
  for await(const frame of video){
    console.log(`Playing: [${frame}]`)
  }
}
await playVideo()