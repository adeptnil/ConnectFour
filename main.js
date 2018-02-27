var currentPlayer = "red";
var nextPlayer = "black";
var redDiscSelecs = new Array();
var blackDiscSelecs = new Array();

// board// @TODO: Make this work with any n-in-a-row; not just 3-in-a-row
//  const n = 3;

let board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]

document.getElementById("lum").onclick = displayCurrentPlayer;
function displayCurrentPlayer () {
  document.getElementById
}

document.getElementById("column").onclick = columnDiscInstall;
function columnDiscInstall() {

}

handleClick = function (event) {
  var cell = event.target
  cell.innerHTML = redDisc;
  if (currentPlayer === "red") {
      playerSelections = redDiscSelecs;
      nextPlayer = "black";
  } else {
      playerSelections = blackDiscSelecs;
      nextPlayer = "red";
  }

// If we search past the edge we'll get a null pointer error
const edgeX = board[0].length - 2;
const edgeY = board.length - 2;

// // HORIZONTAL
// iterate each row
for(let y = 0; y < board.length; y++){

  // iterate each cell in the row
  for(let x = 0; x < edgeX; x++) {
    let cell = board[y][x];
    
    // Only check if cell is filled
    if(cell !== 0) {
      
      // Check the next two cells for the same value
      if(cell === board[y][x+1] && cell === board[y][x+2] ) {
        console.log("3 in a row vertical found at " + (x+1) + ":" + (y+1))
      }
    }
  }
}

// VERTICAL
// iterate each row   
for(let y = 0; y < edgeY; y++){

  // iterate each cell in the row
  for(let x = 0; x < board[0].length; x++) {
    cell = board[y][x];
    
    // Only check if cell is filled
    if(cell !== 0) {
      
      // Check the next two cells for the same value
      if(cell === board[y+1][x] && cell === board[y+2][x] ) {
        console.log("3 in a row horizontal found at " + (x+1) + ":" + (y+1))
      }
    }
  }
}

// DIAGONAL (DOWN RIGHT)
// iterate each row   
for(let y = 0; y < edgeY; y++){

  // iterate each cell in the row
  for(let x = 0; x < edgeX; x++) {
    cell = board[y][x];
    
    // Only check if cell is filled
    if(cell !== 0) {
      
      // Check the next two cells for the same value
      if(cell === board[y+1][x+1] && cell === board[y+2][x+2] ) {
        console.log("3 in a row down-right found at " + (x+1) + ":" + (y+1))
      }
    }
  }
}


// DIAGONAL (DOWN LEFT)
// iterate each row   
for(let y = 2; y < board.length; y++){

  // iterate each cell in the row
  for(let x = 0; x < edgeX; x++) {
    cell = board[y][x];
    
    // Only check if cell is filled
    if(cell !== 0) {
      
      // Check the next two cells for the same value
      if(cell === board[y-1][x+1] && cell === board[y-2][x+2] ) {
        console.log("3 in a row down-left found at " + (x+1) + ":" + (y+1))
      }
    }
  }
}

function checkDraw() {
  return redDiscSelecs.length + blackDiscSelecs.length >= cells.length
}
function resetGame() {
  blackDiscSelecs = new Array();
  redDiscSelecs = new Array();
  for (var i = 0; i < cells.length; i++) {
      cells[i].innerHTML = "Click Mouse Here"
  }
}
