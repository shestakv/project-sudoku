const { isEmpty } = require("./empty");
const { read } = require("./funcRead");

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

        if (solved) return true;

        sudoku[x][y] = 0;
      }
    }
    return false;
  }

  solve();
  return sudoku;
}

const sudoku = read();

console.log(sudoku);

console.log(isSolved(sudoku));

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
