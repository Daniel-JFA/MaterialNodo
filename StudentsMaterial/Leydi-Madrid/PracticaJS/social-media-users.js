const userDataBases = [
  {
    username: "andres",
    password: "123",
  },
  {
    username: "caro",
    password: "456",
  },
  {
    username: "mariana",
    password: "789",
  },
];

const usersTimeline = [
  { username: "Estefany", timeline: "Me encanta Javascript!" },
  { username: "Oscar", timeline: "Bebeloper es lo mejor!" },
  { username: "Mariana", timeline: "A mi me gusta más el café que el té" },
  { username: "Andres", timeline: "Yo hoy no quiero trabajar" },
];

const prompt = require("prompt-sync")();
const username = prompt("Cuál es tu usuario: ");
const password = prompt("Cuál es tu contraseña: ");

function usuarioExistente(username, password) {
  for (let index = 0; index < userDataBases.length; index++) {
    if (
      userDataBases[index].username === username &&
      userDataBases[index].password === password
    ) {
      return true;
    }
  }
  return false;
}

function singIn(username, password) {
  if (usuarioExistente(username, password)) {
    console.log(`Bienvenido a tu cuenta ${username}`);
  } else {
    console.log("Upsss, usuario o contraseña incorrectos");
  }
}

singIn(username, password);
