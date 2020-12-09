import React from 'react';
import Menu from '../Menu/Menu';

// Fn comp with Named Fn
function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#">Hexa Flix App!</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <Menu />
        </div>
      </nav>
    </header>
  )
}

export default Header;
