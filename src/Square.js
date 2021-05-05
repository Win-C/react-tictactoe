import './Square.css';

/** Square Component is a presentational component
 * 
 *  Props:
 *  - value is a string for the square to be displayed
 *  - updateBoardFn is a function from parent to be called when clicked
 * 
 *  Board -> Square
 */
function Square({ value, updateBoardFn }){
  return (
    <td
      className="Square"
      onClick={updateBoardFn}
      role="button"
    >
      {value}
    </td>
  )
}

export default Square;