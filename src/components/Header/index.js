import React from 'react';
import Logo from '../Logo/index';
import Opcoes from '../OpcoesHeader/index';
import Icones from '../IconesHeader/index';
import './style.css';
function Header() {
  return (
    <header className="App-header">
      <Logo />
      <Opcoes />
      <Icones />
    </header>
  );
}

export default Header;
