function showSalary(users, age) {
  let filteredUsers = users.filter(user => user.age <= age);
  return filteredUsers.map(filteredUser => filteredUser.name + ', ' + filteredUser.balance).join('\n');
}
