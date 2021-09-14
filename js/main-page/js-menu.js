
const menuWomen = document.getElementById('menu-women');
const background =  document.getElementById('background');
const closeBtn =  document.getElementById('close_btn');
const menuMen = document.getElementById('menu-men');
const menuKids = document.getElementById('menu-kids');
const menuSale = document.getElementById('menu-sale');

function openCloseMenuWomen (){
    if (menuWomen.classList.contains('menu-flex-women')) {
    menuWomen.classList.remove('menu-flex-women')
    background.classList.remove('background')
    document.body.classList.remove('overflow_hidden')
    }
    else{
    menuWomen.classList.add('menu-flex-women')
    background.classList.add('background')
    document.body.classList.add('overflow_hidden')
    menuMen.classList.remove('menu-flex-men')
    menuKids.classList.remove('menu-flex-kids')
    menuSale.classList.remove('menu-flex-sale')
    loginForm.classList.remove('login_translate')

}}

function openCloseMenuMen (){
    if (menuMen.classList.contains('menu-flex-men')) {
    menuMen.classList.remove('menu-flex-men')
    background.classList.remove('background')
    document.body.classList.remove('overflow_hidden')
    }
    else{
    menuMen.classList.add('menu-flex-men')
    background.classList.add('background')
    document.body.classList.add('overflow_hidden')
    menuWomen.classList.remove('menu-flex-women')
    menuKids.classList.remove('menu-flex-kids')
    menuSale.classList.remove('menu-flex-sale')
    loginForm.classList.remove('login_translate')
}}

function openCloseMenuKids (){
    if (menuKids.classList.contains('menu-flex-kids')) {
        menuKids.classList.remove('menu-flex-kids')
    background.classList.remove('background')
    document.body.classList.remove('overflow_hidden')
    }
    else{
    menuKids.classList.add('menu-flex-kids')
    background.classList.add('background')
    document.body.classList.add('overflow_hidden')
    menuWomen.classList.remove('menu-flex-women')
    menuMen.classList.remove('menu-flex-men')
    menuSale.classList.remove('menu-flex-sale')
    loginForm.classList.remove('login_translate')
}}
function openCloseMenuSale (){
    if (menuSale.classList.contains('menu-flex-sale')) {
        menuSale.classList.remove('menu-flex-sale')
    background.classList.remove('background')
    document.body.classList.remove('overflow_hidden')
    loginForm.classList.remove('login_translate')
    }
    else{
    menuSale.classList.add('menu-flex-sale')
    background.classList.add('background')
    document.body.classList.add('overflow_hidden')
    menuWomen.classList.remove('menu-flex-women')
    menuMen.classList.remove('menu-flex-men')
    menuKids.classList.remove('menu-flex-kids')
    loginForm.classList.remove('login_translate')
}}

function closeMenuAndForm() {
    menuWomen.classList.remove('menu-flex-women')
    menuMen.classList.remove('menu-flex-men')
    background.classList.remove('background')
    document.body.classList.remove('overflow_hidden')
    menuKids.classList.remove('menu-flex-kids')
    menuSale.classList.remove('menu-flex-sale')
    background.classList.remove('backgroundForBasket')
    basketView.classList.remove('container-basket-view')
    loginForm.classList.remove('login_translate')
    loginForm.classList.remove('login_translate')
    backgroundRegistr.classList.remove('background')
    registrationForm.classList.remove('registration_translate')
  
}