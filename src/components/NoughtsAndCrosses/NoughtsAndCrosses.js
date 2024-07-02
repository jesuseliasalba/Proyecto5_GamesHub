import { CheckWinnerNAC } from "../CheckWinnerNAC/CheckWinnerNAC";
import { StoreNACWinners } from "../StoreNACWinners/StoreNACWinners";
import "./NoughtsAndCrosses.css";

export const NoughtsAndCrosses = (parent) => {
  if (document.querySelector("#game")) {
    document.querySelector("#game").remove();
    document.querySelector("#turn").remove();
  }
  const game = document.createElement("div");
  game.id = "game";
  game.classList.add("display-flex");

  let turn = "x";

  let table = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  let winner;

  for (let i = 0; i < table.length; i++) {
    for (let i2 = 0; i2 < table[i].length; i2++) {
      const divGame = document.createElement("div");

      divGame.addEventListener("click", () => {
        if (!table[i][i2] && !winner) {
          const img = document.createElement("img");
          if (turn === "x") {
            img.src = "/game1/x.png";
            table[i][i2] = "x";
          } else {
            img.src = "/game1/o.png";
            table[i][i2] = "o";
          }
          divGame.appendChild(img);
          if (CheckWinnerNAC(table)) {
            winner = turn;
          }
          if (turn === "x") {
            turn = "o";
          } else {
            turn = "x";
          }
        }
        turnText.textContent = "Turn of " + turn.toUpperCase();
        if (winner) {
          turnText.textContent = winner.toUpperCase() + " Won";
          StoreNACWinners(winner);
          game.innerHTML = "";
        }
      });

      game.appendChild(divGame);
    }
  }

  const turnText = document.createElement("p");
  turnText.id = "turn";
  turnText.textContent = "Turn of X";

  parent.appendChild(game);
  parent.appendChild(turnText);
};
