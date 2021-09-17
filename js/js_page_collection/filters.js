const priceBtn = document.getElementById('price_choice');
const priceField = document.getElementById('select_price_field');
const productList = document.getElementById('product_list');

let timer; 
const r = /\d+/;

renderPriceFilter()
renderFilter(typeArray,select_type_field)
renderFilter(colorArray,select_color_field)
renderFilter(maleArray,select_male_field)

function renderPriceFilter() {

    let filterItem;
        let html = '';
    for (let i = 0; i < priceArray.length; i++) {
        filterItem = priceArray[i];
        let value = filterItem.match(r)
        html += `
                               
                                <input type="radio" name="select-price" onclick ="select(${value})" value="${value}" id="price${value}"/>
                                <label for="price${value}" onclick ="select(${value})">${filterItem}</label> 
               `
}
    priceField.innerHTML = html
}

function renderFilter(Arr,field) {

    let filterItem;
        let html = '';
    for (let i = 0; i < Arr.length; i++) {
        filterItem = Arr[i];
        html += `
                    <div class="type_select_item"> 
                    <input type="radio" name="select" value="${filterItem.id}" id="${filterItem.id}" onclick="onChangeFilter('${filterItem.type}')" />
                    <label for="${filterItem.id}">${filterItem.type}</label> </div>
               `
}
    document.getElementById(field.id).innerHTML = html
}



function openFilter(field) {
    document.getElementById(field.id).classList.toggle('displayflex');
    document.getElementById(`rotate_${field.id}`).classList.toggle('arrow_rotate');
    document.getElementById(field.id).addEventListener('mouseleave', setTimeouts);
    document.getElementById(field.id).addEventListener('mouseenter', () => clearTimeout(timer));
}

function setTimeouts() {
    timer = setTimeout(closeSelects, 500);
  }

  function closeSelects() {
        document.getElementsByClassName('displayflex')[0].classList.remove('displayflex')
  }

