var color = [, "#3C9EE7", "#E7993C", 
  "#E73C99", "#3CE746", "#E7993C"];

const cdiv = document.querySelector('.container');

let root = document.documentElement;

let numberCells = 16;

// promp ask size
let handleSize = document.getElementById("grid");

handleSize.addEventListener("click", function() {
  numberCells = prompt("How many squares per side? (Maximum: 100)");
  root.style.setProperty('--sizeGrid',numberCells);
    //const numberCells = parseInt(squareGrid, 10);
    if (isNaN(numberCells)) {
        window.alert("You must enter a positive integer. (Maximum: 100)");
        return;
    }
    else if (numberCells <= 0) {
        window.alert("You must enter a positive integer. (Maximum: 100)");
        return;
    }
    else if (numberCells > 100) {
        window.alert("You must enter a positive integer. (Maximum: 100)");
        return;
    }
    cdiv.innerHTML = "";
    makeMatrix();
})

// Add 16 divs
function makeMatrix() {
  for (let i = 1; i < (numberCells * numberCells + 1); i++) {
      const div = document.createElement('div');
      div.style.cssText = "border: 1px solid black; margin: 0px -1px -1px 0px";
      div.addEventListener('mouseover', function() {
        div.style.background = color[Math.floor(Math.random() * color.length)];
      }
    );
      cdiv.appendChild(div);
    }
}

makeMatrix()

// reload game

function refreshPage(){
  window.location.reload();
} 