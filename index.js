

let menu = document.querySelector('#menu_bars');
let nav = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active'); 

}