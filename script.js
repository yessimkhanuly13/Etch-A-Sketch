const container = document.querySelector('.container');
const size = document.querySelector('#size');
const button = document.querySelector('#btn');
const colorFromInput = document.querySelector('#input');
const colorBtn = document.querySelector('#color-btn');
let trigger = false;
let number = 16;

function createGrid(size){
    for(let i = 0; i< size; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < size; j++){
            const col = document.createElement('div');
            col.classList.add('col');
            col.addEventListener('mouseover', ()=>{
                if(trigger == true){
                    const color = randomColor();
                    col.style.background = color;
                }else{
                    col.style.background = colorFromInput.value;
                }
            })
            row.appendChild(col)
        }
        container.appendChild(row)
    }
}

function randomColor(){
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);

    const color = "rgb(" + x + "," + y + "," + z +")";
    return color;
}

colorBtn.addEventListener('click', ()=>{
    if(trigger == false){
        trigger = true;
        colorBtn.textContent = "Set color"
    }else{
        trigger = false;
        colorBtn.textContent = "Random colors"
    }
})


createGrid(16);

