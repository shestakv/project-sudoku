function isSolved(number, currPosition, solveSudoku) {
  const [row, column] = currPosition;
  const cellRowStart = Math.floor(row / 3) * 3;
  const cellColStart = Math.floor(column / 3) * 3;

  for (let i = 0; i < solveSudoku.length; i++) {
    if (solveSudoku[row][i] === number && i !== column) {
      return false;
    }
  }

  for (let j = 0; j < solveSudoku.length; j++) {
    if (solveSudoku[j][column] === number && j !== row) {
      return false;
    }
  }

  for (let k = cellRowStart; k < cellRowStart + 3; k++) {
    for (let r = cellColStart; r < cellColStart + 3; r++) {
      if (solveSudoku[k][r] === number && k !== row && r !== column) {
        return false;
      }
    }
  }

  return true;
}

module.exports = { isSolved };
