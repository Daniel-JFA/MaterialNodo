/* Este es el vector a usar
let numbers = [1, 2, 3, 4, 5];

1.   Sumar Elementos de un Vector
   - Descripción: Suma todos los elementos de un vector y muestra el resultado.
2.   Encontrar el Máximo de un Vector
   - Descripción: Encuentra y muestra el valor máximo en un vector.
3.   Invertir un Vector
   - Descripción: Invierte el orden de los elementos de un vector y muestra el resultado */

/* Solucion 1.1 */

let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];     
}
console.log(sum);

/* Solucion 1.2 */
let sum2 = 0;

numbers.forEach((number) => sum2 += number)
console.log(sum2);

/* Solucion 2.1 */
let max = Number.MIN_VALUE;

numbers.forEach((number) => {
    if (number > max) {
        max = number;
    }
})
console.log(max);

/* Solucion 2.2 */

console.log(Math.max(...numbers))

/* Solucion 3.1 */
let reverseNumbers = [];

for (let i = numbers.length - 1; i >= 0; i--) {
    reverseNumbers.push(numbers[i]);   
}
console.log(reverseNumbers);

/* Solucion 3.2 */
console.log(numbers.reverse());