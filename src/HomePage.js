// React Code
import React from 'react';
import { useNavigate } from 'react-router-dom';

import './HomePage.css';

const HomePage = () => {
  let nav = useNavigate();
  return (
    <>
      <header className="header">
        <h1>EXPLORE THE CRICKETING WORLD WITH SPORT LEDGER</h1>
        <div className="login-button">
          <button onClick={() => { nav("/login") }}>Login</button>
        </div>
        <div className="signup-button">
          <button onClick={() => { nav("/signup") }}>Sign Up</button>
        </div>
      </header>

      <section className="banner">
        <img
          src="https://media.licdn.com/dms/image/D4D12AQFPNBNYEoGJkA/article-cover_image-shrink_720_1280/0/1698823765223?e=2147483647&v=beta&t=dNjQGnzaj3F5Rzs28BrWtS1K8F59tG4_SWZNo7VIXEg" alt="Cricket Background"

        />
        <div className="Welcome">
          <h2>
            Welcome to <span>Sport Ledger</span>
          </h2>
          <p>Your gateway to a digital cricketing era!</p>
        </div>
      </section>

      <nav className="main-nav">
        <ul>
          <li>
            <a href="/join.html" className="join">
              Join Our Vibrant Community
            </a>
          </li>
          <li>
            <a onClick={() => { nav("/docverify") }}>
              Record Your Cricketing Journey
            </a>
          </li>
          <li>
            <a href="/token.html" className="Tokens">
              Earn Tokens for Exciting Rewards
            </a>
          </li>
          <li>
            <a onClick={() => { nav("/stats") }}>Check Your Cricketing Stats and Rankings</a>
            
          </li>
        </ul>
      </nav>

      <main>
        <article className="main-article">
          <h2>DISCOVER THE CRICKET ELITE</h2>
          <p>
            Welcome to Sport Ledger, your vibrant online cricketing community!
            Immerse yourself in a world of cricketing insights and innovations.
            Participate, play, earn, and build your skills to the fullest.
            Connect with like-minded individuals and embark on a journey of
            inspiration. Join us as we redefine the digital experience in
            cricket!
          </p>
        </article>

        <ul className="images">
          <li>
            <img
              src="https://thesportsledger.com/8-20-2020-11-50-31-PM-9726921.jpg" alt="Sports"

            />
          </li>
        </ul>
      </main>

      <footer className="footer">
        <p>
          &copy; 2024 Sport Ledger. All rights reserved. | Connect with us on
          social media:{' '}
          <a
            href="https://twitter.com/sportledger"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          ,{' '}
          <a
            href="https://www.facebook.com/sportledger"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          ,{' '}
          <a
            href="https://www.instagram.com/sportledger/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </p>
      </footer>
    </>
  );
};

export default HomePage;
