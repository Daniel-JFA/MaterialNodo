let indexPregunta = 0;

function cargarPregunta(index) {
  document
    .querySelectorAll(".contenedor-respuestas input[type='radio']")
    .forEach((radio) => {
      radio.checked = false;
    });

  objetoPregunta = basePreguntas[index];
  opciones = objetoPregunta.opciones;
  document.getElementById("progreso").innerHTML = `Pregunta ${
    indexPregunta + 1
  } de ${basePreguntas.length}`;
  document.getElementById("contenedor-parrafo").innerHTML =
    objetoPregunta.pregunta;

  document.querySelector("label#opcion1").innerHTML = opciones.opcion1;
  document.querySelector("label#opcion2").innerHTML = opciones.opcion2;
  document.querySelector("label#opcion3").innerHTML = opciones.opcion3;
}

function seleccionarOpcion(index) {
  let validezRespuesta =
    (opciones[index] == objetoPregunta.opcion1) | opcion2 | opcion3;

  if (validezRespuesta) {
    indexPregunta++;
    if (indexPregunta >= basePreguntas.length) {
      indexPregunta = 0;
      Swal.fire({
        title: "¡Perfecto! Haz terminado la primera sección 😁,",
        width: 600,
        padding: "3em",
        color: "#000066",
      });
    }

    cargarPregunta(indexPregunta);
  }
}

cargarPregunta(indexPregunta);
