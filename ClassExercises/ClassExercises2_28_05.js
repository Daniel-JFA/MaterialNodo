// For test ayer

let test = 2;
let mensajes = [
    "Puede ser cualquier dia menos lunes o martes",
    "el dia de hoy es lunes",
    "el dia de hoy es martes"
];

for (let i = 0; i < mensajes.length; i++) {
    if (test === i) {
        console.log(mensajes[i]);
        break;
    }
}


