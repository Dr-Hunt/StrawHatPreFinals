import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../Css/level1.css';
import '../Css/Level2.css';
import '../Css/Level3.css';
 
const MakeBoard = () => {
  // W for Walls
  // F for Finish
  // S for Spongebob
  // KK for Krabby Patty
  const StartingBoard = Array.from({ length: 8 }, () => Array(8).fill(' '));
 
  // Walls
  StartingBoard[0][1] = 'W';
  StartingBoard[0][5] = 'W';

  StartingBoard[1][3] = 'W';

  StartingBoard[2][0] = 'W';
  StartingBoard[2][2] = 'W';
  StartingBoard[2][6] = 'W';
  StartingBoard[2][7] = 'W';

  StartingBoard[3][4] = 'W';

  StartingBoard[4][6] = 'W';

  StartingBoard[5][0] = 'W';
  StartingBoard[5][2] = 'W';
  StartingBoard[5][4] = 'W';
  StartingBoard[5][7] = 'W';

  StartingBoard[6][2] = 'W';
  StartingBoard[6][5] = 'W';
  StartingBoard[6][6] = 'W';

  StartingBoard[7][0] = 'W';
  StartingBoard[7][3] = 'W';
 
  // Finish
  StartingBoard[7][7] = 'F';
 
  // Start
  StartingBoard[0][7] = 'S';
 
  // Krabby Patties
  StartingBoard[0][0] = 'KK';
  StartingBoard[5][6] = 'KK';
  StartingBoard[7][2] = 'KK';
  StartingBoard[0][3] = 'KK';
 
  return StartingBoard;
};
 
  const SpongebobJam = () => {
  const initialBoard = MakeBoard(); // Store the initial state to reset the game

  const [board, setBoard] = useState(initialBoard);
  const [SpongebobStarting, setSpongebobStarting] = useState({ x: 7, y: 0 });
  const [score, setScore] = useState(0);
  const [showCongratulations, setShowCongratulations] = useState(false);

  const resetGame = () => {
    setBoard(initialBoard);
    setSpongebobStarting({ x: 7, y: 0 });
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
      <h1 className="center-texty">Level 1: Easy Game</h1>
      <h2 className="center-textsy">Score: {score}</h2>

      {showCongratulations ? (
        <div className="CongratsMessage">
          <p>Congratulations, you win!</p>
          <div className="ButtonContainers">

            <Link to="/Level2" className="Button">
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
                  className="MazeCellsLevel1"
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