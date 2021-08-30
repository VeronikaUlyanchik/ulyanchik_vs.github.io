
const sizeCell = document.querySelectorAll('.size_cell');
const sizeCellww = document.querySelectorAll('.size_number');

function chooseSize (size) {
    const idSize = size.id
    const valSize = size.value
    const yourObject = document.getElementById(idSize);
    const parentObject = yourObject.parentNode;
    parentObject.style.background = "#000";
    parentObject.style.color= "white";
}
