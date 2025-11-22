async function getCityInfo(cityName){
    try {
        const cityRes = await fetch(`https://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${cityName}`)

        if(!cityRes.ok)throw new Error('City Not Found')
        
        const cityData = await cityRes.json()
        const city = cityData.data[0].city
        const country = cityData.data[0].country
        const population = cityData.data[0].population.toLocaleString()
        const lat = cityData.data[0].latitude
        const lon = cityData.data[0].longitude

        const [tempRes, timezoneRes] = await Promise.all([
            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`),
            // fetch(`https://api.ipgeolocation.io/timezone?apiKey=free&lat=${lat}&long=${lon}`) Seems like your api is not free i am getting 401 status
        ])

        if(!tempRes.ok)throw new Error('Temperature not fetched')

        const temp = await tempRes.json()
        const temperature = `${Math.round(temp.current_weather.temperature)}°C`

        return{
            city,
            country,
            population,
            temperature
        }
    } catch (error) {
        console.error(error)
    }
}

// getCityInfo('kigali').then(console.log)