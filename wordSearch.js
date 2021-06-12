/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.


 ["A","B","C","E"],
 ["S","F","C","S"],
 ["A","D","E","E"]
 
 "ABCCED"
 want to use push/pop stack

 a DFS of the boxes. 
 1. get max legths of row/columns
 2. on each recursion, see if our length of original word is the same as idx we're now searching on. if it is, then we've successfully filled all the boxes with the right sequence of letters to get here and we, thus, have the full word. 
 3. check for overrun on ROWMAX, or underrun (if we're below 0), or if the letter at this current spot on the board doesn't match the letter we should be looking for. if any of those conditions we're on the wrong path and return false so the recursion can try other paths.
 4. if we find the right letter, mark that spot with '*' so we don't backtrack in the recurssion through a spot we've already been.
 5. recurse: check up, left, right, down. if any of those come back true, we mark this as true. this is because of the recursion, for a sub problem to be true, all it's subproblems will be true.
 6. if none of those have returned true, then there isn't a path to the right word through this letter and we need to set it back to its original letter.
 7. perform the loop on rows and columns.
 8. on columns, we're checking that the current letter matches the one we're looking for and that the recursion from there is returning true.
 */
 var exist = function(board, word) {
    //for seeing if we're at the end of a row/column
    const ROWMAX = board.length;
    const COLUMNMAX = board[0].length;
    
    let DFS = (row, column, idx) => {
        //if our idx is the same length as the word, we've filled it up and have the full word.
        if(word.length === idx) return true;
        
        //when we've found a non match or end of column/row
        if(row >= ROWMAX || row < 0 || board[row][column] !== word[idx]) return false;
        
        board[row][column] = '*'; //mark a cell if we're moving on so that it doesn't get back tracked into during recurssion.
                
        //recurse
        //if one of these is true, then return true, because each of their sub recursions will also be true to get back to true.
        if(DFS(row+1, column, idx+1) ||
          DFS(row-1, column, idx+1) ||
           DFS(row, column+1, idx+1) ||
           DFS(row, column-1, idx+1)
          ) return true;
        
        //reset the cell if we've come back to here, because this isn't a path
        board[row][column] = word[idx];
            
        }
    
    //double for loop to cover rows and columns
    for(let r = 0; r < ROWMAX; r++){
        for(let c = 0; c < COLUMNMAX; c++){
            if(board[r][c] === word[0] && DFS(r, c, 0)) return true;
        }           
    }
    return false;
};