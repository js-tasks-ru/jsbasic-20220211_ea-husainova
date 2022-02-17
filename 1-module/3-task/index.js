function ucFirst(str) {
  if (!str) {
    return str;
  }
  let immutableString = str.substring(1);
  let firstLetter = str[0].toUpperCase();
  return firstLetter + immutableString;
}
