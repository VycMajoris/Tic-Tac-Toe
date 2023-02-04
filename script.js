/* eslint-disable no-restricted-syntax */
const gameBoardGrid = document.querySelector(".gameBoardGrid");
const currentPlayerText = document.querySelector(".currentPlayerText");

// ------------------------------- Gameboard -------------------------------
const GameBoard = (() => {
  const cellContent = ["", "", "", "", "", "", "", "", ""];

  /* const cellContent = []; */
  return { cellContent };
})();

// ------------------------------- write to the page from the array -------------------------------

const displayBoard = (GameBoard) => {
  const getDivs = () => {
    const gameBoardGrid = document.querySelector(".gameBoardGrid");
    const individualCells = Array.from(
      gameBoardGrid.querySelectorAll(".gameBoardCell")
    );
    return individualCells;
  };

  const writeToBoard = (individualCells) => {
    individualCells.forEach((cell, index) => {
      cell.textContent = GameBoard.cellContent[index];
    });
  };

  const individualCells = getDivs();
  writeToBoard(individualCells);
};

// ------------------------------- Players ---------------------------------

const Players = (letter) => {
  const getLetter = () => letter;

  return { getLetter };
};

// ------------------------------- Create Players --------------------------
const playerX = Players("x");
const playerO = Players("o");

// ------------------------------- Game Logic -------------------------------

const GameLogic = ((choiceMade, isCellEmpty) => {
  /* let currentPlayer = playerX.getLetter(); */
  let currentPlayer = playerX.getLetter();
  console.log(currentPlayer);

  const writeLetterToBoard = (e) => {
    if (e.target.innerHTML === "")
      GameBoard.cellContent.splice(e.target.id, 1, currentPlayer.toUpperCase());
    console.log(e.target.id);
    displayBoard(GameBoard);
  };

  const setPlayer = (e) => {
    if (e.target.innerHTML === "") {
      if (currentPlayer === playerX.getLetter()) {
        currentPlayerText.innerHTML = "Player O's Turn";
        writeLetterToBoard(e);
        currentPlayer = playerO.getLetter();
      } else {
        currentPlayerText.innerHTML = "Player X's Turn";
        writeLetterToBoard(e);
        currentPlayer = playerX.getLetter();
      }
    }
    console.log(`cellContent is ${GameBoard.cellContent}`);
    console.log(GameBoard.cellContent);
  };

  const getPlayer = () => currentPlayer;

  const checkIfOver = () => {};

  return { setPlayer, getPlayer, writeLetterToBoard };
})();

// eslint-disable-next-line no-plusplus
for (let i = 0; i < 9; i++) {
  const gameBoardCell = document.createElement("p");

  gameBoardCell.setAttribute("class", "gameBoardCell");
  gameBoardCell.setAttribute(`id`, `${i}`);

  gameBoardCell.addEventListener("click", GameLogic.setPlayer);
  /* gameBoardCell.addEventListener("click", GameLogic.writeLetterToBoard); */
  gameBoardGrid.append(gameBoardCell);
}
