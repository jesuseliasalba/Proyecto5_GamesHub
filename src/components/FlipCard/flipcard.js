let flippedCards = [];
export let partnersFound = 0;

export const flipcard = (element) => {
  if (flippedCards.length < 2 && element.classList.contains("flipped")) {
    element.classList.remove("flipped");
    flippedCards.push(element);
    if (flippedCards.length === 2) {
      if (
        flippedCards[0].style.backgroundColor ===
        flippedCards[1].style.backgroundColor
      ) {
        partnersFound++;
        flippedCards = [];
      } else {
        setTimeout(() => {
          flippedCards[0].classList.add("flipped");
          flippedCards[1].classList.add("flipped");
          flippedCards = [];
        }, 1000);
      }
    }
  }
};
