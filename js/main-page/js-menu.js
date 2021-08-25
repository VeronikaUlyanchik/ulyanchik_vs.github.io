
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
    }
    else{
    menuWomen.classList.add('menu-flex-women')
    background.classList.add('background')
    menuMen.classList.remove('menu-flex-men')
    menuKids.classList.remove('menu-flex-kids')
    menuSale.classList.remove('menu-flex-sale')

}}

function openCloseMenuMen (){
    if (menuMen.classList.contains('menu-flex-men')) {
    menuMen.classList.remove('menu-flex-men')
    background.classList.remove('background')
    }
    else{
    menuMen.classList.add('menu-flex-men')
    background.classList.add('background')
    menuWomen.classList.remove('menu-flex-women')
    menuKids.classList.remove('menu-flex-kids')
    menuSale.classList.remove('menu-flex-sale')
}}

function openCloseMenuKids (){
    if (menuKids.classList.contains('menu-flex-kids')) {
        menuKids.classList.remove('menu-flex-kids')
    background.classList.remove('background')
    }
    else{
    menuKids.classList.add('menu-flex-kids')
    background.classList.add('background')
    menuWomen.classList.remove('menu-flex-women')
    menuMen.classList.remove('menu-flex-men')
    menuSale.classList.remove('menu-flex-sale')
}}
function openCloseMenuSale (){
    if (menuSale.classList.contains('menu-flex-sale')) {
        menuSale.classList.remove('menu-flex-sale')
    background.classList.remove('background')
    }
    else{
    menuSale.classList.add('menu-flex-sale')
    background.classList.add('background')
    menuWomen.classList.remove('menu-flex-women')
    menuMen.classList.remove('menu-flex-men')
    menuKids.classList.remove('menu-flex-kids')
}}

function closeMenu () {
    menuWomen.classList.remove('menu-flex-women')
    menuMen.classList.remove('menu-flex-men')
    background.classList.remove('background')
    menuKids.classList.remove('menu-flex-kids')
    menuSale.classList.remove('menu-flex-sale')
}