const { read } = require('./funcRead')
const { solvedSudoku } = require('./sudoku')

const run = () => {
    const sudoku = read()
    return solvedSudoku(sudoku)
}

console.table(run())