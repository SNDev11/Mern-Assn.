function newString(str) {
  if (str.length < 3) {
    return "String is too short";
  } else {
    result_str = str.substring(str.length - 3);
    return result_str.repeat(4);
  }
}
console.log(newString("Python"));
