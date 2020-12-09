import React from 'react';
import Menu from '../Menu/Menu';

// Fn Comp with Anonymous Fn
const Footer = function(){
  return(
    <footer>
      <hr />
      <Menu />
      <p>Copyright 2020 | Arun</p>
    </footer>
  )
}

export default Footer;