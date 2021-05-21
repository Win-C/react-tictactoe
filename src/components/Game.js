import { useState } from 'react';
import calculateWinner from '../tictactoe';
import Board from './Board';

/** Game Component 
 * 
 *  App -> Game -> { Board, Message }
 */
function Game(){
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);
  const isTie = !winner && board.every(square => square !== null);

  function handleClick(i){
    const boardCopy = [...board];

    // If user click an occupied square or if game is won or tie then do nothing
    if(winner || isTie || boardCopy[i]) return;

    // Put an X or an O in the clicked square
    boardCopy[i] = xIsNext ? "X" : "O"; 

    setBoard(boardCopy);
    setXisNext(!xIsNext);
  }

  // function jumpTo(){

  // }

  function renderMoves(){
    return ( winner || isTie
        ? <button onClick={() => setBoard(Array(9).fill(null))}>
            Restart Game
          </button>
        : null
    )
  }

  const styles = {
    width: '200px',
    margin: '20px auto',
  };

  return (
    <>
      <Board squares={board} playMove={handleClick} />
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