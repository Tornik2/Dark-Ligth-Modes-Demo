const toggler = document.querySelector('.toggler')
const container = document.querySelector('.container')
toggler.addEventListener('click', ()=>{
    container.classList.toggle('dark')
})