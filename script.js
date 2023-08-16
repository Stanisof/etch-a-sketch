const container = document.querySelector('#canvas');

const slider = document.querySelector('#slider');
slider.oninput = function() {
   size = slider.value;
   let pixelSize = (800 / size) +"px";
   let boxCount = slider.value * slider.value;
   console.log(pixelSize);
   return pixelSize;
}


function createBox(){
    
    let box = document.createElement('div');
    box.classList.add('box');
    box.style.height= '25px';
    box.style.width= '25px';

    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black';
    });

    container.appendChild(box);

    const clear = document.querySelector('#clear');
    clear.addEventListener('click', () => {
    box.style.backgroundColor = 'white';
})
}



for (let i = 0; i < 1024; i++) {
    createBox()
}

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    
})
