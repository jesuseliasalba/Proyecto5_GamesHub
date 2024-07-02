import { game1 } from "../../pages/Game1/game1";
import { game2 } from "../../pages/Game2/game2";
import { game3 } from "../../pages/Game3/game3";
import { inicio } from "../../pages/Inicio/inicio";

export const navList = [
  {
    url: "#",
    text: "Start",
    component: inicio,
  },
  {
    url: "#",
    text: "Game 1",
    component: game1,
  },
  {
    url: "#",
    text: "Game 2",
    component: game2,
  },
  {
    url: "#",
    text: "Game 3",
    component: game3,
  },
];
