// React Code
import React from 'react';

import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <header className="login-header">
        <h1 className='hh'>EXPLORE THE CRICKETING WORLD WITH SPORT LEDGER</h1>
      </header>

      <section className="login-banner">
        {/* Your existing banner content */}
      </section>

      <nav className="login-main-nav">
        {/* Your existing navigation menu */}
      </nav>

      <main className="login-main">
        <article className="login-article">
          {/* Your existing article content */}
        </article>

        <form className="login-form">
          <h2 className='lg'>Login</h2>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Login</button>
        </form>

        <ul className="login-images">
          {/* Your existing image content */}
        </ul>
      </main>

      <footer className="login-footer">
        {/* Your existing footer content */}
      </footer>
    </div>
  );
};

export default LoginPage;
