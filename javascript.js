const gridCells = document.getElementsByClassName("body-grid-box");
let playerOne = true;
let gridOne = "";
let gridTwo = "";
let gridThree = "";
let gridFour = "";
let gridFive = "";
let gridSix = "";
let gridSeven = "";
let gridEight = "";
let gridNine = "";



function selectBoxDemo(){
  if(playerOne === true){
    let iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    let iconPath = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );
    iconSvg.setAttribute('fill', 'currentcolor');
    iconSvg.setAttribute('viewBox', '0 0 24 24');
    iconPath.setAttribute(
      'd',
      'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z'
    );
    iconSvg.setAttribute('width', '84px');
    iconSvg.setAttribute('heigth', '84px');
    iconSvg.appendChild(iconPath);
    this.appendChild(iconSvg);
    console.log(this.getAttribute("data-index"))
    
    this.setAttribute("data-index","cross")
    console.log(this.getAttribute("data-index"));
    playerOne = false;
  }
  else if(playerOne === false){
    let iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    let iconPath = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );
    iconSvg.setAttribute('fill', 'currentcolor');
    iconSvg.setAttribute('viewBox', '0 0 24 24');
    iconPath.setAttribute(
      'd',
      'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z'
    );
    iconSvg.setAttribute('width', '84px');
    iconSvg.setAttribute('heigth', '84px');
    iconSvg.appendChild(iconPath);
    this.appendChild(iconSvg);
    
    this.setAttribute("data-index","tick")
    playerOne = true;
  }
  degId();
  threeRow();
}

function changePlayer(){
  
}

for (const cell of gridCells){
  cell.addEventListener('click', e => {
  if(cell.getAttribute("data-index") === null){
    let selectBox = selectBoxDemo.bind(cell);
    selectBox();
    // cell.d
    }})
  }

// function gameOver(){
//   if()
// }

function degId(){
  for (const cell of gridCells){
    if(cell.getAttribute("data-index") == "cross"){
      cell.id = "cross";
    }
    else if(cell.getAttribute("data-index") == "tick"){
      cell.id = "tick";
    }
  }

}

function threeRow(){
  console.log("Three function")
  if(gridCells[0].id == "cross" && gridCells[1].id == "cross" && gridCells[2].id == "cross"){
    console.log("three inner function")
    alert("player One has won!")
  }
}

console.log(gridCells);
console.log(gridCells[1].id);


