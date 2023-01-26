import React from 'react';
import logo from '../../img/logo.svg';
import './style.css';

function Logo() {
  return (
    <div className="Logo">
      <img src={logo} alt="Logo" className="logo-img" />
      <p>
        <strong>Alura</strong>
        Books
      </p>
    </div>
  );
}
export default Logo;