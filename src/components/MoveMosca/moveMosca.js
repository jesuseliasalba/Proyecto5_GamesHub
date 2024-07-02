export const moveMosca = (parent) => {
  const x = Math.random() * (parent.offsetWidth - 70);
  const y = Math.random() * (parent.offsetHeight - 70);

  const fly = document.querySelector("#fly");
  fly.style.bottom = y + "px";
  fly.style.right = x + "px";
};
