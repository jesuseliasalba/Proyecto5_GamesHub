import { checkendfc } from "../CheckEndFC/checkendFC";
import { flipcard } from "../FlipCard/flipcard";
import { StoreMGWinners } from "../StoreMGWinners/storemgwinners";
import "./memorygame.css";

const cards = ["pink", "white", "black", "purple"];

export const memorygame = (parent) => {
  if (document.querySelector("#cardboard")) {
    document.querySelector("#cardboard").remove();
    if (document.querySelector("#winMG")) {
      document.querySelector("#winMG").remove();
    }
  }
  const game = document.createElement("div");
  game.id = "cardboard";
  game.classList.add("display-flex");

  const cardsDuplicate = [...cards, ...cards];
  const cardsSelection = [];

  for (let i = 0; i < cards.length * 2; i++) {
    const card = document.createElement("div");
    card.classList.add("cards", "flipped");
    const numberAleatory = Math.floor(Math.random() * cardsDuplicate.length);
    card.style.backgroundColor = cardsDuplicate[numberAleatory];
    cardsDuplicate.splice(numberAleatory, 1)[0];
    game.appendChild(card);

    card.addEventListener("click", (e) => {
      flipcard(e.target);
      if (checkendfc(game)) {
        const win = document.createElement("p");
        win.textContent = "¡ U win !";
        win.id = "winMG";
        StoreMGWinners();
        parent.appendChild(win);
      }
    });
  }

  parent.appendChild(game);
};
