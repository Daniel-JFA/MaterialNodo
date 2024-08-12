function determinarDia() {
  const numeroDia = document.getElementById("number-day").value;
  let diaSemana;

  switch (Number(numeroDia)) {
    case 1:
      diaSemana = "Lunes";
      break;
    case 2:
      diaSemana = "Martes";
      break;
    case 3:
      diaSemana = "Miércoles";
      break;
    case 4:
      diaSemana = "Jueves";
      break;
    case 5:
      diaSemana = "Viernes";
      break;
    case 6:
      diaSemana = "Sábado";
      break;
    case 7:
      diaSemana = "Domingo";
      break;
    default:
      diaSemana =
        "El número ingresado no corresponde a ningún día de la semana. Ingrese un valor entre 1 y 7.";
  }

  document.getElementById("dia-seleccionado").textContent = diaSemana;
}
