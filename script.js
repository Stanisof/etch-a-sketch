const container = document.querySelector('#canvas');
const slider = document.querySelector('#slider');

let boxCount = slider.value * slider.value;
let pixelSize = (800 / slider.value) + "px";





slider.oninput = function() {
   pixelSize = (800 / slider.value) +"px";
   boxCount = slider.value * slider.value;
   while(canvas.firstChild) {
    canvas.removeChild(canvas.firstChild)
    };
    createCanvas();
}

function createCanvas() {
    for (let i = 0; i < boxCount; i++) {
        createBox()
    }
}


function createBox(){

    let box = document.createElement('div');
    box.classList.add('box');
    box.style.height= pixelSize;
    box.style.width= pixelSize;
    container.appendChild(box);

    let button = false;
    document.getElementById('color').addEventListener('click', () => {
        button = true;
        console.log(button)
    })

    if(button){
        /* let randomColor = ["deepskyblue", "greenyellow", "lightpink", "tomato", "lightgoldenrodyellow"]
        let num = Math.floor(Math.random() * randomColor.length); */
        box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'yellow';
    })    } else {    
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black';
    });
    }

    
    

    const clear = document.querySelector('#clear');
    clear.addEventListener('click', () => {
    box.style.backgroundColor = 'white';
    })
}