var menuopen=document.getElementById('menu_open');
var menuclose=document.getElementById('menu_close');
var submenu=document.getElementById('sub_menu');

menuopen.addEventListener('click',()=>{
    submenu.classList.add('show_menu');
})
menuclose.addEventListener('click',()=>{
    submenu.classList.remove('show_menu');
})