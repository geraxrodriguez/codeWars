// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// brute force way
// https://www.youtube.com/watch?v=wjkKd5yBxRA
var isValidSudoku = function(board) {
    // double for loop to access each individual cell
    // checking horizontally
    for (let i = 0; i < board.length; i++) { 
        // set acts as container for elements present in board
        const set = new Set()
        for (let j = 0; j < board[i].length; j++) {
            const num = board[i][j]
            // means it's empty
            if (num === '.') continue; 
            // if set already has this number
            if (set.has(num)) return false;
            // else add our num to our set
            set.add(num)
        }
    }

    // double for loop to access each individual cell
    // checking vertically
    for (let i = 0; i < board.length; i++) { 
        // set acts as container for elements present in board
        const set = new Set()
        for (let j = 0; j < board[i].length; j++) {
            const num = board[j][i]
            // means it's empty
            if (num === '.') continue; 
            // if set already has this number
            if (set.has(num)) return false;
            // else add our num to our set
            set.add(num)
        }
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {

            // creating set for our 3 x 3 mini grid
            const set = new Set()
            for (let k = 0; k < 3; k++) {
                for (let l = 0; l < 3; l++) {
                    // tricky part is how to get loop to go three, then next    column
                    const cell = board[3 * i + k][3 * j + l]
                    if (cell === '.') continue; 
                    if (set.has(cell)) return false;
                    set.add(cell)
                }
            }

        }
    }

    return true
};

// Array of Sets Solution
var isValidSudoku = function(board) {
    const rows = [], columns = [], boxes = [];
    // set for each row, column, and box
    for (let i = 0; i < board.length; i++) {
        rows.push(new Set())
        columns.push(new Set())
        boxes.push(new Set())
    }

    for (let i = 0; i < board.length; i++) { 
        for (let j = 0; j < board[i].length; j++) {
            const cell = board[i][j]
            if (cell === '.') continue; 
            const boxNum = 3 * Math.floor(i/3) + Math.floor(j/3)
            if (rows[i].has(cell) || columns[j].has(cell) || boxes[boxNum].has(cell)) return false;
            rows[i].add(cell)
            columns[j].add(cell)
            boxes[boxNum].add(cell)
        }
    }

    return true
};