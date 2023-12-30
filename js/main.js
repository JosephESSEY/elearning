const toggle = document.querySelector('.toggle')
const toggle2 = document.querySelector('.toggle2')
console.log(toggle)
console.log(toggle2)

function listener(){
    document.querySelector('aside').classList.remove('show-aside');
    document.querySelector('aside').classList.toggle('hide-aside');
    document.querySelector('main').classList.toggle('resize-main');
    document.querySelector('header').classList.toggle('resize-header');
}
toggle.addEventListener('click', listener)


toggle2.addEventListener('click',()=>{
    document.querySelector('aside').classList.toggle('show-aside');
})