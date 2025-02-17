let string = `New Angeles`;
function start_with(str) {
  if (str.substring(0, 3) === "Los" || str.substring(0, 3) === "New") {
    return true;
  }
  return false;
}
console.log(start_with(string));
