import React from 'react';

import './Signup.css'; // Make sure to import your CSS file

const Signup = () => {
  return (
    <>
    <div className="signup-page">
      <h1>EXPLORE THE CRICKETING WORLD WITH SPORT LEDGER </h1>
      <h2>SIGN UP</h2>
      <form className="signup-form">
        <p>
          <label htmlFor="username"> Create Username:</label>
          <input type="text" id="username" required />
          <br /><br />
          <label htmlFor="password"> Create Password:</label>
          <input type="password" id="password" required />
          <br /><br />
          <label htmlFor="confirmPassword"> Confirm Password:</label>
          <input type="password" id="confirmPassword" required />
          <br /><br />
          Age:
          <br /><br />
          <input type="radio" name="age" value="18-30" id="option1" />
          <label htmlFor="option1"> 18-30</label>
          <br /><br />
          <input type="radio" name="age" value="31-40" id="option2" />
          <label htmlFor="option2"> 31-40</label>
          <br /><br />
          <label htmlFor="playerType"> Player type:</label>
          <select name="playerType" id="playerType">
            <option value="1"> Batsman </option>
            <option value="2"> Bowler </option>
            <option value="3"> All Rounder </option>
          </select>
          <br /><br />
          <label htmlFor="playerExperience"> Experience:</label>
          <br />
          <textarea
            name="playerExperience"
            id="playerExperience"
            cols="70"
            rows="10"
            placeholder="about you..."
            required
          ></textarea>
          <br /><br />
          <label htmlFor="certificates"> Certificates:</label>
          <br />
          <textarea
            name="certificates"
            id="certificates"
            cols="80"
            rows="30"
            placeholder="on-field performance..."
            required
          ></textarea>
        </p>

        <div className="end">
          <input type="submit" value="SUBMIT" />
        </div>
      </form>
      </div>
    </>
  );
};

export default Signup;