const container = document.querySelector('#container');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '800px';
container.style.height = '800px';



function createBox(){
    let box = document.createElement('div');
    box.classList.add('box');
    box.style.width = '50px';
    box.style.height = '50px';

    container.appendChild(box);
}

for (let i = 0; i < 256; i++) {
    createBox()
}
