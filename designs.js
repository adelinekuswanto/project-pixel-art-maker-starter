let sizePickerSubmit = document.querySelector('input[type=submit]');
let pixelCanvas = document.querySelector('#pixelCanvas');

function clearGrid() {
  pixelCanvas.innerHTML="";
}

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
}
 
sizePickerSubmit.addEventListener('click', function(e) {
  e.preventDefault();
  clearGrid();
  makeGrid();
})

pixelCanvas.addEventListener('click', function addBackgroundColor(e) {
  if(e.target && e.target.nodeName == 'TD') {
    let color = document.querySelector('input[type=color]').value;
    e.target.style.backgroundColor = color;
  }
})