import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Level2.css';
 
const MakeBoard = () => {
  // 'W' represents walls, 'T' represents stop, 'D' represents doggy, 'B' represents bones

  const StartingBoard = Array.from({ length: 16 }, () => Array(16).fill(' '));
 
  // Walls
  StartingBoard[0][4] = 'W';
  StartingBoard[0][7] = 'W';
  StartingBoard[0][13] = 'W';

  StartingBoard[1][2] = 'W';
  StartingBoard[1][5] = 'W';
  StartingBoard[1][9] = 'W';
  StartingBoard[1][10] = 'W';

  StartingBoard[2][1] = 'W';
  StartingBoard[2][2] = 'W';
  StartingBoard[2][4] = 'W';
  StartingBoard[2][11] = 'W';
  StartingBoard[2][13] = 'W';

  StartingBoard[3][1] = 'W';
  StartingBoard[3][6] = 'W';
  StartingBoard[3][8] = 'W';
  StartingBoard[3][10] = 'W';
  StartingBoard[3][11] = 'W';
  StartingBoard[3][12] = 'W';
  StartingBoard[3][14] = 'W';
  StartingBoard[3][15] = 'W';

  StartingBoard[4][4] = 'W';
  StartingBoard[4][7] = 'W';
  StartingBoard[4][12] = 'W';
  StartingBoard[4][14] = 'W';

  StartingBoard[5][0] = 'W';
  StartingBoard[5][2] = 'W';
  StartingBoard[5][5] = 'W';
  StartingBoard[5][9] = 'W';
  StartingBoard[5][11] = 'W';

  StartingBoard[6][4] = 'W';
  StartingBoard[6][5] = 'W';
  StartingBoard[6][7] = 'W';
  StartingBoard[6][8] = 'W';
  StartingBoard[6][13] = 'W';
  StartingBoard[6][15] = 'W';

  StartingBoard[7][0] = 'W';
  StartingBoard[7][2] = 'W';
  StartingBoard[7][4] = 'W';
  StartingBoard[7][7] = 'W';
  StartingBoard[7][9] = 'W';
  StartingBoard[7][11] = 'W';
  StartingBoard[7][14] = 'W';

  StartingBoard[8][1] = 'W';
  StartingBoard[8][6] = 'W';
  StartingBoard[8][11] = 'W';
  StartingBoard[8][12] = 'W';

  StartingBoard[9][1] = 'W';
  StartingBoard[9][3] = 'W';
  StartingBoard[9][8] = 'W';
  StartingBoard[9][10] = 'W';
  StartingBoard[9][12] = 'W';
  StartingBoard[9][14] = 'W';
  StartingBoard[9][15] = 'W';

  StartingBoard[10][1] = 'W';
  StartingBoard[10][4] = 'W';
  StartingBoard[10][5] = 'W';
  StartingBoard[10][7] = 'W';
  StartingBoard[10][9] = 'W';
  StartingBoard[10][15] = 'W';

  StartingBoard[11][0] = 'W';
  StartingBoard[11][3] = 'W';
  StartingBoard[11][7] = 'W';
  StartingBoard[11][10] = 'W';
  StartingBoard[11][13] = 'W';

  StartingBoard[12][2] = 'W';
  StartingBoard[12][5] = 'W';
  StartingBoard[12][9] = 'W';
  StartingBoard[12][10] = 'W';
  StartingBoard[12][11] = 'W';
  StartingBoard[12][14] = 'W';

  StartingBoard[13][1] = 'W';
  StartingBoard[13][4] = 'W';
  StartingBoard[13][5] = 'W';
  StartingBoard[13][8] = 'W';
  StartingBoard[13][12] = 'W';
  StartingBoard[13][15] = 'W';

  StartingBoard[14][1] = 'W';
  StartingBoard[14][5] = 'W';
  StartingBoard[14][7] = 'W';
  StartingBoard[14][10] = 'W';
  StartingBoard[14][11] = 'W';

  StartingBoard[15][2] = 'W';
  StartingBoard[15][4] = 'W';
  StartingBoard[15][9] = 'W';
  StartingBoard[15][12] = 'W';
  StartingBoard[15][14] = 'W';

 
  // Finish
  StartingBoard[14][15] = 'F';
 
  // Start
  StartingBoard[0][0] = 'S';
 
  // Krabby Patties
  StartingBoard[1][1] = 'KK';
  StartingBoard[2][4] = 'KK';
  StartingBoard[3][2] = 'KK';
 
  return StartingBoard;
};
 
const SpongebobJam = () => {
  const initialBoard = MakeBoard(); // Store the initial state to reset the game

  const [board, setBoard] = useState(initialBoard);
  const [SpongebobStarting, setSpongebobStarting] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(0);
  const [showCongratulations, setShowCongratulations] = useState(false);

  const resetGame = () => {
    setBoard(initialBoard);
    setSpongebobStarting({ x: 0, y: 0 });
    setScore(0);
    setShowCongratulations(false);
  };

  const handleKeyDown = useCallback((event) => {
    if (showCongratulations) {
      return;
    }
 
    const { key } = event;
 
    setSpongebobStarting((PreviousLocation) => {
      const NewLocation = { ...PreviousLocation };
 
      switch (key) {
        case 'ArrowUp':
          NewLocation.y = Math.max(0, NewLocation.y - 1);
          break;
        case 'ArrowDown':
          NewLocation.y = Math.min(board.length - 1, NewLocation.y + 1);
          break;
        case 'ArrowLeft':
          NewLocation.x = Math.max(0, NewLocation.x - 1);
          break;
        case 'ArrowRight':
          NewLocation.x = Math.min(board[0].length - 1, NewLocation.x + 1);
          break;
        default:
          return PreviousLocation;
      }
 
      if (board[NewLocation.y][NewLocation.x] !== 'W') {
        const CurrentLocation = board[NewLocation.y][NewLocation.x];
        if (CurrentLocation === 'F') {
          setShowCongratulations(true);
        } else if (CurrentLocation === 'KK') {
          setScore((prevScore) => prevScore + 1);
          setBoard((PreviousBoard) => {
            const NextBoard = [...PreviousBoard];
            NextBoard[NewLocation.y][NewLocation.x] = ' ';
            return NextBoard;
          });
        }
 
        return NewLocation;
      }
 
      return PreviousLocation;
    });
  }, [board, setSpongebobStarting, setScore, setBoard, setShowCongratulations, showCongratulations]);
 
  useEffect(() => {
    const handleKeyDownWrapper = (event) => handleKeyDown(event);
    document.addEventListener('keydown', handleKeyDownWrapper);
    return () => {
      document.removeEventListener('keydown', handleKeyDownWrapper);
    };
  }, [handleKeyDown]);
 
  return (
    <div className="MainContainerLevel1">
      <h1 className="center-texty">Level 2: Hard Game</h1>
      <h2 className="center-textsy">Score: {score}</h2>

      {showCongratulations ? (
        <div className="CongratsMessage">
          <p>Congratulations, you win!</p>
          <div className="ButtonContainers">

            <Link to="/Level3" className="Button">
               Next Level 
            </Link>

            <button onClick={resetGame} className="Button"> Retry </button>

            <Link to="/" className="Button">
               Back to Home
            </Link>

          </div>
        </div>
      ) : (
        <div className="TheMazeBoard">
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className="MazeRow">
              {row.map((cell, columnIndex) => (
                <div
                  key={columnIndex}
                  className="MazeCellsLevel2"
                  style={{
                    backgroundColor: cell === 'W' ? 'black' : cell === 'F' ? 'Green' : cell === 'S' ? 'white' : 'transparent',
                  }}
                >
                  {rowIndex === SpongebobStarting.y && columnIndex === SpongebobStarting.x && '🧽'}
                  {cell === 'KK' && <div className="icons">🍔</div>}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SpongebobJam;