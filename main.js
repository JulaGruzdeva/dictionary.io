const buttonAdd = document.querySelector('.buttonAdd');
const addBanner = document.querySelector('.addBanner')
const butNo = document.querySelector('#No');
const butAdd = document.querySelector('#Add');
const inputTranslate = document.querySelector('#inputTranslate');
const inputWord = document.querySelector('#inputWord'); 
const workList = document.querySelector('.worklist');

buttonAdd.addEventListener('click',()=>{
    buttonAdd.style.display = 'none';
    addBanner.style.display = 'block';
})

butNo.addEventListener('click',()=>{
    buttonAdd.style.display = 'block';
    addBanner.style.display = 'none';
    inputWord.value = '';
    inputTranslate.value = '';
})

butAdd.addEventListener('click',()=>{
    if(inputWord.value === '' || inputTranslate.value === '' || !inputTranslate.value.trim() || !inputWord.value.trim()){
        return false
    } else{
        localStorage.setItem(inputWord.value.trim(),inputTranslate.value.trim());
    }
    inputWord.value = '';
    inputTranslate.value = '';
    buttonAdd.style.display = 'block';
    addBanner.style.display = 'none';
    buildWorkList();

})

document.addEventListener('click',(item)=>{
    if(item.target.classList.contains('buttonShow') && item.target.id != 'Add' && item.target.id != 'No'){

        if (item.target.innerHTML == 'Show'){
            let itemParent = item.target.parentNode.parentNode.firstElementChild;
            const translate = document.createElement('p');
            translate.innerHTML = `${localStorage[itemParent.firstElementChild.innerHTML]}`;
            translate.classList.add('blockWithoutTranslateText');
            itemParent.append(translate);
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

document.addEventListener('click',(item)=>{
    let delItemParent = item.target.parentNode.parentNode.firstElementChild.firstElementChild;
    
    if(item.target.classList.contains('buttonDel')){
        item.target.parentNode.parentNode.parentNode.removeChild(item.target.parentNode.parentNode);
        localStorage.removeItem(`${delItemParent.innerHTML}`)
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

buildWorkList();

function buildWorkList(){
    workList.innerHTML = '';
    for(let i=0; i<localStorage.length; i++){
        const newBlock = document.createElement('div');
        newBlock.classList.add('blockWithoutTranslate');
        newBlock.innerHTML = `<div style="display: inline-block;">
        <p class="blockWithoutTranslateText">${localStorage.key(i)}</p>
    </div>
    <div style="display: inline-block;">
        <button class="buttonDel" style="margin-left: 168px;">X</button>
        <button class="buttonShow" style="margin-left: 4px;">Show</button>
    </div>`;
        workList.append(newBlock);
        // console.log(localStorage.key(i),localStorage[localStorage.key(i)]);
    }
}