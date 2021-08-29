const priceBtn = document.getElementById('price_choice');
const typeBtn = document.getElementById('type_choice');
const sizeBtn = document.getElementById('size_choice');
const colorBtn = document.getElementById('color_choice');
const maleBtn = document.getElementById('male_choice');
const priceField = document.getElementById('select_price_field');
const typeField = document.getElementById('select_type_field');
const sizeField = document.getElementById('select_size_field');
const colorField = document.getElementById('select_color_field');
const maleField = document.getElementById('select_male_field');
const arrowPrice = document.getElementById('rotate_price');
const arrowType = document.getElementById('rotate_type');
const arrowSize = document.getElementById('rotate_size');
const arrowMale = document.getElementById('rotate_male');
const arrowColor = document.getElementById('rotate_color');
const productList = document.getElementById('product_list');
productList.addEventListener('mouseover',setTimeouts)
typeBtn.addEventListener('mouseover',closeSelectsExpType )
sizeBtn.addEventListener('mouseover',closeSelectsExpSize )
colorBtn.addEventListener('mouseover',closeSelectsExpColor)
maleBtn.addEventListener('mouseover',closeSelectsExpMale )
priceBtn.addEventListener('mouseover',closeSelectsExpPrice )
let timer; 

priceBtn.addEventListener('click', openClosePriceSelect)

function openClosePriceSelect() {
    if (priceField.classList.contains('displayflex')) {
        closePriceSelect ()
    }
    else {
    priceField.classList.add('displayflex')
    arrowPrice.style.transform = 'rotate(180deg)';
}
}

function setTimeouts() {
    timer = setTimeout(closeSelects, 3000);
  }

  function closePriceSelect (){
    priceField.classList.remove('displayflex')
    arrowPrice.style.transform = 'rotate(0deg)';
}

function closeSelects (){
        closePriceSelect ()
        closeMaleSelect ()
        closeColorSelect ()
        closeSizeSelect ()
        closeTypeSelect ()
}

function closeSelectsExpSize (){
    closePriceSelect ()
    closeMaleSelect ()
    closeColorSelect ()
    closeTypeSelect ()
}


function closeSelectsExpPrice (){
    closeMaleSelect ()
    closeColorSelect ()
    closeSizeSelect ()
    closeTypeSelect ()
}

function closeSelectsExpType (){
    closePriceSelect ()
    closeMaleSelect ()
    closeColorSelect ()
    closeSizeSelect ()
}

function closeSelectsExpMale (){
    closePriceSelect ()
    closeColorSelect ()
    closeSizeSelect ()
    closeTypeSelect ()
}

function closeSelectsExpColor (){
    closePriceSelect ()
    closeMaleSelect ()
    closeSizeSelect ()
    closeTypeSelect ()
}

typeBtn.addEventListener('click', openCloseTypeSelect)

function openCloseTypeSelect() {
    if (typeField.classList.contains('displayflex')) {
        closeTypeSelect ()
    }
    else {
    typeField.classList.add('displayflex')
    arrowType.style.transform = 'rotate(180deg)'
}
}

function closeTypeSelect (){
    typeField.classList.remove('displayflex')
    arrowType.style.transform = 'rotate(0deg)'
}

sizeBtn.addEventListener('click', openCloseSizeSelect)

function openCloseSizeSelect() {
    if (sizeField.classList.contains('displayflex')) {
        closeSizeSelect()
    }
    else {
        sizeField.classList.add('displayflex')
        arrowSize.style.transform = 'rotate(180deg)'
}
}

function closeSizeSelect (){
    sizeField.classList.remove('displayflex')
    arrowSize.style.transform ='rotate(0deg)'
}


colorBtn.addEventListener('click', openCloseColorSelect)

function openCloseColorSelect() {
    if (colorField.classList.contains('displayflex')) {
        closeColorSelect ()
    }
    else {
        colorField.classList.add('displayflex')
        arrowColor.style.transform = 'rotate(180deg)'
}
}

function closeColorSelect (){
    colorField.classList.remove('displayflex')
    arrowColor.style.transform ='rotate(0deg)'
}

maleBtn.addEventListener('click', openCloseMaleSelect)

function openCloseMaleSelect() {
    if (maleField.classList.contains('displayflex')) {
        closeMaleSelect ()
    }
    else {
        maleField.classList.add('displayflex')
        arrowMale.style.transform = 'rotate(180deg)'
}
}

function closeMaleSelect (){
    maleField.classList.remove('displayflex')
    arrowMale.style.transform ='rotate(0deg)'
}