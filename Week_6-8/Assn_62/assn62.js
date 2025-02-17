function move_last_char(str){
    let new_str= str.substring(str.length, str.length - 3);
    return new_str + str;
}
console.log(move_last_char("Hello"));
