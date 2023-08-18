const border = document.querySelector('#canvas');
const slider = document.querySelector('#slider');
let colorButton = false;
let boxCount = slider.value * slider.value;
let pixelSize = (800 / slider.value) + "px";

createCanvas();

function createCanvas() {
    for (let i = 0; i < boxCount; i++) {
        createBox()
    }
}

slider.oninput = function() {
   pixelSize = (800 / slider.value) +"px";
   boxCount = slider.value * slider.value;
   while(canvas.firstChild) {
    canvas.removeChild(canvas.firstChild)
    };
    createCanvas();
}

const color = document.getElementById('color')
color.addEventListener('click', () => {
    if(colorButton){
        color.style.borderStyle = 'none';
        colorButton = false;
    } else {    
        colorButton = true;
        color.style.border = 'solid 5px #7D7463';
    }
})


function createBox(){

    let box = document.createElement('div');
    box.classList.add('box');
    box.style.height= pixelSize;
    box.style.width= pixelSize;
    border.appendChild(box);

    
 let randomColor = ["deepskyblue", "greenyellow", "lightpink", "tomato", "lightgoldenrodyellow"]
        let num = Math.floor(Math.random() * randomColor.length);
        
        
    box.addEventListener('mouseover', () => {
        if(colorButton){
            box.style.backgroundColor = randomColor[num];
        } else {
        box.style.backgroundColor = '#7D7463';
    }
    });
    
    const clear = document.querySelector('#clear');
    clear.addEventListener('click', () => {
    box.style.backgroundColor = '#F4E0B9';
    })
}

function createColor() {

}