const value = document.querySelector('.value');
const diffVal = document.querySelector('.inc-dec-input');
const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
const resetBtn = document.querySelector('.reset');

plusBtn.addEventListener('click', ()=>{
    let val = parseInt(value.innerText);
    let diff = parseInt(diffVal.value);
    val += diff;
    value.innerText = val;
})

minusBtn.addEventListener('click', ()=>{
    let val = parseInt(value.innerText);
    let diff = parseInt(diffVal.value);
    val -= diff;
    value.innerText = val;
})

resetBtn.addEventListener('click', ()=>{
    diffVal.value = 1;
    value.innerText = 0;
})