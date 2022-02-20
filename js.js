const open = document.getElementById('menu-open').addEventListener('click', opening)
const close = document.getElementById('menu-close').addEventListener('click', closing)
const header = document.getElementById('header')

function opening() {
    header.classList.add('open')
}
function closing() {
    header.classList.remove('open')
}

