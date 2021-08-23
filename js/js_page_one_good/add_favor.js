'use strict';
function addFavor () {
    if (document.getElementById('not_favor').classList.contains('not_favor')){
    document.getElementById('not_favor').classList.remove('not_favor')
    document.getElementById('favor').classList.remove('favor_block')
    } else {
        document.getElementById('not_favor').classList.add('not_favor')
        document.getElementById('favor').classList.add('favor_block')
    }
}