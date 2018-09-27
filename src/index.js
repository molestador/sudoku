module.exports = function solveSudoku(matrix) {
  // your solution
  function saveEmptyPos(array) {
    let emptyPos = [];

    for (let i = 0; i < array.length; i += 1) {
      for (let j = 0; j < array[i].length; j += 1) {
        if (matrix[i][j] === 0) {
          emptyPos.push([i, j])
        }
      }
    }
    return emptyPos;
  }

  function checkRow(matrix, row, val) {
    for (let i = 0; i < matrix[row].length; i += 1) {
      if (matrix[row][i] === val) {
        return false;
      }
    }
    return true;
  }

  function checkCol(matrix, col, val) {
    for (let i = 0; i < matrix.length; i += 1) {
      if (matrix[i][col] === val) {
        return false;
      }
    }
    return true;
  }

  function checkSquare(matrix, col, row, val) {
    let colCorner = 0;
    let rowCorner = 0;
    let sqSize = 3;

    while (col >= colCorner + sqSize) {
      colCorner += sqSize;
    }

    while (row >= rowCorner + sqSize) {
      rowCorner += sqSize;
    }

    for (let i = rowCorner; i < rowCorner + sqSize; i += 1) {
      for (let j = colCorner; j < colCorner + sqSize; j += 1) {
        if (matrix[i][j] === val) {
          return false;
        }
      }
    }
    return true;
  }

  function checkVal(matrix, col, row, val) {
    if (checkRow(matrix, row, val) && checkCol(matrix, col, val) && checkSquare(matrix, col, row, val)) {
      return true;
    } else {
      return false;
    }
  }

  emptyPosition = saveEmptyPos(matrix);

  let limit = 9;
  let col, row, val, found;

  for (let i = 0; i < emptyPosition.length;) {
    row = emptyPosition[i][0];
    col = emptyPosition[i][1];
    val = matrix[row][col] + 1;
    found = false;

    while (!found && val <= limit) {
      if (checkVal(matrix, col, row, val)) {
        found = true;
        matrix[row][col] = val;
        i += 1;
      } else {
        val += 1;
      }
    }

    if (!found) {
      matrix[row][col] = 0;
      i--;
    }

  }
  return matrix;

}
