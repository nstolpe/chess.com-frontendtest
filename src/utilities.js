/**
 * Expects a number between 0 and 63 that represents
 * a square on a chessboard. 0 is the top left and 63
 * is the bottom right. Returns the algebraic notation
 * coordinates for the square.
 */
export const getAlgebraicCoordinates = (idx) => {
  const columns = 'abcdefgh'
  const row = 8 - Math.floor(idx / 8)
  const column = columns[idx % 8]
  return [column, row]
}
