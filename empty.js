function isEmpty(sudoku){
    const index = [];
    for (let r = 0; r < sudoku.length; r++) {
      for(let c = 0; c < sudoku[r].length; c++){
        if(sudoku[r][c] === 0){
          return [r, c]
        }
      }
    }
    return false;
  }

  module.exports = {isEmpty}