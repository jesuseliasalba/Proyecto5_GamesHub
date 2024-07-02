export const checkendfc = (parent) => {
  let childs = Array.from(parent.childNodes);
  const end = childs.every((child) => !child.classList.contains("flipped"));
  return end;
};
