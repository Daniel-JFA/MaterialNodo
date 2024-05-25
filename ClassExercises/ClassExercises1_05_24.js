function test(array, value){
    for(let i =0; i< array.length; i++){
if (array[i] === value) {
    return true;
}
    } 
    return false
}

let num = [0,1,2,3,4,5,6,7,8,9]
console.log(test(num,5)+ '  Este Resultado existe y debe ser true');
console.log('====================================');
console.log(test(num, 3) + "  Este Resultado existe y debe ser true");
console.log('====================================');
console.log(test(num, 10) + "  Este Resultado existe y debe ser False");


function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); 
console.log(reverseString("JavaScript")); 


function filterEvenNumbers(array) {
    return array.filter(function(number) {
        return number % 2 === 0;
    });
}


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEvenNumbers(numbers)); 
