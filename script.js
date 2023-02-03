/* eslint-disable no-restricted-syntax */
const gameBoardGrid = document.querySelector(".gameBoardGrid");

// eslint-disable-next-line no-plusplus
for (let i = 0; i < 9; i++) {
  const gameBoardCell = document.createElement("div");

  gameBoardCell.setAttribute("class", "gameBoardCell");
  gameBoardGrid.append(gameBoardCell);
}

const GameBoard = (() => {
  const cellContent = ["X", "O", "X", "X", "O", "X", "X", "O", "X"];
  return { cellContent };
})();

const Players = (letter) => {
  const getLetter = () => letter;

  return { getLetter };
};

const GameLogic = (whoseTurn, choiceMade) => ({}());

// write to the page from the array

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
      console.log(`${cell} and ${index}`);
      console.log(GameBoard.cellContent[index]);
      cell.textContent = GameBoard.cellContent[index];
    });
  };

  const individualCells = getDivs();
  writeToBoard(individualCells);
};

displayBoard(GameBoard);
