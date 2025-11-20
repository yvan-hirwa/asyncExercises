// function fetchData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const data = 'Data fetched successfully'

//             resolve(data)
//         },1000)
//     })
// }

// fetchData().then((data)=>{console.log(data)})


async function fetchDataPromisified() {

    try {
       setTimeout(()=>{
            const data = 'data fetched'
            console.log(data)
        },1000)
        
    } catch (error) {
        console.log(error)
    }
}
fetchDataPromisified()



// function fetchData(callback) {
//     setTimeout(() => {
//       const data = "Data fetched successfully!";
//       callback(null, data);
//     }, 1000);
//   }
  
//   fetchData((error, data) => {
//     if (error) {
//       console.error("Error:", error);
//     } else {
//       console.log(data);
//     }
//   });