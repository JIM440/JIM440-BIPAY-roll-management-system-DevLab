const attenBtn = document.querySelector('.attend-btn')

const attendance = document.querySelector('.attendance')

attenBtn.addEventListener('click', (event) => {
    event.preventDefault()
    attenBtn.classList.toggle('active')
    attendance.classList.toggle('active')
})

const menuIcon = document.querySelector('.menu-icon')

menuIcon.addEventListener('click', ()=>{
    document.querySelector('aside').classList.add('active')
})

const menuClose = document.querySelector('.bx-x')

menuClose.addEventListener('click', ()=>{
    document.querySelector('aside').classList.remove('active')
})