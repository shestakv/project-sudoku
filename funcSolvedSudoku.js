const { isEmpty } = require("./funcIsEmpty");
const { isSolved } = require("./funcIsSolved");

function solvedSudoku(sudoku) {
  function solve() {
    const currentPosition = isEmpty(sudoku);

    if (!currentPosition) return true;

    for (let i = 1; i <= 9; i++) {
      let currentNumber = i;
      let solved = isSolved(currentNumber, currentPosition, sudoku);
      if (solved) {
        const [x, y] = currentPosition;
        sudoku[x][y] = currentNumber;

        if (solve()) return true;

        sudoku[x][y] = 0;
      }
    }
    return false;
  }

  solve();
  return sudoku;
}

module.exports = { solvedSudoku };
