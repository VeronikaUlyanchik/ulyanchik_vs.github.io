let filtered;

function changeColor (color) {

    let product;
    filtered = items.filter(function(item) {
        if(item.id === color.id) {
        return true
    }
    return false
    })
        let html = '';
    for (let i = 0; i < filtered.length; i++) {
        product = filtered[i];
        html += `
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
            <button class="basketBtn" onclick="addToBasketArray(${i}, filtered)"> <img src="assets/shopping_cart_white_24dp.svg " class="icons_header"> </button>
            <button class="basketBtn"> <img src="assets/favorite_border_white_24dp.svg" class="icons_header"> </button>
        </div>
        </div>
        </div>
        `
}
document.getElementById(`${product.span}`).innerHTML = html

addBtn ()
}
