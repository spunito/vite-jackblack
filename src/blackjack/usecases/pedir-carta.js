
/**
 *
 * @param {Array<String>} deck 
 * @returns {String} Devuelve la ultima carta del arreglo de Deck
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}