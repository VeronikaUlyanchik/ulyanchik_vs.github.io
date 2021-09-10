const spanPicTwo = document.getElementById('spanPicTwo');
const mainColorPic = document.getElementById ('mainColorPic');
const mainColorPicTaylorHigh = document.getElementById ('mainColorPicTaylorHigh');
const spanPicTaylorHigh = document.getElementById('spanPicTaylorHigh');
const mainColorPicChuckHigh = document.getElementById ('mainColorPicChuckHigh');
const spanPicChuckHigh = document.getElementById('spanPicChuckHigh');
const mainColorPicChuckLow = document.getElementById ('mainColorPicChuckLow');
const spanPicChuckLow = document.getElementById('spanPicChuckLow');
const mainColorPicVintage = document.getElementById ('mainColorPicVintage');
const spanPicChuckVintage = document.getElementById('spanPicChuckVintage');



function changeColor (color) {

    const imgInput = items.find(item => item.id === color.id).img
        spanPicTwo.innerHTML = `<img src="${imgInput}" alt="white" >`
        mainColorPic.style.display= 'none';
}

function changeColorFirst (color) {
    const imgInput = items.find(item => item.id === color.id).img
        spanPicTaylorHigh.innerHTML = `<img src="${imgInput}" alt="white" >`
        mainColorPicTaylorHigh.style.display= 'none';
}


function changeColorChucksHigh (color) {
    const imgInput = items.find(item => item.id === color.id).img
        spanPicChuckHigh.innerHTML = `<img src="${imgInput}" alt="white" >`
        mainColorPicChuckHigh.style.display= 'none';
}

function changeColorChucksLow (color) {
    const imgInput = items.find(item => item.id === color.id).img
        spanPicChuckLow.innerHTML = `<img src="${imgInput}" alt="white" >`
        mainColorPicChuckLow.style.display= 'none';
}

function changeColorCanvas (color) {
    const imgInput = items.find(item => item.id === color.id).img
    spanPicChuckVintage.innerHTML = `<img src="${imgInput}" alt="white" >`
        mainColorPicVintage.style.display= 'none';
}