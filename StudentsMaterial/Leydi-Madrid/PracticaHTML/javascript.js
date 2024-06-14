function determineDay() {
  const numberDay = parseInt(document.getElementById("number-day").value);
  let result;
  switch (numberDay) {
    case 1:
      result = "Lunes";
      break;
    case 2:
      result = "Martes";
      break;
    case 3:
      result = "Miércoles";
      break;
    case 4:
      result = "Jueves";
      break;
    case 5:
      result = "Viernes";
      break;
    case 6:
      result = "Sábado";
    case 7:
      result = "Domingo";
      break;
    default:
      result =
        "El número ingresado no corresponde a ningún día de la semana 😒";
      break;
  }
  document.getElementById("selected-day").innerText = result;
}
