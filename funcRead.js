const fs = require('fs')
const {EOL} = require('os')

const read = () => {
    const str = fs.readFileSync('./puzzles.txt', 'utf-8').split(`${EOL}`)[process.argv[2] - 1]
    const newArr = []
    for(let i = 0; i < str.length; i+= 9){
        const row = str
            .slice(i, i+9)
            .split('')
            .map(el => el.replace(/-/g, 0))
            .map(el => Number(el))
        newArr.push(row)
    }
    return newArr
}

// console.log(read());

module.exports = {read}

