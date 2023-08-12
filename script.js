const container = document.querySelector('#container');



function createBox(){
    let box = document.createElement('div');
    box.classList.add('box');
    box.style.flex = '1 1 60px'
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black';
    });
   

    container.appendChild(box);
}

for (let i = 0; i < 256; i++) {
    createBox()
}
