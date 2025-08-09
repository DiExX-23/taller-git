// game.js
// Juego de adivinar un número secreto
// Autor: Diego Vasquez
// Fecha: 2023-10-01
// El jugador recibe pistas de "frío" o "caliente" dependiendo de qué tan cerca o lejos esté
// y tiene un máximo de 15 intentos por partida.

const prompt = require('prompt-sync')({ sigint: true });
const MIN = 1;
const MAX = 125;

let jugarOtraVez = true;

while (jugarOtraVez) {
  let numeroSecreto = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  let intentos = 0;
  let adivinado = false;

  console.log(`Bienvenido al juego: Adivina el número secreto entre ${MIN} y ${MAX} en un máximo de 15 intentos.`);

  while (!adivinado) {
    let entrada = prompt("Ingresa tu número: ");
    let intento = parseInt(entrada, 10);
    intentos++;

    if (intentos >= 15) {
      console.log(`Se acabaron tus intentos. El número era ${numeroSecreto}.`);
      break;
    }

    if (isNaN(intento)) {
      console.log("Por favor ingresa un número válido.");
      continue;
    }

    // Mostrar intentos restantes
    console.log(`Te quedan ${15 - intentos} intentos.`);

    if (intento === numeroSecreto) {
      console.log(`¡Correcto! Lo lograste en ${intentos} intentos.`);
      adivinado = true;
    } else {
      let diff = Math.abs(numeroSecreto - intento);
      if (diff <= 5) console.log("Muy caliente: estás muy cerca.");
      else if (diff <= 15) console.log("Caliente: cerca del número.");
      else console.log("Frío: estás lejos del número.");

      if (intento < numeroSecreto) {
        console.log("Pista: el número es mayor.");
      } else {
        console.log("Pista: el número es menor.");
      }
    }
  }

  const respuesta = prompt("¿Quieres jugar otra vez? (s/n): ").toLowerCase();
  if (respuesta !== 's') {
    jugarOtraVez = false;
    console.log("Gracias por jugar.");
  }
}