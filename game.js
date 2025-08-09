const MIN = 1;
const MAX = 125;
let jugarOtraVez = true;

while (jugarOtraVez) {
  let numeroSecreto = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  let intentos = 0;
  let adivinado = false;

  alert(`Bienvenido: adivina el número secreto (${MIN}-${MAX}) con solo 15 intentos`);

  while (!adivinado) {
    let entrada = prompt("Ingresa tu número:");
    let intento = parseInt(entrada, 10);
    intentos++;

    if (intentos >= 15) {
      alert("Se acabaron tus intentos. El número era " + numeroSecreto);
      break;
    }

    if (isNaN(intento)) {
      alert("Por favor ingresa un número válido.");
      continue;
    }

    if (intento === numeroSecreto) {
      alert(`¡Correcto! Lo lograste en ${intentos} intentos.`);
      adivinado = true;
    } else {
      let diff = Math.abs(numeroSecreto - intento);
      if (diff <= 5) alert("Muy caliente como el sol");
      else if (diff <= 15) alert("Caliente como un volcán");
      else alert("Frío como el espacio");

      if (intento < numeroSecreto) alert("Pista: el número es mayor.");
      else alert("Pista: el número es menor.");
    }
  }

  let respuesta = prompt("¿Quieres jugar otra vez? (s/n):").toLowerCase();
  if (respuesta !== 's') {
    jugarOtraVez = false;
    alert("Gracias por jugar.");
  }
}