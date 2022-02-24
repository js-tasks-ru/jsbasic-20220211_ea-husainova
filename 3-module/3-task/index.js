function ucFirst(str) {
  if (!str) {
    return str;
  }
  return str[0].toUpperCase() + str.substring(1);
}

function camelize(str) {
  /*let tokens = str.split('-');
  for (let i = 1; i < tokens.length; i++) {
    tokens[i] = ucFirst(tokens[i]);
  }
  return tokens.join('');*/
  return str.split('-').map((token, idx) => idx === 0 ? token : ucFirst(token)).join('');
}
