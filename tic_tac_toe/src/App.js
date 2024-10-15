import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./components/GameOver.js";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

// Helper function to remove repeated code
function deriveActivePlayer(gameTurns) {
  // Derive the current active player from the gameTurns state
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [ gameTurns, setGameTurns ] = useState([]);
  // THis state is unnecessary - can derive from game turns
  //const [ activePlayer, setActivePlayer ] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns);

  // Initialize as the empty game board
  let gameBoard = initialGameBoard;

  // Add all current turns in the game to the game board
  // by doing this, we are deriving state from gameTurns state managed in the App component ancestor
  for (const turn of gameTurns) {
      // Destructure the turn to pull out the square and player
      const { square, player } = turn;
      // Further destructure the object by pulling out the row and col values from the square object
      const { row, col } = square;
      
      gameBoard[row][col] = player;
  }

  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex, ) {
    //setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      // We use this variable instead of activePlayer state because we cannot
      // count on the state of active player within this state function.
      // setGameTurns is a function of "prevGameTurns", so that is the old state
      // that we must base the future of this state on
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: {row: rowIndex, col: colIndex}, player: currentPlayer }, 
        ...prevTurns
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X" 
            isActive={activePlayer === 'X'}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === 'O'}
          />  
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner}/>}
        <GameBoard 
          onSelectSquare={handleSelectSquare} 
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
