const burger = document.querySelector('.nav__burger')
const navLinks = document.querySelector('.nav__links')


burger.addEventListener('click', ()=> {
    navLinks.classList.toggle('burger-active')
})