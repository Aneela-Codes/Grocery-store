
// -----------Sticky navbar on scroll------------
window.addEventListener('scroll',function(){
    let header =  document.querySelector('nav');
    header.classList.toggle('sticky', window.scrollY>0);
})

// ------------Login form functionality----------

const login = ()=>{
    let popup = document.querySelector('.popup');
    popup.style.display='flex';
}
const closePopup =()=>{
    let popup = document.querySelector('.popup');
    popup.style.display='none';
}