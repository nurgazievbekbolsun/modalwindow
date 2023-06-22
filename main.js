const block = document.querySelector('.block')
const openModel = document.querySelector('button')
const menu = document.querySelector('.burger-menu')
const burger = document.querySelectorAll('.burger')
const headerNav = document.querySelector('.header-nav')
block.style.display = 'none'

openModel.addEventListener('click',()=>{
    if (openModel.innerHTML === 'open Model'){
        openModel.innerHTML = 'close Model'
        block.style.display = 'block'
        block.style.transition = '.4s'
    }else if (openModel.innerHTML === 'close Model'){
        block.style.display = 'none'
        openModel.innerHTML = 'open Model'
    }
})
menu.addEventListener('click',()=>{
   if (!menu.classList.contains('active')){
       menu.classList.add('active')
       burger[0].style.transform = 'rotate(45deg) translateY(5px)'
       burger[2].style.transform = 'rotate(-45deg) translateY(-5px)'
       headerNav.style.transform = 'translateX(17%) '
       burger[1].style.display = 'none'
   }else{
       menu.classList.remove('active')
       headerNav.style.transform = 'translateX(120%)'
       burger[0].style.transform = 'rotate(0)'
       burger[2].style.transform = 'rotate(0)'
       burger[1].style.display = 'block'
   }
})

