import { useState } from 'react';
import Square from './Square';
import './Board.css';

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
function Board({height, width, players}) {
  const [board, setBoard] = useState(() => setupBoard());
  const [currPlayer, setCurrPlayer] = useState(players[0]);
  // const [isGameOver, setIsGameOver] = useState(false);

  function setupBoard(){
    // console.log("setupBoard ran");
    let initialBoard = [];

    for (let y = 0; y < height; y++){
      let newRow = new Array(width);
      initialBoard.push(newRow.fill(null));
    }

    return initialBoard;
  }

  function checkForWin(){
    // console.log("checkForWin ran");

    const _win = cells =>
      cells.every(
        ([y, x]) => {
          const prevPlayer = currPlayer === players[0]
            ? players[1]
            : players[0];

          return y >= 0 &&
            y < height &&
            x >= 0 &&
            x < width &&
            board[y][x] === prevPlayer;
        }
      );

    for (let y = 0; y < height; y++){
      for (let x = 0; x < width; x++){
        const horiz = [[y, x], [y, x + 1], [y, x + 2]];
        const vert = [[y, x], [y + 1, x], [y + 2, x]];
        const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2]];
        const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2]];

        if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)){
          return true;
        }
      }
    }
  }

  function updateBoardFn(coord){
    // if (isGameOver) return;

    // place move in board
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);
      const boardCopy = oldBoard.map(row => [...row]);

      if(!boardCopy[y][x]) boardCopy[y][x] = currPlayer;

      return boardCopy;
    })

    // switch players
    let nextPlayer = currPlayer === players[0] ? players[1] : players[0];
    setCurrPlayer(nextPlayer);
  }

  // check for win
  if(checkForWin()){
    const prevPlayer = currPlayer === players[0]
            ? players[1]
            : players[0];
    return <div>{`Player ${prevPlayer} won!`}</div>;
  }
  
  // check for tie
  if (board.every(row => row.every(cell => cell !== null))) {
    return (
      <div>"It's a tie!"</div>
    )
  }

  let tblBoard = [];

  for (let y = 0; y < height; y++){
    let row = [];
    for(let x = 0; x < width; x++){
      let coord = `${y}-${x}`;
      row.push(
        <Square
          key={coord}
          value={board[y][x]}
          updateBoardFn={() => updateBoardFn(coord)}
        />
      )
    }
    tblBoard.push(<tr key={y}>{row}</tr>)
  }

  return (
    <div className="Board">
      <div className="Board-status">{`Next player: ${currPlayer}`}</div>
      <table className="Board-table">
        <tbody>{tblBoard}</tbody>
      </table>
    </div>
  );
}

Board.defaultProps = {
  height: 3,
  width: 3, 
  players: ['X', 'O'],
}

export default Board;