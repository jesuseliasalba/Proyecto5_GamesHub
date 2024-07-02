export const CheckWinnerNAC = (table) => {
  for (let i = 0; i < 3; i++) {
    if (
      table[i][0] !== "" &&
      table[i][0] === table[i][1] &&
      table[i][1] === table[i][2]
    ) {
      return true;
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      table[0][i] !== "" &&
      table[0][i] === table[1][i] &&
      table[1][i] === table[2][i]
    ) {
      return true;
    }
  }

  if (
    table[0][0] !== "" &&
    table[0][0] == table[1][1] &&
    table[1][1] == table[2][2]
  ) {
    return true;
  }

  if (
    table[0][2] !== "" &&
    table[0][2] == table[1][1] &&
    table[1][1] == table[2][0]
  ) {
    return true;
  }

  return false;
};
