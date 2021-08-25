const loginForm= document.getElementById('login_form')
const registrationForm = document.getElementById('registration_form')
const backgroundRegistr =  document.getElementById('background');

function openLoginForm () {
    if ( loginForm.classList.contains('login_translate')) {
    loginForm.classList.remove('login_translate')
    loginForm.classList.remove('login_translate_hidden')
    backgroundRegistr.classList.remove('background')
    registrationForm.classList.remove('registration_translate')
}
else {
    loginForm.classList.add('login_translate')
    backgroundRegistr.classList.add('background')
    menuMen.classList.remove('menu-flex-men')
    menuKids.classList.remove('menu-flex-kids')
    menuSale.classList.remove('menu-flex-sale')
    menuWomen.classList.remove('menu-flex-women')
    loginForm.classList.remove('login_translate_hidden')
}
}

function openRegisterForm() {
    registrationForm.classList.add('registration_translate')
    loginForm.classList.add('login_translate_hidden')
    registrationForm.classList.remove('registration_translate_hidden')
}

function openLoginFormFromRegForm() {
    loginForm.classList.remove('login_translate_hidden')
    registrationForm.classList.add('registration_translate_hidden')
}
