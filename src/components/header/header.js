import { navList } from "../../data/navList/navList";
import "./header.css";

export const header = () => {
  const header = document.createElement("header");
  const logo = document.createElement("img");
  const nav = document.createElement("nav");
  const lista = document.createElement("ul");
  const menuimg = document.createElement("img");

  header.id = "header";

  header.classList.add("display-flex");
  logo.src = "/Logo/LogoGameHub.png";
  logo.alt = "Logo Games Hub";

  menuimg.src = "/header/menu.svg";
  menuimg.id = "menuimg";

  menuimg.addEventListener("click", () => nav.classList.toggle("desaparece"));

  lista.classList.add("display-flex");

  for (const item of navList) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.src = item.url;
    a.textContent = item.text;

    li.addEventListener("click", item.component);

    li.appendChild(a);
    lista.appendChild(li);
  }
  nav.classList.add("desaparece");
  nav.appendChild(lista);

  const body = document.body;

  header.appendChild(logo);
  header.appendChild(nav);
  header.appendChild(menuimg);
  body.insertBefore(header, body.firstChild);
};
