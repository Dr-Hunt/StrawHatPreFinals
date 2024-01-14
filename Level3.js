import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Level3.css';
 
const MakeBoard = () => {
  // 'W' represents walls, 'T' represents stop, 'D' represents doggy, 'B' represents bones

  const StartingBoard = Array.from({ length: 32 }, () => Array(32).fill(' '));
 
  // Walls
  StartingBoard[0][1] = 'W';
  StartingBoard[0][2] = 'W';
  StartingBoard[0][6] = 'W';
  StartingBoard[0][8] = 'W';
  StartingBoard[0][12] = 'W';
  StartingBoard[0][14] = 'W';
  StartingBoard[0][17] = 'W';
  StartingBoard[0][21] = 'W';
  StartingBoard[0][25] = 'W';
  StartingBoard[0][26] = 'W';
  StartingBoard[0][31] = 'W';

  StartingBoard[1][1] = 'W';
  StartingBoard[1][4] = 'W';
  StartingBoard[1][9] = 'W';
  StartingBoard[1][10] = 'W';
  StartingBoard[1][13] = 'W';
  StartingBoard[1][16] = 'W';
  StartingBoard[1][18] = 'W';
  StartingBoard[1][24] = 'W';
  StartingBoard[1][29] = 'W';

  StartingBoard[2][4] = 'W';
  StartingBoard[2][6] = 'W';
  StartingBoard[2][10] = 'W';
  StartingBoard[2][12] = 'W';
  StartingBoard[2][14] = 'W';
  StartingBoard[2][18] = 'W';
  StartingBoard[2][22] = 'W';
  StartingBoard[2][26] = 'W';
  StartingBoard[2][30] = 'W';

  StartingBoard[3][0] = 'W';
  StartingBoard[3][3] = 'W';
  StartingBoard[3][8] = 'W';
  StartingBoard[3][12] = 'W';
  StartingBoard[3][14] = 'W';
  StartingBoard[3][16] = 'W';
  StartingBoard[3][19] = 'W';
  StartingBoard[3][20] = 'W';
  StartingBoard[3][21] = 'W';
  StartingBoard[3][27] = 'W';

  StartingBoard[4][1] = 'W';
  StartingBoard[4][4] = 'W';
  StartingBoard[4][6] = 'W';
  StartingBoard[4][9] = 'W';
  StartingBoard[4][10] = 'W';
  StartingBoard[4][16] = 'W';
  StartingBoard[4][18] = 'W';
  StartingBoard[4][22] = 'W';
  StartingBoard[4][24] = 'W';
  StartingBoard[4][25] = 'W';
  StartingBoard[4][30] = 'W';

  StartingBoard[5][2] = 'W';
  StartingBoard[5][5] = 'W';
  StartingBoard[5][8] = 'W';
  StartingBoard[5][11] = 'W';
  StartingBoard[5][16] = 'W';
  StartingBoard[5][18] = 'W';
  StartingBoard[5][21] = 'W';
  StartingBoard[5][28] = 'W';
  StartingBoard[5][29] = 'W';

  StartingBoard[6][3] = 'W';
  StartingBoard[6][4] = 'W';
  StartingBoard[6][5] = 'W';
  StartingBoard[6][9] = 'W';
  StartingBoard[6][12] = 'W';
  StartingBoard[6][20] = 'W';
  StartingBoard[6][24] = 'W';
  StartingBoard[6][26] = 'W';
  StartingBoard[6][30] = 'W';

  StartingBoard[7][1] = 'W';
  StartingBoard[7][6] = 'W';
  StartingBoard[7][10] = 'W';
  StartingBoard[7][13] = 'W';
  StartingBoard[7][14] = 'W';
  StartingBoard[7][15] = 'W';
  StartingBoard[7][18] = 'W';
  StartingBoard[7][22] = 'W';
  StartingBoard[7][25] = 'W';
  StartingBoard[7][28] = 'W';

  StartingBoard[8][0] = 'W';
  StartingBoard[8][2] = 'W';
  StartingBoard[8][7] = 'W';
  StartingBoard[8][19] = 'W';
  StartingBoard[8][21] = 'W';
  StartingBoard[8][23] = 'W';
  StartingBoard[8][25] = 'W';
  StartingBoard[8][26] = 'W';
  StartingBoard[8][30] = 'W';

  StartingBoard[9][3] = 'W';
  StartingBoard[9][4] = 'W';
  StartingBoard[9][8] = 'W';
  StartingBoard[9][12] = 'W';
  StartingBoard[9][14] = 'W';
  StartingBoard[9][16] = 'W';
  StartingBoard[9][24] = 'W';
  StartingBoard[9][31] = 'W';

  StartingBoard[10][0] = 'W';
  StartingBoard[10][5] = 'W';
  StartingBoard[10][8] = 'W';
  StartingBoard[10][10] = 'W';
  StartingBoard[10][14] = 'W';
  StartingBoard[10][17] = 'W';
  StartingBoard[10][20] = 'W';
  StartingBoard[10][22] = 'W';
  StartingBoard[10][28] = 'W';
  StartingBoard[10][29] = 'W';

  StartingBoard[11][2] = 'W';
  StartingBoard[11][9] = 'W';
  StartingBoard[11][16] = 'W';
  StartingBoard[11][19] = 'W';
  StartingBoard[11][25] = 'W';
  StartingBoard[11][26] = 'W';

  StartingBoard[12][1] = 'W';
  StartingBoard[12][4] = 'W';
  StartingBoard[12][6] = 'W';
  StartingBoard[12][12] = 'W';
  StartingBoard[12][14] = 'W';
  StartingBoard[12][15] = 'W';
  StartingBoard[12][18] = 'W';
  StartingBoard[12][20] = 'W';
  StartingBoard[12][22] = 'W';
  StartingBoard[12][25] = 'W';
  StartingBoard[12][27] = 'W';
  StartingBoard[12][30] = 'W';

  StartingBoard[13][9] = 'W';
  StartingBoard[13][10] = 'W';
  StartingBoard[13][15] = 'W';
  StartingBoard[13][16] = 'W';
  StartingBoard[13][30] = 'W';

  StartingBoard[14][0] = 'W';
  StartingBoard[14][1] = 'W';
  StartingBoard[14][3] = 'W';
  StartingBoard[14][5] = 'W';
  StartingBoard[14][9] = 'W';
  StartingBoard[14][11] = 'W';
  StartingBoard[14][12] = 'W';
  StartingBoard[14][13] = 'W';
  StartingBoard[14][17] = 'W';
  StartingBoard[14][20] = 'W';
  StartingBoard[14][22] = 'W';
  StartingBoard[14][26] = 'W';

  StartingBoard[15][2] = 'W';
  StartingBoard[15][5] = 'W';
  StartingBoard[15][7] = 'W';
  StartingBoard[15][9] = 'W';
  StartingBoard[15][15] = 'W';
  StartingBoard[15][18] = 'W';
  StartingBoard[15][23] = 'W';
  StartingBoard[15][25] = 'W';
  StartingBoard[15][27] = 'W';
  StartingBoard[15][29] = 'W';

  StartingBoard[16][1] = 'W';
  StartingBoard[16][5] = 'W';
  StartingBoard[16][7] = 'W';
  StartingBoard[16][12] = 'W';
  StartingBoard[16][14] = 'W';
  StartingBoard[16][17] = 'W';
  StartingBoard[16][21] = 'W';
  StartingBoard[16][25] = 'W';
  StartingBoard[16][27] = 'W';
  StartingBoard[16][31] = 'W';

  StartingBoard[17][3] = 'W';
  StartingBoard[17][7] = 'W';
  StartingBoard[17][14] = 'W';
  StartingBoard[17][18] = 'W';
  StartingBoard[17][19] = 'W';
  StartingBoard[17][20] = 'W';
  StartingBoard[17][23] = 'W';
  StartingBoard[17][29] = 'W';

  StartingBoard[18][0] = 'W';
  StartingBoard[18][2] = 'W';
  StartingBoard[18][3] = 'W';
  StartingBoard[18][4] = 'W';
  StartingBoard[18][7] = 'W';
  StartingBoard[18][10] = 'W';
  StartingBoard[18][15] = 'W';
  StartingBoard[18][17] = 'W';
  StartingBoard[18][19] = 'W';
  StartingBoard[18][22] = 'W';
  StartingBoard[18][24] = 'W';
  StartingBoard[18][26] = 'W';
  StartingBoard[18][29] = 'W';
  StartingBoard[18][31] = 'W';

  StartingBoard[19][8] = 'W';
  StartingBoard[19][9] = 'W';
  StartingBoard[19][10] = 'W';
  StartingBoard[19][11] = 'W';
  StartingBoard[19][13] = 'W';
  StartingBoard[19][28] = 'W';

  StartingBoard[20][4] = 'W';
  StartingBoard[20][11] = 'W';
  StartingBoard[20][15] = 'W';
  StartingBoard[20][18] = 'W';
  StartingBoard[20][19] = 'W';
  StartingBoard[20][20] = 'W';
  StartingBoard[20][22] = 'W';
  StartingBoard[20][24] = 'W';
  StartingBoard[20][28] = 'W';
  StartingBoard[20][30] = 'W';

  StartingBoard[21][0] = 'W';
  StartingBoard[21][5] = 'W';
  StartingBoard[21][6] = 'W';
  StartingBoard[21][11] = 'W';
  StartingBoard[21][12] = 'W';
  StartingBoard[21][16] = 'W';
  StartingBoard[21][19] = 'W';
  StartingBoard[21][25] = 'W';
  StartingBoard[21][27] = 'W';

  StartingBoard[22][1] = 'W';
  StartingBoard[22][4] = 'W';
  StartingBoard[22][6] = 'W';
  StartingBoard[22][8] = 'W';
  StartingBoard[22][13] = 'W';
  StartingBoard[22][15] = 'W';
  StartingBoard[22][19] = 'W';
  StartingBoard[22][21] = 'W';
  StartingBoard[22][23] = 'W';
  StartingBoard[22][28] = 'W';
  StartingBoard[22][31] = 'W';

  StartingBoard[23][4] = 'W';
  StartingBoard[23][6] = 'W';
  StartingBoard[23][10] = 'W';
  StartingBoard[23][11] = 'W';
  StartingBoard[23][16] = 'W';
  StartingBoard[23][17] = 'W';
  StartingBoard[23][21] = 'W';
  StartingBoard[23][26] = 'W';

  StartingBoard[24][0] = 'W';
  StartingBoard[24][3] = 'W';
  StartingBoard[24][4] = 'W';
  StartingBoard[24][7] = 'W';
  StartingBoard[24][8] = 'W';
  StartingBoard[24][9] = 'W';
  StartingBoard[24][10] = 'W';
  StartingBoard[24][11] = 'W';
  StartingBoard[24][13] = 'W';
  StartingBoard[24][18] = 'W';
  StartingBoard[24][23] = 'W';
  StartingBoard[24][28] = 'W';
  StartingBoard[24][30] = 'W';

  StartingBoard[25][2] = 'W';
  StartingBoard[25][9] = 'W';
  StartingBoard[25][14] = 'W';
  StartingBoard[25][20] = 'W';
  StartingBoard[25][25] = 'W';
  StartingBoard[25][26] = 'W';

  StartingBoard[26][0] = 'W';
  StartingBoard[26][7] = 'W';
  StartingBoard[26][10] = 'W';
  StartingBoard[26][15] = 'W';
  StartingBoard[26][21] = 'W';
  StartingBoard[26][25] = 'W';
  StartingBoard[26][27] = 'W';

  StartingBoard[27][1] = 'W';
  StartingBoard[27][3] = 'W';
  StartingBoard[27][5] = 'W';
  StartingBoard[27][14] = 'W';
  StartingBoard[27][19] = 'W';
  StartingBoard[27][24] = 'W';
  StartingBoard[27][30] = 'W';
  StartingBoard[27][31] = 'W';

  StartingBoard[28][0] = 'W';
  StartingBoard[28][4] = 'W';
  StartingBoard[28][6] = 'W';
  StartingBoard[28][8] = 'W';
  StartingBoard[28][10] = 'W';
  StartingBoard[28][11] = 'W';
  StartingBoard[28][14] = 'W';
  StartingBoard[28][15] = 'W';
  StartingBoard[28][18] = 'W';
  StartingBoard[28][19] = 'W';
  StartingBoard[28][21] = 'W';
  StartingBoard[28][26] = 'W';

  StartingBoard[29][0] = 'W';
  StartingBoard[29][1] = 'W';
  StartingBoard[29][2] = 'W';
  StartingBoard[29][7] = 'W';
  StartingBoard[29][10] = 'W';
  StartingBoard[29][11] = 'W';
  StartingBoard[29][13] = 'W';
  StartingBoard[29][15] = 'W';
  StartingBoard[29][16] = 'W';
  StartingBoard[29][22] = 'W';
  StartingBoard[29][23] = 'W';
  StartingBoard[29][24] = 'W';
  StartingBoard[29][28] = 'W';

  StartingBoard[30][0] = 'W';
  StartingBoard[30][4] = 'W';
  StartingBoard[30][8] = 'W';
  StartingBoard[30][11] = 'W';
  StartingBoard[30][15] = 'W';
  StartingBoard[30][18] = 'W';
  StartingBoard[30][19] = 'W';
  StartingBoard[30][27] = 'W';
  StartingBoard[30][30] = 'W';
  StartingBoard[30][31] = 'W';

  StartingBoard[31][2] = 'W';
  StartingBoard[31][6] = 'W';
  StartingBoard[31][13] = 'W';
  StartingBoard[31][17] = 'W';
  StartingBoard[31][21] = 'W';
  StartingBoard[31][24] = 'W';
  StartingBoard[31][25] = 'W';
  StartingBoard[31][29] = 'W';
  StartingBoard[31][30] = 'W';
  StartingBoard[31][31] = 'W';

 
  // Finish
  StartingBoard[0][0] = 'F';
 
  // Start
  StartingBoard[31][0] = 'S';
 
  // Krabby Patties
  StartingBoard[11][31] = 'KK';
  StartingBoard[18][8] = 'KK';
  StartingBoard[29][31] = 'KK';
  StartingBoard[13][20] = 'KK';
  StartingBoard[21][6] = 'KK';
  StartingBoard[24][9] = 'KK';
  StartingBoard[25][26] = 'KK';
  StartingBoard[26][15] = 'KK';
  StartingBoard[27][29] = 'KK';
  StartingBoard[30][26] = 'KK';
 
  return StartingBoard;
};
 
const SpongebobJam = () => {
  const initialBoard = MakeBoard(); // Store the initial state to reset the game

  const [board, setBoard] = useState(initialBoard);
  const [SpongebobStarting, setSpongebobStarting] = useState({ x: 0, y: 31 });
  const [score, setScore] = useState(0);
  const [showCongratulations, setShowCongratulations] = useState(false);

  const resetGame = () => {
    setBoard(initialBoard);
    setSpongebobStarting({ x: 31, y: 0 });
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
      <h1 className="center-texty">Level 3: Super Hard Game</h1>
      <h2 className="center-textsy">Score: {score}</h2>

      {showCongratulations ? (
        <div className="CongratsMessage">
          <p>Congratulations, you win!</p>
          <div className="ButtonContainers">

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
                  className="MazeCellsLevel3"
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