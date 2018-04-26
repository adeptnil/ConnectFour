var currentPlayer = 'Black';
var nextPlayer = '';


var gameBoard = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
]



function checkWin() {
  const edgeX = gameBoard[0].length - 3;
  for (let y = 0; y < gameBoard.length; y++) {
    let row = gameBoard[y];
    for (let x = 0; x < edgeX; x++) {
      let cell = row[x];
      if (cell === gameBoard[y][x+1] && cell === gameBoard[y][x+2] && cell === gameBoard[y][x+3] && cell != 0) {
        alert(currentPlayer + ' Wins!');
        reset();
      }
    }
  }
  const edgeY = gameBoard.length - 3;
  for (let y = 0; y < edgeY; y++) {
    for (let x = 0; x < gameBoard[0].length; x++) {
      let cell = gameBoard[y][x];
      if (cell === gameBoard[y+1][x] && cell === gameBoard[y+2][x] && cell === gameBoard[y+3][x] && cell != 0) {
        alert(currentPlayer + ' Wins!');
        reset();
      }
    }
  }
  for(let y = 0; y < edgeY; y++){
    
    for(let x = 0; x < edgeX; x++) {
      let cell = gameBoard[y][x];
      if(cell === gameBoard[y+1][x+1] && cell === gameBoard[y+2][x+2] && cell === gameBoard[y+3][x+3] && cell != 0) {
        alert(currentPlayer + ' Wins!')
        reset();
      }
    }
  }
  for (let y = 3; y < gameBoard.length; y++) {
    for (let x = 0; x < edgeX; x++) {
      let cell = gameBoard[y][x];
      if (cell === gameBoard[y-1][x+1] && cell === gameBoard[y-2][x+2] && cell === gameBoard[y-3][x+3] && cell != 0){
        alert(currentPlayer + ' Wins');
        reset();
      }
    }
  }
  var checkDraw = '';
  for (let y = 0; y < gameBoard.length; y++) {
    if (gameBoard[y].includes(0)) {
      checkDraw = 'False'
    }
    else {
      checkDraw = 'True';
    }
  }
  if (checkDraw === 'True') {
    alert('DRAW!? You both suck!');
      reset();
  }
}



addCircle = function(event) {
    var column = event.target
    var blackCount = document.querySelectorAll(`#${column.id}.blackDisc`).length;
    var blackDisc = document.createElement('div')
    blackDisc.className = "blackDisc";
    blackDisc.id = column.id
    
    
    var redCount = document.querySelectorAll(`#${column.id}.redDisc`).length;
    var redDisc = document.createElement('div')
    redDisc.className = "redDisc";
    redDisc.id = column.id
    const colIndex = column.id.split('-')[1];
    
    if(currentPlayer === "Black"  && blackCount + redCount < 6) {
      column.appendChild(blackDisc);
      if (gameBoard[blackCount][colIndex] === 0 && gameBoard[blackCount][colIndex] != 2) {
        gameBoard[blackCount][colIndex] = 1;
      }
      else {
        gameBoard[blackCount+redCount][colIndex] = 1;
      }
  

      nextPlayer = "Red";
    } else if (blackCount + redCount < 6) {
      column.appendChild(redDisc);
      if (gameBoard[redCount][colIndex] === 0) {
        gameBoard[redCount][colIndex] = 2;
      }
      else {
        gameBoard[redCount+blackCount][colIndex] = 2;
      }
      nextPlayer = "Black";
    }
    checkWin();
    currentPlayer = nextPlayer; 
  }



  var columns = document.querySelectorAll(".column");
  


  for(var i = 0; i < columns.length; i++) {
    columns[i].addEventListener('click', addCircle);
  }




function reset() {
    gameBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ]
    let columns = document.getElementsByClassName('column');
    
    for (let x = 0; x < columns.length; x++) {
      columns[x].innerHTML = '';
    }
  }





// var curentPlayer = "Black";
// var nextPlayer = "";

// let board = [
//     [0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0],
// ]


// var gameBoard = document.getElementById("board");

// for (let x = 0; x < board.length; x++){
//       const boardCols = board[x];
//       const colDiv = document.createElement("div");
//       colDiv.classList.add("column");
//     gameBoard.appendChild(colDiv);

//         for (let y = 0; y < board[x].length; y++){
//             const colCells = board[x][y];
//             const cellDiv = document.createElement("div")
//             cellDiv.classList.add("cell");
//             colDiv.appendChild(cellDiv);
//         }
//     }

//     function drawPiece(column, color) {
//         let circle = document.createElement('div')
//         circle.classList.add('circle', color)
//         column.appendChild(circle);
//     }

//     const edgeX = board[0].length - 2;
//     const edgeY = board.length - 2;


// // HORIZONTAL
// // iterate each row
// // for(let y = 0; y < board.length; y++){

// //   // iterate each cell in the row
// //   for(let x = 0; x < edgeX; x++) {
// //     let cell = board[y][x];
    
//     // Only check if cell is filled
//     // if(cell !== 0) {
      
//     //   // Check the next two cells for the same value
//     //   if(cell === board[y][x+1] && cell === board[y][x+2] ) {
//     //     console.log("3 in a row vertical found at " + (x+1) + ":" + (y+1))
//     //   }
//     // }
// //   }
// // }

// // VERTICAL
// // iterate each row   
// for(let y = 0; y < edgeY; y++){

//   // iterate each cell in the row
//   for(let x = 0; x < board[0].length; x++) {
//     cell = board[y][x];
    
//     // Only check if cell is filled
//     if(cell !== 0) {
      
//       // Check the next two cells for the same value
//       if(cell === board[y+1][x] && cell === board[y+2][x] ) {
//         console.log("3 in a row horizontal found at " + (x+1) + ":" + (y+1))
//       }
//     }
//   }
// }

// // DIAGONAL (DOWN RIGHT)
// // iterate each row   
// for(let y = 0; y < edgeY; y++){

//   // iterate each cell in the row
//   for(let x = 0; x < edgeX; x++) {
//     cell = board[y][x];
    
//     // Only check if cell is filled
//     if(cell !== 0) {
      
//       // Check the next two cells for the same value
//       if(cell === board[y+1][x+1] && cell === board[y+2][x+2] ) {
//         console.log("3 in a row down-right found at " + (x+1) + ":" + (y+1))
//       }
//     }
//   }
// }


// // DIAGONAL (DOWN LEFT)
// // iterate each row   
// for(let y = 2; y < board.length; y++){

//   // iterate each cell in the row
//   for(let x = 0; x < edgeX; x++) {
//     cell = board[y][x];
    
//     // Only check if cell is filled
//     if(cell !== 0) {
      
//       // Check the next two cells for the same value
//       if(cell === board[y-1][x+1] && cell === board[y-2][x+2] ) {
//         console.log("3 in a row down-left found at " + (x+1) + ":" + (y+1))
//       }
//     }
//   }
// }
