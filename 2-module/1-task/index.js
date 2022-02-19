function sumSalary(salaries) {
  let result = 0;
  for (let key in salaries) {
    let value = salaries[key];
    if (typeof value === 'number' && !isNaN(value) && isFinite(value)) {
      result += value;
    }
  }
  return result;
}
