function new_from_n(str, n){
    let first_part = str.substring(0, n);
    let last_part = str.substring(str.length - n);
    return first_part + last_part;
}
console.log(new_from_n("Python", 2));
