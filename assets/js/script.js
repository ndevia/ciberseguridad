const quizForm = document.getElementById("quiz-form");

// creación de preguntas y opciones de manera dinámica
let contadorPreguntas = 1;

preguntasQuiz.forEach(pregunta => {
  // pregunta
  const textoPregunta = document.createElement("h5");
  textoPregunta.classList.add("mt-4");
  textoPregunta.textContent = `${contadorPreguntas}. ${pregunta.pregunta}`;
  quizForm.appendChild(textoPregunta);
  
  let contadorOpciones = 1;
  // ordenar las opciones para cada pregunta de manera aleatoria
  const opciones = pregunta.opciones.sort(() => Math.random() - 0.5);
  
  // opciones
  opciones.forEach(opcion => {
    // contenedor
    const div = document.createElement("div");
    div.classList.add("form-check", "my-3");
    
    // radio
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.classList.add("form-check-input", "d-inline-flex", "focus-ring", "focus-ring-info");
    radio.name = `pregunta${contadorPreguntas}`;
    radio.id = `p${contadorPreguntas}_opcion${contadorOpciones}`
    radio.value = opcion;

    if (contadorOpciones === 1) {
      radio.required = true;  // para que se deba escoger una opción
    }

    // label
    const label = document.createElement("label");
    label.classList.add("form-check-label");
    label.setAttribute("for", `p${contadorPreguntas}_opcion${contadorOpciones}`);
    label.textContent = opcion;
    contadorOpciones += 1;

    div.appendChild(radio);
    div.appendChild(label);
    quizForm.appendChild(div);
  });
  contadorPreguntas += 1;
});

// recibir respuestas del usuario
const botonEnviar = document.getElementById("boton-enviar");

botonEnviar.addEventListener("click", (event) => { 
  event.preventDefault();
  
  const totalPreguntas = preguntasQuiz.length;
  let repuestasSeleccionadas = [];
  let respuestasAcertadas = 0;
  
  // validar que todas las preguntas tengan respuestas
  for (let i = 1; i <= totalPreguntas; i++) {
    const seleccion = document.querySelector(`input[name="pregunta${i}"]:checked`);
    
    if (!seleccion) {
      alert(`Por favor responde la pregunta ${i} antes de enviar.`);
      return;
    }

    repuestasSeleccionadas.push(seleccion.value);
  }
  
  // revisar respuestas acertadas
  preguntasQuiz.forEach((pregunta, index) => {   
    if (repuestasSeleccionadas[index] === pregunta.respuesta) {
      respuestasAcertadas += 1;
    }
  });
  
  // confirmar envío de respuestas
  const confirmar = confirm("¿Seguro(a) que deseas enviar tus respuestas?");
  if (!confirmar) {
    return;
  }

  // mensaje informando resultado al usuario
  let mensajeFinal
  
  if (respuestasAcertadas >= 4) {
    mensajeFinal = "¡Excelente, eres un experto en ciberseguridad! 🎊";
  } else if (respuestasAcertadas === 3) {
    mensajeFinal = "Nada mal, tienes conocimientos sólidos en ciberseguridad. 💪🏽";
  } else if (respuestasAcertadas <= 2) {
    mensajeFinal = "Debes profundizar tus conocimientos sobre ciberseguridad, intenta otra vez. 👍🏽";
  }
  
  let resultado = `Respondiste ${respuestasAcertadas}/${totalPreguntas} preguntas correctamente.`;
  alert(`${resultado} ${mensajeFinal}`);
});
