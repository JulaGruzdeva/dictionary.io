const buttonAdd = document.querySelector('.buttonAdd');
const addBanner = document.querySelector('.addBanner')
const butNo = document.querySelector('#No');
const butAdd = document.querySelector('#Add');
const inputTranslate = document.querySelector('#inputTranslate');
const inputWord = document.querySelector('#inputWord'); 

buttonAdd.addEventListener('click',()=>{
    buttonAdd.style.display = 'none';
    addBanner.style.display = 'block';
})

butNo.addEventListener('click',()=>{
    buttonAdd.style.display = 'block';
    addBanner.style.display = 'none';
})

butAdd.addEventListener('click',()=>{
    localStorage.setItem(inputWord.value,inputTranslate.value);
    inputWord.value = '';
    inputTranslate.value = '';
    buttonAdd.style.display = 'block';
    addBanner.style.display = 'none';
})

document.addEventListener('click',(item)=>{
    if(item.target.classList.contains('buttonShow') && item.target.id != 'Add' && item.target.id != 'No'){

        if (item.target.innerHTML == 'Show'){
            const translete = document.createElement('p');
            translete.innerHTML = 'MOZG';
            translete.classList.add('blockWithoutTranslateText');
            let itemParent = item.target.parentNode.parentNode.firstElementChild;
            itemParent.append(translete);
            item.target.innerHTML = 'Hide';
        }
        
        else if (item.target.innerHTML == 'Hide'){
            let itemParent = item.target.parentNode.parentNode.firstElementChild;
            console.log(itemParent.lastElementChild);
            itemParent.removeChild(itemParent.lastElementChild);
            item.target.innerHTML = 'Show';
        }
    }

})

function atrToNum(x){
    let res = '';
    for(i of x){
        if (i != 'x' && i != 'p'){
            res += i;
        }
    }
    return Number(res);
}