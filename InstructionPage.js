import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Instructions.css';
import '../HomePage/Home.js';

const Instructions = () => {
  return (
    <div className="MainContainer">
      <div className="Instructions">
        <h2>Instructions</h2>

        <p>
          Welcome to Spongebob Adventure In A Jam. Spongebob lost his way
          back home and he needs your help. Guide him to send him home with Gary.
        </p>

        <p>
          While jellyfishing, Spongebob got lost in the vast fields of
          jellyfish fields. He could not find his way home and it is 
          getting dark. Gary needs him home to feed and take care of him.
          Help Spongebob to go home to Gary and make them happy.
        </p>

        <p>
          1. Use the arrow keys to navigate through the maze. <br></br>
          2. Avoid dead ends to reach Spongebob's pineapple. <br></br>
          3. Collect Krabby Patties to gain more points. <br></br>
          4. Goodluck Sailor! <br></br>
        </p>

        <p>
          Press "Start Adventure" to begin.
        </p>
        
          <div className="Navigation">
          <ul>

            <li>
              <Link to="/Level1" className="Button">
                Start Adventure
              </Link>
            </li>

            <li>
              <Link to="/" className="Button">
                Back to Homepage
              </Link>
            </li>

          </ul>
          </div>
        </div>
      </div>
  );
};

export default Instructions;