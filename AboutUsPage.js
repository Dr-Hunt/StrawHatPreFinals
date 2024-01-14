import React from 'react';
import '../Css/aboutus.css'; // Import the CSS file
import Dev1 from '../Dev1.jpg'; // Import the image
import Dev2 from '../Dev2.jpg';
import Dev3 from '../Dev3.jpg';
import Dev4 from '../Dev4.jpg';

const AboutUsPage = () => {
  return (
    <div className="MainContainer1">
      <h1> Spongebob In A Jam Adventure</h1>
      <h2> The Developers </h2>

      <div className="DevsContainer">
        <div className="DevPhoto">
          <img src={Dev1} alt="Developer" />
        </div>

        <div className="DevDetails">
          <h3> Developer 1 </h3>
          <h3> Cristian Tagumpay </h3>
          <p> UI Developer. Designer. Partial development of the program. </p>
        </div>

        <div className="DevPhoto">
          <img src={Dev2} alt="Developer" />
        </div>

        <div className="DevDetails">
          <h3> Developer 2 </h3>
          <h3> Aerica Mae Arandia </h3>
          <p> UI Developer. Designer. Partial development of the program. </p>
        </div>

      </div>

      <div className="DevsContainer">
        <div className="DevPhoto">
          <img src={Dev3} alt="Developer" />
        </div>

        <div className="DevDetails">
          <h3> Developer 3 </h3>
          <h3> Charm Venice Montero </h3>
          <p> UI Developer. Designer. Partial development of the program. </p>
        </div>

        <div className="DevPhoto">
          <img src={Dev4} alt="Developer" />
        </div>

        <div className="DevDetails">
          <h3> Developer 4 </h3>
          <h3> Arman Cantonjos </h3>
          <p> UI Developer. Designer. Partial development of the program. </p>
        </div>
      </div>

    </div>
  );
};

export default AboutUsPage;
