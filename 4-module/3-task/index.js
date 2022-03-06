function highlight(table) {
  let rowsCol = table.rows;
  for (let i = 0; i < rowsCol.length; i++) {
    if (rowsCol[i].cells[2].innerHTML == 'm') {
      rowsCol[i].classList.add('male');
    } else {
      rowsCol[i].classList.add('female');
    }
    if (rowsCol[i].cells[1].innerHTML < 18) {
      rowsCol[i].style.textDecoration = 'line-through';
    }
    if (!rowsCol[i].cells[3].hasAttribute('data-available')) {
      rowsCol[i].setAttribute('hidden', '');
      continue;
    }
    if (rowsCol[i].cells[3].dataset.available == 'true') {
      rowsCol[i].classList.add('available');
    } else {
      rowsCol[i].classList.add('unavailable');
    }
  }
}