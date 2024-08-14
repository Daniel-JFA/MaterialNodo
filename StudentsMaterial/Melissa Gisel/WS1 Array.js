// Ejercicios de Vectores sin funciones

// Este es el vector a usar
// let numbers = [1, 2, 3, 4, 5];

// 1.   Sumar Elementos de un Vector
//    - Descripción: Suma todos los elementos de un vector y muestra el resultado.
// 2.   Encontrar el Máximo de un Vector
//    - Descripción: Encuentra y muestra el valor máximo en un vector.
// 3.   Invertir un Vector
//    - Descripción: Invierte el orden de los elementos de un vector y muestra el resultado.


let total=0, numeros = [1, 2, 3, 4, 5];
for(let i = 0; i < numeros.length; i++) total+=numeros[i];
console.log(total);


console.log(Math.max(1,2,3,4,5))


numeros = [1, 2, 3, 4, 5]
const reversedArray = [...numeros].reverse()
console.log("numeros", numeros) 
console.log('reversed', reversed) 


function numeros(number){
    let respuesta = [];
    number = String(number);
  
    for(let i = number.length -1 ; i>=0; i--){        
      respuesta.push(number[i]);
    }
    return respuesta;
  }
  
  console.log(numeros(12345))
  