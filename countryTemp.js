
// function countryTemp(country){
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//             .then(res =>{
//                 if(!res.ok){
//                     throw new Error('Country not available')
//                 }
//                 return res.json()
//              })
//              .then(country => country[0])
//              .then(res =>{
//                 return{
//                     name: res.name.common,
//                     capital: res.capital[0],
//                     lat : res.capitalInfo.latlng[0],
//                     lng : res.capitalInfo.latlng[1]
//                 }
//              })
//              .then(countryObj =>{
//                 fetch(`https://api.open-meteo.com/v1/forecast?latitude=${countryObj.lat}&longitude=${countryObj.lng}&current_weather=true`)
//                         .then(res =>{
//                                 if(!res.ok){
//                                     throw new Error('Temperature not available')
//                                 }
//                                 return res.json()
//                             })
//                         .then(temp=>{
//                             const temperature=temp.current_weather.temperature

//                             return {
//                                 Country: countryObj.name.common,
//                                 Capital: countryObj.capital[0],
//                                 'Current Temperature': tempe
//                             }
                                
//                             })
//                         .catch(console.error)
//              })
//              .catch(error => console.error(error))
//             }



// countryTemp('france').then(console.log)


async function countryTemp(countryName){

    try{
        const countryRes = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        console.log(countryRes)
        if(!countryRes.ok){
            throw new Error('Country not available')
        }
        const countryDetails = await countryRes.json()
        console.log(countryDetails)
        const Country = countryDetails[0].name.common
        const Capital = countryDetails[0].capital[0]
        const [lat, lng] = countryDetails[0].capitalInfo.latlng 

        const weather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`)
        if(!weather.ok){
            throw new Error('Temperature not available')
        }
        const countryWeather = await weather.json()
        const temperature = countryWeather.current_weather.temperature

        return {
            Country,
            Capital,
            'Current Temperature': Math.round(temperature)
        }

    }catch(error){
        
        throw error
    }

}
const data = await countryTemp('rwanda')

console.log(data)