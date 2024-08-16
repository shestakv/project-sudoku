const { read } = require('./funcRead')
const { solvedSudoku } = require('./sudoku')

const run = () => {
    const sudoku = read()
    console.table(sudoku);
    return solvedSudoku(sudoku)
}
console.table(run())