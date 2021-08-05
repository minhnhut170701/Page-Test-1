const btn = document.querySelector('.icon')
const text = document.getElementById('menu-hide')

const toggle = document.querySelector('.toggle-icon')

toggle.addEventListener('click', () =>{
    text.classList.toggle('show')
})


btn.addEventListener('click' ,() =>{
    text.classList.remove('show')
})