const sizeCell = document.querySelectorAll('.size_cell');
const sizeValueField = document.getElementById('sizeValue'); 


function chooseSize (size) {
    sizeCell.forEach(n => n.classList.remove('js-size-choosen'))
    const idSize = size.id
    const yourObject = document.getElementById(idSize);
    const parentObject = yourObject.parentNode;
    parentObject.classList.add('js-size-choosen');
    getArticleSize(size) 
}

function getArticleSize(size) {
    const valueSize = size.value
    sizeValueField.innerHTML = `-${valueSize}`;
}