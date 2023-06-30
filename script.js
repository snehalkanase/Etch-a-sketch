const grid = document.querySelector(".grid");

function removeAllChildNode(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
// create grid
createGrid = () => {
  grid.setAttribute(
    "style",
    `grid-template-columns: repeat(${16}, 2fr); grid-template-row: repeat(${16}, 2fr);`
  );
  for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    // div.addEventListener('mouseover', (e) => {
    //     e.target.style.backgroundColor = 'black';
    // });
    grid.appendChild(div);
  }
};

// get slider value and make grid of that value
const slider = document.querySelector("#slider");
const screenVal = document.querySelector(".value");

slider.addEventListener("input", () => {
  const val = document.getElementById("slider").value;
  screenVal.textContent = val;
  removeAllChildNode(grid);
  grid.setAttribute(
    "style",
    `grid-template-columns: repeat(${val}, 2fr); grid-template-row: repeat(${val}, 2fr);`
  );
  for (let i = 0; i < val * val; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    // div.addEventListener('mouseover', (e) => {
    //     e.target.style.backgroundColor = 'black';
    // });
    grid.appendChild(div);
  }
});

// make black sketch
const black = document.getElementById("b");
black.addEventListener("click", (e) => {
  const val = document.getElementById("slider").value;
  let cell = grid.children;
  black.classList.add("active");
  rainbow.classList.remove('active');
  erase.classList.remove('active');
  reset.classList.remove('active');
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });
  }
});

// function to create random colors
function randomColor(){
  const code = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += code[Math.floor(Math.random() * 16)];
  }
  return color;
};

// make rainbow color
const rainbow = document.getElementById('rb');
rainbow.addEventListener('click', () => {
    const val = document.getElementById('slider').value;
    const cell = grid.children;
    rainbow.classList.add('active');
    black.classList.remove("active");
    reset.classList.remove('active');
  erase.classList.remove('active');
    for (let i = 0; i < val * val; i++) {
        cell[i].addEventListener("mouseover", (e) => {
          e.target.style.backgroundColor = randomColor() ;
        });
      }
});
// erase a perticular cell color
const erase = document.getElementById("e");
erase.addEventListener("click", (e) => {
  const val = document.getElementById("slider").value;
  let cell = grid.children;
  erase.classList.add("active");
  black.classList.remove("active");
  rainbow.classList.remove('active');
  reset.classList.remove('active');
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "rgb(238, 238, 238)";
    });
  }
});

// reset all the cell or grid
const reset = document.getElementById('r');
reset.addEventListener('click', () => {
    const val = document.getElementById("slider").value;
    let cell = grid.children;
    reset.classList.add('active');
    erase.classList.remove("active");
    black.classList.remove("active");
    rainbow.classList.remove('active');
    for (let i = 0; i < val * val; i++) {
          cell[i].style.backgroundColor = "rgb(238, 238, 238)";
        }
});

// choose color by own
const chooseColor = document.getElementById('c');
chooseColor.addEventListener('input', () => {
    const val = document.getElementById("slider").value;
    const color = document.getElementById('color').value;
    let cell = grid.children;

    reset.classList.remove('active');
    erase.classList.remove("active");
    black.classList.remove("active");
    rainbow.classList.remove('active');
    for(let i =0 ; i<val*val; i++){
        cell[i].addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = color;
        })
    }

})

createGrid();
