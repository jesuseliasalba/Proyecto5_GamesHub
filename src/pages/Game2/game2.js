import { memorygame } from "../../components/MemoryGame/memorygame";
import "./game2.css";

export const printWinMG = () => {
  const divWinnerMG = document.querySelector("#divWinner");
  divWinnerMG.innerHTML = `<h3> Wins ${JSON.parse(
    localStorage.getItem("winnersMG")
  )} </h3>`;
};

export const game2 = () => {
  const divApp = document.querySelector("#app");
  divApp.innerHTML = "";
  const title = document.createElement("h1");
  title.textContent = "Memory Game";

  const restartButton = document.createElement("button");
  restartButton.textContent = "Restart";

  restartButton.addEventListener("click", () => {
    memorygame(divApp);
  });

  const divWinnerMG = document.createElement("div");
  divWinnerMG.id = "divWinner";
  divWinnerMG.classList.add("display-flex");

  divApp.appendChild(title);
  divApp.appendChild(divWinnerMG);

  if (localStorage.getItem("winnersMG")) {
    printWinMG();
  }

  divApp.appendChild(restartButton);
  memorygame(divApp);
};
