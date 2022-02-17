function checkSpam(str) {
  let checkName = str.toLowerCase();
  if (checkName.includes('1xbet') || checkName.includes('xxx')) {
    return true;
  }
  return false;
}
