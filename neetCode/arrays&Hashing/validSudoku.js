// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// brute force way
var isValidSudoku = function(board) {
    for (let i = 0; i < board.length; i++) {
        const set = new Set()
        for (let j = 0; j < board[i].length; j++) {
            const cell = board[i][j];
            if (cell === '.') continue;
            if (set.has(cell)) return false;
            set.add(cell)
        }      
    }

    for (let i = 0; i < board.length; i++) {
        const set = new Set()
        for (let j = 0; j < board[i].length; j++) {
            const cell = board[j][i];
            if (cell === '.') continue;
            if (set.has(cell)) return false;
            set.add(cell)
        }      
    }    

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            
            const set = new Set()
            for (let k = 0; k < 3; k++) {
                for (let l = 0; l < 3; l++) {
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