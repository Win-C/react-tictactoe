
/** Square Component is a presentational component
 * 
 *  Props:
 *  - value is a string for the square to be displayed
 *  - updateBoardFn is a function from parent to be called when clicked
 * 
 *  Board -> Square
 */
function Square({value, playMove}){
  const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
  };

  return (
    <button style={style} onClick={playMove}>
      {value}
    </button>
  )
}

export default Square;