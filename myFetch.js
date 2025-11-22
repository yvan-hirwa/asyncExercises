//The Response object returned by myFetch is a minimal version of the one returned by the real fetch.
function myFetch(url){
    return new Promise((resolve, reject)=>{
        const req = new XMLHttpRequest()

        req.open('GET', url)

        req.onload = () =>{
            const status = req.status
            const ok = (status<300 && status>=200)
            const json = () => Promise.resolve(JSON.parse(req.responseText))
            resolve({status, url: url, ok, json})
        }

        req.onerror = () =>{
            reject(Error('Fetch Failed'))
        }

        req.send()
    })
}

//Example Usage
myFetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if(!response.ok)throw new Error('Fetch Error')
        return response.json()
    })
    .then(data =>console.log(data))
    .catch(error => console.error(error))