const gameBoardGrid = document.querySelector(".gameBoardGrid");

// eslint-disable-next-line no-plusplus
for (let i = 0; i < 9; i++) {
  const gameBoardCell = document.createElement("div");
  gameBoardCell.style.border = "2px solid black";

  gameBoardCell.setAttribute("class", "gameBoardCell");
  gameBoardGrid.append(gameBoardCell);
}
