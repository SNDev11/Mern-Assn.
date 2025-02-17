let str= "Alishan";
function mid_three_str(str){
    if(str.length % 2 !== 0){
        let mid = (str.length + 1) / 2;
        return str.slice(mid - 3, mid + 2);
    }
    return str;
}
console.log(mid_three_str(str));
