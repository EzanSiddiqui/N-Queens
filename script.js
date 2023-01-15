function solveNQueens(n) {
    function is_safe(board, row, col) {
        // Check if a queen can be placed on board[row][col]
        // Check this row on left side
        for (let x = 0; x < col; x++) {
            if (board[row][x] === 1) {
                return false;
            }
        }
        // Check upper diagonal on left side
        for (let x = row, y = col; x >= 0 && y >= 0; x--, y--) {
            if (board[x][y] === 1) {
                return false;
            }
        }
        // Check lower diagonal on left side
        for (let x = row, y = col; x < n && y >= 0; x++, y--) {
            if (board[x][y] === 1) {
                return false;
            }
        }
        return true;
    }

    function solve(board, col) {
        // Base case: If all queens are placed then return true
        if (col === n) {
            result.push(board.map(row => row.slice()));
            return true;
        }
        // Consider this column and try placing this queen in all rows one by one
        for (let i = 0; i < n; i++) {
            if (is_safe(board, i, col)) {
                board[i][col] = 1;
                // Make result true if queen can be placed in one of the rows
                if (solve(board, col + 1)) {
                    return true;
                }
                // If placing queen in board[i][col] doesn't lead to a solution then remove queen from board[i][col]
                board[i][col] = 0;
            }
        }
        // If queen can not be place in any row in this column col then return false
        return false;
    }

    let result = [];
    let board = Array.from({length: n}, () => new Array(n).fill(0));
    if (!solve(board, 0)) {
        return [];
    }
    return result;
}