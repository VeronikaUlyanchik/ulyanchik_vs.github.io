const BusketField = document.getElementById('BusketField');
const keyBusket = 'Busket';
const basketArray = JSON.parse(localStorage.getItem(keyBusket)) || [];
const makeOrderField = document.getElementById('makeOrderField')
const counterInBasket = document.getElementById('counterInBasket');
const goodsExistInfo = document.getElementById('goodsExistInfo');


generateBasket()

function generateBasket(){
    let basketHtml = ''
    let total = 0;
    let totalPrice="";
    basketArray.forEach((item, index) => {
        total += item.price * (item.count || 1);
        basketHtml += `<div class="containerForOneProd" ><div class="basketImg">
        <img src="${item.img}" alt="red" id="${item.mainPic}" class="small_img">
        </div>
        <div class="basketItemTitle">
                <p>${item.title}</p>
                <p>${item.price} BYN </p> 
            <div>
            <p>Размер: ${generateSize(item.size)} </p> 
            <p>Цвет: ${item.color}</p>
            <p>Количество: <button  class="countBtn" onclick="addCount(${index}, -1)">-</button>${item.count} 
            <button  class="countBtn" onclick="addCount(${index}, 1)">+</button></p>
                <p>Всего: ${item.price * item.count} BYN </p>
                <button class="deleteFromBasket" onclick="deleteFromBasket(${index})">Удалить из корзины </button>
                </div></div></div>`
    })
    if (basketHtml === '') {
        basketHtml = 'Ваша корзина пока пустая'
        goodsExistInfo.innerHTML= 'товаров в вашей корзине: 0';
        counterInBasket.style.display ='none'
    } else {
        counterInBasket.style.display ='block'
        goodsExistInfo.innerHTML= `товаров в вашей корзине: ${basketArray.length}`;
        totalPrice += `<div>Итого: ${total} BYN </div>
        <button class="makeOrderBtn">Оформить заказ</button>`
    }

    counterInBasket.innerHTML=`<div>${basketArray.length}</div>`
    BusketField.innerHTML = basketHtml;
    makeOrderField.innerHTML = totalPrice;
}

function deleteFromBasket(basketItemIndex) {
    basketArray.splice(basketItemIndex, 1);
    localStorage.setItem(keyBusket, JSON.stringify(basketArray))
    generateBasket();
}

function addCount(itemIndex, num) {
    const item = basketArray[itemIndex];
    item.count = item.count + num;
    if (item.count === 0) {
        basketArray.splice(itemIndex, 1)
    }
    localStorage.setItem(keyBusket, JSON.stringify(basketArray))
    generateBasket();
}

function addToBasketArray(itemIndex, view) {
    const count = 1;
    const item = view[itemIndex]
    const foundItem = basketArray.find(i => i.id === item.id);
if (foundItem) {
    foundItem.count += count;
} else {
    item.count = count
    basketArray.push(item);
}
generateBasket();
localStorage.setItem(keyBusket, JSON.stringify(basketArray))
}

function generateSize(size) {
    let option;
    let arrSize = size.split(',')
    for (let i = 0; i < arrSize.length; i++) {
        option += `
        <option value="${arrSize[i]}">${arrSize[i]}</option>` 
    }
    return `<select>${option} </select>`
}





