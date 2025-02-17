function half_of_string(str){
    if (str.length % 2 == 0){
        return str.slice(0, str.length / 2);
    }
    return str;
}
console.log(half_of_string("Swasti"));
console.log(half_of_string("Karishma"));
