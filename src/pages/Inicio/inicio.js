import "./inicio.css";

export const inicio = () => {
  const divApp = document.querySelector("#app");
  divApp.innerHTML = "";

  const welcome = document.createElement("h1");
  welcome.textContent = "¡ Welcome to Games Hub !";

  const explication = document.createElement("p");
  explication.textContent =
    "On this page you have three completely different types of games";

  const challenge = document.createElement("p");
  challenge.textContent = "Will you be able to win over your friends?";

  divApp.appendChild(welcome);
  divApp.appendChild(explication);
  divApp.appendChild(challenge);
};
