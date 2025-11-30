function fetchTimeout(url){
    const controller = new AbortController()
    const signal = controller.signal
    const response = fetch(url, {signal})
    const timer = new Promise((_, reject) => setTimeout(_ => {
        controller.abort('Response took much time')
        reject()
    }, 3))

    return Promise.race([response, timer])

}

fetchTimeout('https://restcountries.eu/rest/v2/all').then(console.log).catch(console.error)