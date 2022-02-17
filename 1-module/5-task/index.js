function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let truncatedString = str.slice(0, maxlength -1);
    return truncatedString + '…';
  }
  return str;
}
