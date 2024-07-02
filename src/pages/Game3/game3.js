import { killthefly } from "../../components/KillTheFly/killthefly";
import "./game3.css";

export const game3 = () => {
  const divApp = document.querySelector("#app");
  divApp.innerHTML = "";
  const title = document.createElement("h1");
  title.textContent = "Kill the fly";

  const restartButton = document.createElement("button");
  restartButton.textContent = "Restart Score";

  const score = document.createElement("p");
  score.textContent = JSON.parse(localStorage.getItem("KtF")) || 0;
  score.id = "scoreKtF";

  restartButton.addEventListener("click", () => {
    localStorage.setItem("KtF", 0);
    score.textContent = 0;
  });

  divApp.appendChild(title);
  divApp.appendChild(restartButton);
  divApp.appendChild(score);
  killthefly(divApp);
};
