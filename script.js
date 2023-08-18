const canvas = document.querySelector('#canvas');
const slider = document.querySelector('#slider');
let colorButton = false;
let shadeButton = false;
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

const shade = document.getElementById('shade')
shade.addEventListener('click', () => {
    if(shadeButton){
        shade.style.borderStyle = 'none';
        shadeButton = false;
    } else {    
        shadeButton = true;
        shade.style.border = 'solid 5px #7D7463';
    }
})


function createBox(){

    let box = document.createElement('div');
    box.classList.add('box');
    box.style.height= pixelSize;
    box.style.width= pixelSize;
    canvas.appendChild(box);

    
 let randomColor = ["deepskyblue", "greenyellow", "lightpink", "tomato", "lightgoldenrodyellow"]
        let num = Math.floor(Math.random() * randomColor.length);
 let opacity = 0.1;
        
    box.addEventListener('mouseover', () => {
        if(colorButton){
            box.style.backgroundColor = randomColor[num];
            box.style.opacity = '1';
        } else if(shadeButton) {
            box.style.backgroundColor = 'black';
            box.style.opacity = opacity;
            opacity += 0.1;
        } else {
        box.style.backgroundColor = '#7D7463';
        box.style.opacity = '1';
    }
    });
    
    const clear = document.querySelector('#clear');
    clear.addEventListener('click', () => {
    box.style.backgroundColor = 'floralwhite';
    })
}