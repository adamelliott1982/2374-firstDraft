const searchArea = document.querySelector('.search-area')
const button = document.querySelector('.button')
const input = document.querySelector('.input')

button.addEventListener('click', ()=>{
    searchArea.classList.toggle('active')
    input.focus()
})

