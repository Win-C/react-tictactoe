/** Function calculates winner by checking all possibilities
 *  Returns winner if there is a winner otherwise returns null
 * 
 * @param {*} squares
 */
function calculateWinner(squares){
  // Look up array with all winning moves
  const linesToCheck = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];
  for (let i = 0; i < linesToCheck.length; i++){
    const [a, b, c] = linesToCheck[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
      return squares[a];
    }
  }

  return null;
}

// Test function
const squares = [
  null, null, null,
  'X', 'X', 'O',
  null, null, null
];

console.log(calculateWinner(squares));

export default calculateWinner;