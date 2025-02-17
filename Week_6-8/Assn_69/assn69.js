let array= [12, 23, 45];
function sum_of_array(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum= sum + array[i];
    }
    return sum;
}
console.log(sum_of_array(array));
   
