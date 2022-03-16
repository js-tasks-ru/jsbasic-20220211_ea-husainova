/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = this.#getTable(rows);
    this.elem.querySelectorAll('.close-button').forEach(closeButton =>
      closeButton.addEventListener('click', function() {
        closeButton.closest('tr').remove();
    }));
  }
  #getTable(rows) {
    let res = document.createElement('table');
    res.innerHTML = `
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${this.#getRows(rows)}
      </tbody>`;
    return res;
  }
  #getRows(rows) {
    return rows.map(row => `
      <tr>
        <td>${row.name}</td>
        <td>${row.age}</td>
        <td>${row.salary}</td>
        <td>${row.city}</td>
        <td><button class="close-button">X</button></td>
      </tr>
      `).join('');
  }
}
