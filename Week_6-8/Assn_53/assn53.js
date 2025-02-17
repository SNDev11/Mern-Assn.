let str = "ascebresa";
function alphabet_Sep(str) {
    return(/a...b/).test(str) || (/b...a/).test(str);
}
console.log(alphabet_Sep(str));
