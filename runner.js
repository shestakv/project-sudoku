const { read } = require('./funcRead')
const { solvedSudoku } = require('./funcSolvedSudoku')

const run = () => {
    const sudoku = read()
    console.log(`Головоломка № ${process.argv[2]}:`);
    console.table(sudoku);
    console.log(`Решение головоломки № ${process.argv[2]}:`);
    console.table(solvedSudoku(sudoku));
    return 
}
run()