let sizePickerSubmit = document.querySelector('input[type=submit]');
let pixelCanvas = document.querySelector('#pixelCanvas');


function makeGrid(){
  let row = document.querySelector('input[name=height]').value;
  let col = document.querySelector('input[name=width]').value;
  for (let n = 0; n < row; n++) {
    let addTr = document.createElement('tr');
    pixelCanvas.appendChild(addTr);
    for (let m = 0; m < col; m++) {
      let addTd = document.createElement('td');
      let tr = document.querySelector('#pixelCanvas').lastChild;
      if (tr.nodeName === 'TR') {
        tr.append(addTd);
      }
    }
  }
};

function clearGrid() {
  pixelCanvas.innerHTML="";
};
 
sizePickerSubmit.addEventListener('click', function(event) {
  event.preventDefault();
  clearGrid();
  makeGrid();
});

let grid = document.querySelector('td');

function addBackgroundColor() {
  let color = document.querySelector('input[type=color]').value;
  tr.style.backgroundColor = color;
};

grid.addEventListener('click', function() {
  addBackgroundColor();
})