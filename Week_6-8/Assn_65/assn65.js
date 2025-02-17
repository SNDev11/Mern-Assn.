function check_string(str){
    if(str.substring(str.length - 6, str.length) === 'Script'){
        return `${str} has the word "Script" at the end`;
    }
    return false;
}
console.log(check_string("JavaScri"));
