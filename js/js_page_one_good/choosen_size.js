'use strict';
function chooseSize (size) {
    if (document.getElementById(size).classList.contains('js-size-choosen')){
    document.getElementById(size).classList.remove('js-size-choosen')
    } else {
        document.getElementById(size).classList.add('js-size-choosen')
    }
}