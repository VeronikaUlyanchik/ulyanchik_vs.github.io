const productList = document.getElementById('productList');
const width=205;
const nextBtn = document.getElementById('next');
const previousBtn = document.getElementById('previous');
let currentIndex = 0;
const lastIndex = -4;
previousBtn.setAttribute('disabled', 'disabled');

nextBtn.addEventListener('click',scrollNext);
previousBtn.addEventListener('click',scrollPrevious);

function scrollNext() {
    previousBtn.removeAttribute('disabled', 'disabled');
    currentIndex--;
    productList.style.transform = `translateX(${currentIndex*width}px)`; 
    if (currentIndex === lastIndex) {
        nextBtn.setAttribute('disabled', 'disabled');
    }
}

function scrollPrevious() {
    nextBtn.removeAttribute('disabled', 'disabled');
    currentIndex++;
    productList.style.transform = `translateX(${currentIndex*width}px)`; 
    if (currentIndex === 0) {
        previous.setAttribute('disabled', 'disabled');
    }
}