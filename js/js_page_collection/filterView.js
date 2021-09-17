const foundItems = document.getElementById('foundItems');
const resetFilterBtn = document.getElementById('resetFilterBtn');
let selected;
let found;

function select(select) {
 
    selected = items.filter(function(i){
        if ((Number(select) >= i.price) && (i.onPage ==='main')){
            return true
        }
    })
    mainView=selected
    containerForGoods.innerHTML=renderHtml(mainView);
    foundItems.innerHTML =`${mainView.length}`;
    resetFilterBtn.style.display ='block';
    addBtn ();
}

const selectedBrands = new Array();

function onFilter(criteria) {
        found = items.filter(function(i) {
     
             if (( i.color.includes(criteria[0])== 1) ||
             (i.type.includes(criteria[0])== 1) && (i.onPage ==='main')||
             (i.male.includes(criteria[0])==1) && (i.onPage ==='main'))
             {
                 return true
             }
         })
         mainView=found
    containerForGoods.innerHTML=renderHtml(mainView);
    foundItems.innerHTML = `${mainView.length}`;
    resetFilterBtn.style.display ='block';
    addBtn ();
}


function onChangeFilter(brand) {
        selectedBrands.unshift(brand);
    
    onFilter(selectedBrands)
    addBtn ()
}

function resetFilters(){
    renderView() 
    addBtn ()
    resetFilterBtn.style.display ='none';
}