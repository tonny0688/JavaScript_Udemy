import _ from "underscore";

// Esta función crea un nuevo deck

/**
 * Crear un nuevo deck
 * @param {Array<string>} tiposNormales Ejemplo ["C", "D", "H", "S"];
 * @param {Array<string>} tiposEspeciales Ejemplo ["A", "J", "Q", "K"];
 * @returns {array<string>}
 */
export const crearDeck = (tiposNormales, tiposEspeciales) => {
  if (!tiposNormales || !tiposEspeciales)
    throw new Error("Los parametros son requeridos.");
  if (!tiposEspeciales.length || !tiposNormales.length)
    throw new Error("Los parametros no pueden estar vacios.");

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposNormales) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposNormales) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);
  console.log(deck);
  return deck;
};
