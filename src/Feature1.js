import React from 'react';

import './Feature1.css'; // Import your CSS file
import img2 from './img2.png'; // Import your image files
import img5 from './img5.png';
import img6 from './img6.jpeg';

const Feature1 = () => {
  return (
    <div className="feature1-page">
      <div className="heade">
        <h2>CRICKETING STATS AND RANKINGS </h2>
        <h3>Welcome to the County Cricket Stats and Rankings. Explore the latest player rankings and team statistics.</h3>
      </div>

       

      <div className="collage" id="collage">
        <div className="collage-item">Top Teams</div>
        <div className="collage-item">Batting Rankings</div>
        <div className="collage-item">Bowling Rankings</div>
        <div className="collage-item">All-Rounders</div>
      </div>

      <table className="rankings-table" id="rankings-table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Team</th>
            <th>Team Logo</th>
            <th>Player</th>
            <th>Ratings</th>
          </tr>
        </thead>
        <tbody>
          {/* Sample data for initial display */}
          <tr>
            <td>1</td>
            <td>Victory Vipers</td>
            <td><img src={img2} alt="Victory Vipers Logo" className="team-logo" /></td>
            <td>Player 1</td>
            <td>900</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Phoenix Knights</td>
            <td><img src={img5} alt="Phoenix Knights Logo" className="team-logo" /></td>
            <td>Player 2</td>
            <td>850</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Pinnacle Panthers</td>
            <td><img src={img6} alt="Pinnacle Panthers Logo" className="team-logo" /></td>
            <td>Player 3</td>
            <td>820</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Player 4</td>
            <td>800</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Player 5</td>
            <td>780</td>
          </tr>
          {/* Add more players for Team 2 as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Feature1;