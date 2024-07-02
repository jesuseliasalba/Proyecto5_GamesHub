const example = [
  {
    player: "x",
    wins: 0,
  },
  {
    player: "y",
    wins: 0,
  },
];

export const StoreNACWinners = (winner) => {
  const winners = JSON.parse(localStorage.getItem("winnersNAC")) || example;
  if (winner === "x") {
    winners[0].wins += 1;
  } else {
    winners[1].wins += 1;
  }
  localStorage.setItem("winnersNAC", JSON.stringify(winners));
};
