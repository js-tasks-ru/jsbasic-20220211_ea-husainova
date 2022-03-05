function makeDiagonalRed(table) {
  let rowsCol = table.rows;
  for (let i = 0; i < rowsCol.length; i++) {
    rowsCol[i].cells[i].style.backgroundColor = 'red';
  }
}
