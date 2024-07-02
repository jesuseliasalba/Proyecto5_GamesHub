import { printWinMG } from "../../pages/Game2/game2";

const example = [0];

export const StoreMGWinners = () => {
  const winnerMG = JSON.parse(localStorage.getItem("winnersMG")) || example;
  winnerMG[0]++;
  localStorage.setItem("winnersMG", JSON.stringify(winnerMG));
  printWinMG();
};
