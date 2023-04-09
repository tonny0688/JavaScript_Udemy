/**
 * Devuelve la ultima carta del deck.
 * @param {Array<string>} deck
 * @returns Array
 */
export const pedirCarta = (deck) => {
  if (deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  const carta = deck.pop();
  return carta;
};
