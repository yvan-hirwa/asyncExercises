onmessage = (message) =>{
    const data = message.data

    if(data.command === 'filter_evens'){
        const nums = data.numbers
        postMessage(nums.filter(x => x%2===0))
    }else{
        postMessage('Different command')
    }
}