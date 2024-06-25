/*Ejercicio 3: FizzBuzz
Descripción: Escribe una función que recorra los números del 1 al 100. Para cada número,
 imprime "Fizz" si es divisible por 3, "Buzz" si es divisible por 5, y "FizzBuzz" si es divisible por ambos.*/


function fizzbuzz(){
 for(let i=1;i<100;i++){
    if(i%3==0&&i%5==0){
console.log(i+"FizzBuzz")
    }
    else if (i%3==0){
        console.log(i+"Buzz")
    }
    else if (i%5==0){
        console.log(i+"Fizz")
    }
}
}
fizzbuzz
/*
Ejercicio 5: Palíndromo
Descripción: Escribe una función que tome una cadena de texto y determine si es un palíndromo (se lee igual de adelante hacia atrás).*/

function palindromo(str) {
    let reverse = str.split('').reverse().join('')
    if (reverse == str){
        return true
    }
    else return false
}

console.log(palindromo("dabalearrozalazorraelabad"))

/*Ejercicio 6: Encontrar el Máximo en un Array
Descripción: Escribe una función que tome un array de números y devuelva el número máximo.*/

function maximo(array) {
  let myvar = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > myvar) {
      myvar = array[i];
    }
  }
  return myvar
}
console.log(maximo([4,8,5,6,7,4,1,2,5,4,6]))

/*Ejercicio 8: Contar Vocales en una Cadena
Descripción: Escribe una función que tome una cadena de texto y cuente el número de vocales (a, e, i, o, u).*/

function voc(str){
let x=str.match(/[aeiou]/gi).length
return x
}
console.log(voc("aeuiou"))
//otra solucion

function vic(str){
    let z=0
    let y=str.toLowerCase('').split('')
    for(let i=0;i<y.length;i++){

if(y[i]=="a"||y[i]=="e"||y[i]=="i"||y[i]=="o"||y[i]=="u"){
    z++
}
    }
    return z
}

console.log(vic("Mateo Osorio NArvaz"))

/*Ejercicio 10: Generar una Secuencia Fibonacci
Descripción: Escribe una función que genere una secuencia Fibonacci hasta un número dado.*/

function fibo(numb){

    let cont=0
    for(let i=0;cont<=numb;i++){
        cont=cont+i
        console.log(cont)
    }
}
fibo(35)