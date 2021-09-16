const containerForGoods = document.getElementById('product_list')
let mainView;



function renderView() {
   let renderView = items.filter(function(item) {
        if(item.onPage ==='main') {
        return true
    }
    return false
})
    containerForGoods.innerHTML = renderHtml(renderView);
    mainView = renderView;
}


renderView ()
addBtn ()

function addBtn (){
    document.getElementById('BtnFieldspanPicTwo').innerHTML =
    `<button class="color_button whiteBtn" onclick="changeColor(this)" id="whiteBtnTwo"></button>
    <button class="color_button redBtn" onclick="changeColor(this)" id="redBtnTwo"></button>
    <button class="color_button blackBtn" onclick="changeColor(this)" id="blackBtnTwo"></button>`
    
    document.getElementById('BtnFieldspanPicTaylorHigh').innerHTML =
    ` <button class="color_button whiteBtn" onclick="changeColor(this)" id="whiteBtnOne"></button>
    <button class="color_button redBtn" onclick="changeColor(this)" id="redBtnOne"></button>
    <button class="color_button blackBtn" onclick="changeColor(this)" id="blackBtnOne"></button>
    <button class="color_button blueBtn" onclick="changeColor(this)" id="blueBtnOne"></button>`

    document.getElementById('BtnFieldspanPicChuckHigh').innerHTML =
    ` <button class="color_button whiteBtn" onclick="changeColor(this)" id="whiteBtnThree"></button>
    <button class="color_button blackBtn" onclick="changeColor(this)" id="blackBtnThree"></button>`

    document.getElementById('BtnFieldspanPicChuckLow').innerHTML =
    ` <button class="color_button whiteBtn" onclick="changeColor(this)" id="whiteBtnFour"></button>
    <button class="color_button blackBtn" onclick="changeColor(this)" id="blackBtnFour"></button>`

    document.getElementById('BtnFieldspanPicChuckVintage').innerHTML =
    `<button class="color_button vineBtn" onclick="changeColor(this)" id="redBtnCanvas"></button>
    <button class="color_button greenBtn" onclick="changeColor(this)" id="greenBtnCanvas"></button>`
}


function renderHtml(renderView) {
    let html = '';
    for (let i = 0; i < renderView.length; i++) {
        const product = renderView[i];
        html += `<div class="good_card" id="${product.span}">
                    <a href="page_one_good.html">
            <img src="${product.img}" alt="red" id="${product.mainPic}">
            <p>${product.title}</p>
            <p>${product.price} BYN</p>
            <p class="small_text_colors">${product.numberColors} Цвета</p>
        </a>
        <div class="color_select_btn"> <div id="BtnField${product.span}">
        <button class="color_button ${product.id}"></button>
        
        </div> 
        <div>
            <button class="basketBtn" onclick="addToBasketArray(${i}, mainView)"> <img src="assets/shopping_cart_white_24dp.svg " class="icons_header"> </button>
            <button class="basketBtn"> <img src="assets/favorite_border_white_24dp.svg" class="icons_header"> </button>
        </div>
        </div>
        </div>
        `
    }
    return html
}

