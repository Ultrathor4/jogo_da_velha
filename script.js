let x = "X";
let o = "O";
let marker = x;
let resultLin = null;
let resultCol = null;
const entryesLin = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
const entryesCol = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
const entryesDiag = [[0, 0, 0], [0, 0, 0]];


function insertValue(elem, l, c) {
  if (elem.innerHTML == "") {
    elem.innerHTML = marker;
    if (marker == x) {
      marker = o;
    } else if (marker == o) {
      marker = x;
    }
    
    entryesLin[l][c] = elem.innerHTML;
    entryesCol[c][l] = elem.innerHTML;
    console.log(entryesLin)
    console.log(entryesCol)
    
    for(let i = 0; i < 3; i++){
      resultLin = entryesLin[i].every(comparador);
      resultCol = entryesCol[i].every(comparador);
      console.log(resultLin);
      console.log(resultCol);
    } 
  } else {
    alert("Espaço previamente marcado!")
  }
}

function comparador(value) {
  return value == "X" || value == "O";
}