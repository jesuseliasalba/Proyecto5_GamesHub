import { moveMosca } from "../MoveMosca/moveMosca";
import "./killthefly.css";

export const killthefly = (parent) => {
  const game = document.createElement("div");
  game.id = "killthefly";

  const divScore = document.createElement("div");

  const fly = document.createElement("img");
  fly.id = "fly";
  fly.src = "./game3/fly.png";

  parent.appendChild(game);
  game.appendChild(fly);

  moveMosca(game);
  fly.addEventListener("click", () => {
    let score = localStorage.getItem("KtF") || 0;
    score++;
    const scoreP = document.querySelector("#scoreKtF");
    scoreP.textContent = score;
    localStorage.setItem("KtF", score);
    moveMosca(game);
  });
  setInterval(() => moveMosca(game), 1000);
};
