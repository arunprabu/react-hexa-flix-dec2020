import React from 'react';
import Menu from '../Menu/Menu';


// Fn Comp with Anonymous Fn
const Footer = function(){

  // ideal place for your comp specific variables
  let year = 2020;
  const devName = 'Arun';

  return(
    <footer>
      <hr />
      <Menu />
      <p>Copyright {year} | {devName}</p>
    </footer>
  )
}

export default Footer;