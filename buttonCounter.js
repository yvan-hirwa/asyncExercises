const counter = document.getElementById('counter')
const clickButton = document.getElementById('clickButton')


clickButton.addEventListener('click',()=>{
    clickButton.textContent = 'Processing ...'
    clickButton.disabled = true
    setTimeout(()=>{
        clickButton.textContent = 'Click me'
        counter.textContent = +counter.textContent + 1
        clickButton.disabled = false
    }, 2000)

})