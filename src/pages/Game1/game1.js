import { NoughtsAndCrosses } from "../../components/NoughtsAndCrosses/NoughtsAndCrosses";
import "./game1.css";

const winnersPrint = (parent) => {
  if (localStorage.getItem("winnersNAC")) {
    const winners = JSON.parse(localStorage.getItem("winnersNAC"));

    parent.innerHTML = `
    <h3>Victories</h3>
    <p>X = ${winners[0].wins} | O = ${winners[1].wins}</p>
    `;
  }
};

export const game1 = () => {
  const divApp = document.querySelector("#app");
  divApp.innerHTML = "";
  const title = document.createElement("h1");
  title.textContent = "Noughts And Crosses";

  const divWinner = document.createElement("div");
  divWinner.id = "divWinner";
  divWinner.classList.add("display-flex");

  const restartButton = document.createElement("button");
  restartButton.textContent = "Restart";

  restartButton.addEventListener("click", () => {
    NoughtsAndCrosses(divApp);
    winnersPrint(divWinner);
  });

  divApp.appendChild(title);

  if (localStorage.getItem("winnersNAC")) {
    winnersPrint(divWinner);
  }

  divApp.appendChild(divWinner);
  divApp.appendChild(restartButton);
  NoughtsAndCrosses(divApp);
};
