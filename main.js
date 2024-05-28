document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start_btn");
  const pauseButton = document.getElementById("pause_btn");
  const gameBoard = document.getElementById("board");
  let gameOver = true;
  let score = 0;
});

//Formen
const lTetromino = [
  [1, 11, 21, 2],
  [10, 11, 12, 22],
  [1, 11, 21, 20],
  [10, 20, 21, 22],
];

function startGame() {
  for (let i = 0; i < 200; i++) {
    const cell = document.createElement("div");
    gameBoard.appendChild(cell);
  }
  let gameOver = false;
  console.log("start");
}

function pauseGame() {
  console.log("pause");
}
startButton.addEventListener("click", startGame);
pauseButton.addEventListener("click", pauseGame);

startGame();
