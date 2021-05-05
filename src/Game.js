import Board from './Board';
import './Game.css';

/** Game Component 
 * 
 *  Props:
 *  - 
 * 
 *  State:
 *  - 
 * 
 *  App -> Game -> { Board, Message }
 */
function Game(){

  return (
    <div className="Game">
      <div className="Game-board">
        <Board />
      </div>
      <div className="Game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default Game;