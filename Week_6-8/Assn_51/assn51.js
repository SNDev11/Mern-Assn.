let num= 75;
function num_To_time(num){
    let hours = Math.floor(num/60);
    let minutes = num%60;
    return hours + ":" + minutes;
}
console.log(num_To_time(num));
    
