
console.log('Hello World ')
let Tiger = document.querySelector('#Tiger')
let close = document.querySelector('#close')
let nav = document.querySelector('#navbar')

if (Tiger) {
  Tiger.addEventListener('click', () => {
    nav.classList.add('active')
  })

}
if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active')
  })

}