import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";

// turno de la computadora

export const turnoComputadora = (
  puntosComputadora,
  puntosHTML,
  divCartasComputadora,
  puntosJugador,
  deck
) => {
  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add("carta");
    divCartasComputadora.append(imgCarta);

    if (puntosJugador > 21) {
      break;
    }
  } while (puntosComputadora < puntosJugador && puntosJugador <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosJugador) {
      alert("Nadie gana :(");
    } else if (puntosJugador > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};
