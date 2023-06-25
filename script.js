const grid = document.querySelector('.grid');

function removeAllChildNode(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    }
createGrid = () => {
    grid.setAttribute('style', `grid-template-columns: repeat(${16}, 2fr); grid-template-row: repeat(${16}, 2fr);`);
    for(let i = 0; i< 16*16 ; i++){
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        });
        grid.appendChild(div);
    }
};

const slider = document.querySelector('#slider');
const screenVal = document.querySelector('.value');

slider.addEventListener('input', () => {
    const val = document.getElementById('slider').value;
    screenVal.textContent = val;
    removeAllChildNode(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-row: repeat(${val}, 2fr);`);
    for(let i = 0; i< val*val; i++){
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        });
        grid.appendChild(div);
    }
});

const black = document.getElementById('b');
black.addEventListener('click', (e) => {
    const val = document.getElementById('slider').value;
    let cell = grid.children;
    for(let i = 0; i< val*val; i++){
        cell[i].addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        });
    }
}) 

createGrid();
