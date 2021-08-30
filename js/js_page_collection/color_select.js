const spanPicTwo = document.getElementById('spanPicTwo');
const whiteBtnTwo = document.getElementById('WwiteBtnTwo');
const redBtnTwo = document.getElementById ('redBtnTwo');
const blackBtnTwo = document.getElementById ('blackBtnTwo');
const mainColorPic = document.getElementById ('mainColorPic');


function changeColor (color) {
    const idColor = color.id
    if (idColor== 'whiteBtnTwo'){
        spanPicTwo.innerHTML = '<img src="assets/collection/pic_white.jpg" alt="white">'
        mainColorPic.style.display= 'none';
    }
    if (idColor== 'blackBtnTwo'){
        spanPicTwo.innerHTML = '<img src="assets/collection/2pic_2.jpg" alt="black">' 
        mainColorPic.style.display= 'none';
    }
    if (idColor== 'redBtnTwo'){
        spanPicTwo.innerHTML = '<img src="assets/collection/m9696_1.jpg" alt="red">' 
        mainColorPic.style.display= 'none';
    }
}

const whiteTaylors = document.getElementById('white_taylor')
const blackTaylors = document.getElementById('black_taylor')
const blueTaylors = document.getElementById('blue_taylor')
const redTaylors = document.getElementById('red_taylor')


function changeColorFirst (color) {
    const idColor = color.id
    if (idColor== 'whiteBtnOne'){
        whiteTaylors.classList.remove('hidden');
        blackTaylors.classList.add('hidden');
        blueTaylors.classList.add('hidden');
        redTaylors.classList.add('hidden');
    }
    if (idColor== 'redBtnOne'){
        whiteTaylors.classList.add('hidden');
        blackTaylors.classList.add('hidden');
        blueTaylors.classList.add('hidden');
        redTaylors.classList.remove('hidden');
    }
    if (idColor== 'blackBtnOne'){
        whiteTaylors.classList.add('hidden');
        blackTaylors.classList.remove('hidden');
        blueTaylors.classList.add('hidden');
        redTaylors.classList.add('hidden');
    }
    if (idColor== 'blueBtnOne'){
        whiteTaylors.classList.add('hidden');
        blackTaylors.classList.add('hidden');
        blueTaylors.classList.remove('hidden');
        redTaylors.classList.add('hidden');
    }
}

const whiteChucks = document.getElementById('white_chucks')
const blackChucks = document.getElementById('black_chucks')
const whiteChucksLow = document.getElementById('white_chucks_low')
const blackChucksLow = document.getElementById('black_chucks_low');

function changeColorChucks (color) {
    const idColor = color.id
    if (idColor== 'whiteBtnThree'){
        whiteChucks.classList.remove('hidden');
        blackChucks.classList.add('hidden');
    }
    if (idColor== 'blackBtnThree'){
        whiteChucks.classList.add('hidden');
        blackChucks.classList.remove('hidden');
    }
    if (idColor== 'whiteBtnFour'){
        whiteChucksLow.classList.remove('hidden');
        blackChucksLow.classList.add('hidden');
    }
    if (idColor== 'blackBtnFour'){
        whiteChucksLow.classList.add('hidden');
        blackChucksLow.classList.remove('hidden');
    }
}


const greenCanvas = document.getElementById('greenCanvas')
const redCanvas = document.getElementById('redCanvas')
const greenCanvasLow = document.getElementById('greenCanvasLow')
const redCanvasLow = document.getElementById('redCanvasLow')

function changeColorCanvas (color) {
    const idColor = color.id
    if (idColor== 'redBtnCanvas'){
        redCanvas.classList.remove('hidden');
        greenCanvas.classList.add('hidden');
    }
    if (idColor== 'greenBtnCanvas'){
        redCanvas.classList.add('hidden');
        greenCanvas.classList.remove('hidden');
    }
    if (idColor== 'redBtnCanvasLow'){
        redCanvasLow.classList.remove('hidden');
        greenCanvasLow.classList.add('hidden');
    }
    if (idColor== 'greenBtnCanvasLow'){
        redCanvasLow.classList.add('hidden');
        greenCanvasLow.classList.remove('hidden');
    }


}