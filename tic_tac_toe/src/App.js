import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./components/GameOver.js";

const PLAYERS = {
    'X': 'Player 1',
    'O': 'Player 2'
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveGameBoard(gameTurns) {
  // Initialize as the empty game board
  // Need to do a deep copy
  // Otherwise any changes to gameBoard will actually change the memory behind initialGameboard as well
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

  // Add all current turns in the game to the game board
  // by doing this, we are deriving state from gameTurns state managed in the App component ancestor
  for (const turn of gameTurns) {
      // Destructure the turn to pull out the square and player
      const { square, player } = turn;
      // Further destructure the object by pulling out the row and col values from the square object
      const { row, col } = square;
      
      gameBoard[row][col] = player;
  }

  return gameBoard;
}

// Helper function to remove repeated code
function deriveActivePlayer(gameTurns) {
  // Derive the current active player from the gameTurns state
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function deriveWinner(gameBoard, players) {
  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [ gameTurns, setGameTurns ] = useState([]);
  // THis state is unnecessary - can derive from game turns
  //const [ activePlayer, setActivePlayer ] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players);

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

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(oldPlayers => {
      return {
        // add the old players data for anything that is not changing
        ...oldPlayers,
        // dynamically set a property name with the [] syntax
        // add the new name for the specified symbol
        [symbol]: newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS['X']}
            symbol="X" 
            // Derived state
            isActive={activePlayer === 'X'}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS['O']}
            symbol="O"
            // Derived State
            isActive={activePlayer === 'O'}
            onChangeName={handlePlayerNameChange}
          />  
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
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
