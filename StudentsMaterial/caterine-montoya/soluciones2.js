/*Este es el vector a usar
let numbers = [1, 2, 3, 4, 5];

1.   Sumar Elementos de un Vector
   - Descripción: Suma todos los elementos de un vector y muestra el resultado.
2.   Encontrar el Máximo de un Vector
   - Descripción: Encuentra y muestra el valor máximo en un vector.
3.   Invertir un Vector
   - Descripción: Invierte el orden de los elementos de un vector y muestra el resultado.
*/

let numbers = [1, 2, 3, 4, 5];
function sumarelementos(numeros){
   let resultado=0
    for (let index = 0; index < numeros.length; index++) {
        //const element = array[index];
        console.log(index,numeros[index])
        resultado=resultado+numeros[index]
    }
}
sumarelementos(numbers)
console.log("hola mundo")