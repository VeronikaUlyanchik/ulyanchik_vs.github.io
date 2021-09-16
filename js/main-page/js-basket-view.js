const basketView = document.getElementById('container-basket');

function closeBasket() {
    basketView.classList.remove('container-basket-view')
    background.classList.remove('backgroundForBasket')
    document.body.classList.remove('overflow_hidden')
}

function viewBasket() {
    if (basketView.classList.contains('container-basket-view')) {
        closeBasket()
    }
    else{
        basketView.classList.add('container-basket-view')
    background.classList.add('backgroundForBasket')
    document.body.classList.add('overflow_hidden')
   
  
}}

