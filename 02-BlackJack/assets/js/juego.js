const Juego = (() => {
  "use strict";

  let deck = [],
    deckRestante = [],
    carta = "",
    puntosJugador = 0,
    puntos = 0,
    puntosComputadora = 0;

  const tipos = ["D", "S", "H", "C"],
    especiales = ["A", "J", "Q", "K"],
    puntosHtml = document.querySelectorAll("small"),
    divCartasJugador = document.querySelector("#jugador-cartas"),
    divCartasComputadora = document.querySelector("#computadora-cartas"),
    //Referencias
    btnPedir = document.querySelector("#btnPedir"),
    btnDetener = document.querySelector("#btnDetener"),
    btnNuevo = document.querySelector("#btnNuevo");

  //Creo el deck inicial y lo mezclo. Inicia en 2 y termina en 10 por las especiales.
  const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
      for (let tipo of tipos) {
        deck.push(i + tipo);
      }
    }
    for (let tipo of tipos) {
      for (let especial of especiales) {
        deck.push(especial + tipo);
      }
    }

    deck = _.shuffle(deck);
    deckRestante = deck;
    return deck;
  };

  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : (puntos = valor * 1);
  };

  function SolicitudCarta(jugador) {
    const carta = pedirCarta();

    if (jugador) {
      puntosJugador += valorCarta(carta);
      puntosHtml[0].innerText = puntosJugador;
    } else {
      puntosComputadora += valorCarta(carta);
      puntosHtml[1].innerText = puntosComputadora;
    }
    DibujarCarta(jugador);
    const resultado = EvaluarPuntos(jugador);
    return resultado;
  }

  //Funcion que permite tomar una carta
  const pedirCarta = () => {
    if (deckRestante <= 0) {
      throw "no hay mas cartas";
    }
    //toma un valor aleatorio
    carta = _.sample(deckRestante);
    //saca el valor aleatorio del arreglo, que sea distinto al ultimo.
    deckRestante = deckRestante.filter((item) => item != carta);
    // console.log(carta);
    // console.log(deckRestante);
    return carta;
  };

  function TurnoComputadora() {
    setTimeout(SolicitudCarta, 2000, false);
  }

  function DibujarCarta(jugador) {
    const cartasImg = document.createElement("img");
    cartasImg.src = `assets/cartas/${carta}.png`;
    cartasImg.classList.add("carta");
    if (jugador) {
      divCartasJugador.append(cartasImg);
      return divCartasJugador;
    } else {
      divCartasComputadora.append(cartasImg);
      return divCartasComputadora;
    }
  }

  function EvaluarPuntos(jugador) {
    if (puntosJugador > 21 || puntosComputadora === 21) {
      alert("Haz Perdido.");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      return false;
    } else if (puntosJugador === 21 || puntosComputadora > 21) {
      alert("El Jugador ha ganado!! Felicidades!!");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      return false;
    }
    return true;
  }

  const CrearNuevo = () => {
    btnDetener.disabled = true;
    btnPedir.disabled = false;
    puntosJugador = 0;
    puntosComputadora = 0;
    puntosHtml[1].innerText = "0";
    puntosHtml[0].innerText = "0";

    deck = [];
    deckRestante = [];
    crearDeck();

    divCartasJugador.innerHTML = "";
    divCartasComputadora.innerHTML = "";
  };

  crearDeck();

  //Eventos
  btnPedir.addEventListener("click", () => {
    //Se envia la primer carta del jugador, si no obtiene mas de 21 puntos puede seguir pidiendo
    //Si la computadora llega a mas de 21 el jugador gana.
    //La computadora juega mientras el jugador este por debajo del 21.
    btnDetener.disabled = false;
    if (SolicitudCarta(true)) {
      TurnoComputadora();
    }
  });

  btnDetener.addEventListener("click", () => {
    TurnoComputadora();
    EvaluarPuntos(false);
  });

  //   btnNuevo.addEventListener("click", () => {
  //     CrearNuevo();
  //   });

  return {
    nuevoJuego: CrearNuevo,
  };
})();
