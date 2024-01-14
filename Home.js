import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
          <div className="MainContainer">
            
            <header className="Header">
              <h1>Spongebob In A Jam Adventure </h1>
            </header>

            <nav className="Navigation">
              <ul>

                <li>
                  <Link to="/InstructionPage" className="Buttons">
                    Instructions
                  </Link>
                </li>
    
                <li>
                  <Link to="/Level1" className="Buttons">
                    Start Game
                  </Link>
                </li>

                <li>
                  <Link to="/AboutUsPage" className="Buttons">
                    About Us
                  </Link>
                </li>
                
              </ul>
            </nav>
          </div>
  );
}

export default Home;