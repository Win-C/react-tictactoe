import { useState } from 'react';
import calculateWinner from '../tictactoe';
import Board from './Board';

/** Game Component 
 * 
 *  App -> Game -> { Board, Message }
 */
function Game(){
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const isTie = history[stepNumber].every(square => square !== null);

  function handleClick(i){
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];

    // If user click an occupied square or if game is won or tie then do nothing
    if(winner || isTie || squares[i]) return;

    // Put an X or an O in the clicked square
    squares[i] = xIsNext ? "X" : "O"; 

    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
  }

  function jumpTo(step){
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  }

  function renderMoves(){
    return history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : 'Go to start';
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>
              {destination}
          </button>
        </li>
      )
    })
  }

  const styles = {
    width: '200px',
    margin: '20px auto',
  };

  return (
    <>
      <Board squares={history[stepNumber]} playMove={handleClick} />
      <div style={styles}>
        <p>
          {winner ? 'Winner: ' + winner : (isTie ? "It's a tie!": null)}
        </p>
        <p>
          {winner || isTie ? null : 'Next Player: ' + (xIsNext ? 'X' : 'O')}
        </p>
        {renderMoves()}
      </div>
    </>
  );
}

export default Game;