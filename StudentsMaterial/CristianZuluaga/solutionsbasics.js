// Esta guía está diseñada para ayudar a principiantes a fortalecer sus habilidades de pensamiento lógico y comprensión de los conceptos básicos de programación.

// Ejercicio 1: Suma de Dos Números
// Descripción: Escribe una función que tome dos números como argumentos y devuelva su suma.
console.log(`
***************************************************
**************EJERCICIO_1**************************
***************************************************`)

function suma(a, b){
    let resultado = a +b
    console.log(`El resultado de la suma de ${a}  +  ${b}  es ${resultado}`)
    return resultado
} 
suma(15,20)


// Ejercicio 2: Número Par o Impar
// Descripción: Escribe una función que tome un número como argumento y devuelva "par" si el número es par y "impar" si el número es impar.
console.log(`
***************************************************
**************EJERCICIO_2**************************
***************************************************`)


function par (a){
    if(a%2===0){
        console.log(`El numero ${a} es numero par`);
    }
    else{
        console.log(`El numero ${a} es numero impar`)
    } 
    return a  
}
par(15)

// Ejercicio 3: FizzBuzz
// Descripción: Escribe una función que recorra los números del 1 al 100. Para cada número, imprime "Fizz" si es divisible por 3, "Buzz" si es divisible por 5, y "FizzBuzz" si es divisible por ambos.
console.log(`
***************************************************
**************EJERCICIO_3**************************
***************************************************`)
function recorrer(){
    for (let i = 0; i <= 100; i++) {
        if(i%5===0 && i%3===0){
            console.log(`El ${i} es FizzBuzz`);
        }
        else if(i%3===0 ){
            console.log(`El ${i} es Fizz`);
        }
        else if(i%5===0 ){
            console.log(`El ${i} es Buzz`);        
        }  
        else{
            console.log(`El ${i} es divisible por otros numeros`)
        }      
    }
}
recorrer()

// Ejercicio 4: Factorial de un Número
// Descripción: Escribe una función que tome un número como argumento y devuelva su factorial.

console.log(`
***************************************************
**************EJERCICIO_4**************************
***************************************************`)

function factorial(num){
   let resultado = 1
   for(let i = 1; i<= num; i++){
    resultado = resultado*i;
   }
   return resultado;
}
console.log (`El resultado factorial es `+ factorial(6))

// Ejercicio 5: Palíndromo
// Descripción: Escribe una función que tome una cadena de texto y determine si es un palíndromo (se lee igual de adelante hacia atrás).
console.log(`
***************************************************
**************EJERCICIO_5**************************
***************************************************`)
function palindromo(texto){
    let textoHaciaAtras =  texto.split('').reverse().join('');
    if(texto === textoHaciaAtras){
        console.log(`El texto es palindromo`)
    }
    else{
        console.log(`El texto no es palindromo`)
    }
    return texto
}
palindromo(`real`)
palindromo(`reconocer`)

// Ejercicio 6: Encontrar el Máximo en un Array
// Descripción: Escribe una función que tome un array de números y devuelva el número máximo.
console.log(`
***************************************************
**************EJERCICIO_6**************************
***************************************************`)

let numeros= [23,51,21,45]
function numMax(array){
    return Math.max(...array)
    }
    console.log(`El numero mayor es ${numMax(numeros)}`);


// Ejercicio 7: Invertir una Cadena
// Descripción: Escribe una función que tome una cadena de texto y devuelva la cadena invertida.
console.log(`
***************************************************
**************EJERCICIO_7**************************
***************************************************`)


function cadInvertida(texto){
    let reversando = [...texto].reverse().join(``)
    return reversando
    }

    console.log(cadInvertida(`Esta es una cadena invertida`)) 

// Ejercicio 8: Contar Vocales en una Cadena
// Descripción: Escribe una función que tome una cadena de texto y cuente el número de vocales (a, e, i, o, u).
console.log(`
***************************************************
**************EJERCICIO_8**************************
***************************************************`)

let texto = `buscaremos las vocales que hay aqui adentro`
let vocalesBuscar = [`a`,`e`,`i`,`o`,`u`]
let cantidad = 0;
function cantVocales(){
for(let i = 0; i < texto.length; i++){
    if(vocalesBuscar.includes(texto[i])){
        cantidad++;
        }
    }
}
cantVocales()
console.log(`Las vocales estan ${cantidad} veces`);

// Ejercicio 9: Encontrar Números Primos
// Descripción: Escribe una función que encuentre todos los números primos hasta un número dado.

console.log(`
***************************************************
**************EJERCICIO_9**************************
***************************************************`)
function esPrimo(num){
    let primo = false;
    let cantidadFactores = 0;

    for(let i = 1 ;i <= num; i++){
        if(num%i == 0){
            cantidadFactores = cantidadFactores + 1;
        }
    }

    if(cantidadFactores == 2){
        primo = true;
    }
    return primo;
}

function mostrarPrimos(max){
    for(let i = 0; i <= max ; i++){
        if(esPrimo(i)){
            console.log(i);
        }
    }
}

mostrarPrimos(100);

// Ejercicio 10: Generar una Secuencia Fibonacci
// Descripción: Escribe una función que genere una secuencia Fibonacci hasta un número dado.

console.log(`
***************************************************
**************EJERCICIO_9**************************
***************************************************`)
function fibonacci(limite){

    let serie = [0,1];

    for(let i = 2 ; i <= limite ; i++){    
        let operacion =  serie[i-1] + serie[i-2];      
        if(operacion >= limite){
            break;
        }
        serie.push(operacion);
    }
    console.log(serie);
} 

fibonacci(70);




