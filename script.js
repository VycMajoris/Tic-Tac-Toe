/* eslint-disable no-restricted-syntax */
const gameBoardGrid = document.querySelector(".gameBoardGrid");
const currentPlayerText = document.querySelector(".currentPlayerText");
const restartBtn = document.querySelector(".restartBtn");

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

// ------------------------------- Game Over Logic --------------------------

const isGameOver = () => {
  let isOver = false;
};

// ------------------------------- Game Logic -------------------------------

const GameLogic = (() => {
  /* let currentPlayer = playerX.getLetter(); */

  let currentPlayer = playerX.getLetter();

  const writeLetterToBoard = (e) => {
    if (e.target.innerHTML === "" && isGameOver.isOver === false)
      GameBoard.cellContent.splice(e.target.id, 1, currentPlayer.toUpperCase());

    displayBoard(GameBoard);

    if (checkForWin(GameBoard.cellContent) !== "") {
      if (checkForWin(GameBoard.cellContent) === "tie") {
        currentPlayerText.innerHTML = "It's a tie!";
        isGameOver.isOver = true;
      } else {
        currentPlayerText.innerHTML = `Player ${checkForWin(
          GameBoard.cellContent
        )} Wins!`;
        isGameOver.isOver = true;
      }
    }
  };

  const setPlayer = (e) => {
    if (isGameOver.isOver === false) {
      if (e.target.innerHTML === "") {
        if (currentPlayer === playerX.getLetter()) {
          currentPlayerText.innerHTML = "Player O's Turn";
          console.log(currentPlayer);
          writeLetterToBoard(e);
          currentPlayer = playerO.getLetter();
        } else {
          currentPlayerText.innerHTML = "Player X's Turn";
          console.log(currentPlayer);
          writeLetterToBoard(e);
          currentPlayer = playerX.getLetter();
        }
      }
    }

    console.log(GameBoard.cellContent);
  };

  const getPlayer = () => currentPlayer;

  // Check if the game is over

  function checkForWin(board) {
    // Check rows
    for (let i = 0; i < 9; i += 3) {
      if (
        board[i] === board[i + 1] &&
        board[i + 1] === board[i + 2] &&
        board[i] !== ""
      ) {
        return board[i];
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (
        board[i] === board[i + 3] &&
        board[i + 3] === board[i + 6] &&
        board[i] !== ""
      ) {
        return board[i];
      }
    }

    // Check diagonals
    if (board[0] === board[4] && board[4] === board[8] && board[0] !== "") {
      return board[0];
    }
    if (board[2] === board[4] && board[4] === board[6] && board[2] !== "") {
      return board[2];
    }

    // Check if all squares are filled
    if (board.every((square) => square !== "")) {
      return "tie";
    }

    // If no win or tie, game is not over
    return "";
  }

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

// restart button to clear the logic

function restartGame() {
  GameBoard.cellContent = ["", "", "", "", "", "", "", "", ""];
  displayBoard(GameBoard);

  /* GameLogic.isOver = false;
  GameLogic.currentPlayer = playerX.getLetter(); */

  currentPlayerText.innerHTML = "Player X's Turn";
}

restartBtn.addEventListener("click", restartGame);
