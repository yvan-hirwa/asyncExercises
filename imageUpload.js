function saveToDB(data) {
  return new Promise(resolve => {
    setTimeout(() => resolve("DB save done"), 300);
  });
}
function uploadImage(file) {
  return new Promise(resolve => {
    setTimeout(() => resolve("Upload done"), 600);
  });
}
function resizeImage(file) {
  return new Promise(resolve => {
    setTimeout(() => resolve("Resized image"), 200);
  });
}
async function submit(){
    const formData = {
        image: 'img',
        data: 'db'
    }
    try{
        const resize = await resizeImage(formData.image)
        const[upload, save] = await Promise.all([
            uploadImage(resize),
            saveToDB(data)
        ])
        return 'Success'
    }catch(error){
        console.log(error.message)
    }
    
    
}
const result = await submit()