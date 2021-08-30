const searchBtn = document.getElementById('searchBtn');
const searchBox = document.getElementById('searchBox');
const closeSearchBtn = document.getElementById('closeSearchBtn');
const searchInput = document.getElementById('searchInput');
const searchLabelInput = document.getElementById('search_label_input');



searchBtn.addEventListener('click',openSearchBox )

function openSearchBox() {
    searchBtn.classList.add('close_none');
    closeSearchBtn.classList.remove('close_none');
    searchBox.style.width = '400px';
    searchLabelInput.style.display ="block"
}
closeSearchBtn.addEventListener('click',closeSearchBox )

function closeSearchBox() {
    searchBtn.classList.remove('close_none');
    closeSearchBtn.classList.add('close_none');
    searchBox.style.width = '0px';
    searchLabelInput.style.display ="none"
}