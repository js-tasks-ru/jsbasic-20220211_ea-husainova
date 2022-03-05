function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  /*for (let i = 0; i < friends.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = friends[i].firstName + ' ' + friends[i].lastName;
    ul.append(li);
  }*/
  friends.forEach(friend => ul.insertAdjacentHTML('beforeend', '<li>' + friend.firstName + ' ' + friend.lastName + '</li>'));
  return ul;
}
