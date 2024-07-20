//popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
// Petición fetch para obtener los ejercicios del JSON
document.addEventListener("DOMContentLoaded", () => {
  fetch("./data/data.json")
    .then((response) => response.json())
    .then((data) => {
      const exercises = data?.exercises;

      exercises.forEach((current, idx) => {
        const { title, exercise } = current;
        buildListGroup(title, exercise, idx);
      });
    });
});

const arrayFunctions = [
  forEachExample,
  mapExample,
  filterExample,
  reduceExample,
  reduceRightExample,
  someExample,
  everyExample,
  findExample,
  findIndexExample,
  keysExample,
  valuesExample,
  entriesExample,
  forOfExample,
  forInExample,
  flatExample,
];

//FUNCIONES PARA CONSTRUIR TEMPLATE
function buildListGroup(title, exercise, idx) {
  const tabLink = document.getElementById(`list-exercise-${idx}`);
  tabLink.textContent = title;

  const tabPanel = document.getElementById(`exercise-${idx}`);
  tabPanel.textContent = exercise;

  appendCodeSolution(tabPanel, idx);
}

function appendCodeSolution(node, idx) {
  const pre = document.createElement("pre");
  pre.className = "code-style";

  const code = document.createElement("code");
  code.textContent = arrayFunctions[idx];

  pre.appendChild(code);
  node.appendChild(pre);
  appendBtnWithFunction(node, arrayFunctions[idx]);
}

function appendBtnWithFunction(node, callback) {
  const btn = document.createElement("button");
  btn.className = "btn btn-primary";
  btn.onclick = callback;
  btn.textContent = "Ejecutar";
  node.appendChild(btn);
}

//SOLUCIONES

// forEach()
function forEachExample() {
  //imprime el tipo de dato de cada valor en el arreglo
  const customValues = [1, null, true, {country: "colombia"}, ["a","b","c"], "eafit"];
  
  customValues.forEach((current) => {
    console.log(current , typeof current);
  });
  
}

// map()
function mapExample() {
  //crea un arreglo nuevo de las potencias de cada uno de los elementos
  const originalArray = [2, 4, 6, 8, 10, 12];
  const newArray = originalArray.map((current) => Math.pow(current, 2));

  console.log({originalArray, newArray});
}

// filter()
function filterExample() {
  //filtrar todos los estudiantes mayores de edad
  const students = [
    {
      name:"John Wick",
      age:15
    },
    {
      name:"Ellen Ripley",
      age: 19
    },
    {
      name: "John Connor",
      age: 23
    },
    {
      name: "Trinity",
      age: 17
    }
  ]

  console.log(students.filter(student => student.age >= 18));
}

// reduce()
function reduceExample() {
  //concatenar las letras 
  const grades = ["a", "b", "c", "d"];
  
  console.log(grades.reduce((total, current) => total + current));
}

// reduceRight()
function reduceRightExample() {
  //concatenar las letras 
  const grades = ["a", "b", "c", "d"];
  
  console.log(grades.reduceRight((total, current) => total + current));
}

// some()
function someExample() {
  //hay algun valor mayor a 100?
  const numbers = [10,50,70, 20, 120, 90];

  console.log("hay algun valor mayor a 100?: ", numbers.some(current => current > 100));
}

// every()
function everyExample() {
  //todos los valores son mayor a 100?
  const numbers = [10,50,70, 20, 120, 90];

  console.log("todos son mayor a 100?: ", numbers.every(current => current > 100));
}

// find()
function findExample() {
  //encontrar un numero multiplo de 2
  const numbers = [3,7,9,5,5,8,4];

  console.log(numbers.find(current => current % 2 === 0));
}

// findIndex()
function findIndexExample() {
  //encontrar el index multiplo de 2
  const numbers = [3,7,9,5,5,8,4];

  console.log(numbers.findIndex(current => current % 2 === 0));
}

// keys()
function keysExample() {
  //devolver las llaves del objeto persona
  const person = {
    fistName: "Homero",
    lastName: "Simpson",
    age: 40,
    city: "Springfield"
  }

  console.log("keys: ", Object.keys(person));
}

// values()
function valuesExample() {
  //devolver los valores del objeto persona
  const person = {
    fistName: "Homero",
    lastName: "Simpson",
    age: 40,
    city: "Springfield"
  }

  console.log("keys: ", Object.values(person));
}

// entries()
function entriesExample() {
  //devolver las llaves y valores del objeto persona
  const person = {
    fistName: "Homero",
    lastName: "Simpson",
    age: 40,
    city: "Springfield"
  }

  console.log("keys: ", Object.entries(person));
}

// for...of
function forOfExample() {
  //imprimir los dias de la semana
  const weekDays = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo",];

  for(let day of weekDays) {
    console.log({day});
  }
}

// for...in
function forInExample() {
  //imprimir la llave y valor del objeto persona
  const person = {
    fistName: "Homero",
    lastName: "Simpson",
    age: 40,
    city: "Springfield"
  }

  for (let data in person) {
    console.log(data, person[data]);
  }
}

// flat()
function flatExample() {
  //obtener un nuevo arreglo sin valores anidados
  let numbers = [
    1,
    [2,3,4,[
      5,6,7
    ]],
    8
  ]

  console.log(numbers.flat());
  console.log(numbers.flat(2));
}
