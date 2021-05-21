import Square from './Square';

/** Board Component
 * 
 *  Props:
 *  - width is an integer for board
 *  - height is an integer for board
 *  - players is an array like ["X", "O"]
 * 
 *  State:
 *  - board is an array of arrays that remembers player moves
 *  - currPlayer is a string of the current player
 * 
 *  Game -> Board -> Square
 */
function Board({squares, playMove}) {
  const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
  };

  return (
    <div className="Board" style={style} >
      {
        squares.map((square, i) => (
          <Square 
            key={i} 
            value={square} 
            playMove={() => playMove(i)} />
        ))
      }
    </div>
  );
}

export default Board;