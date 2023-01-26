import React from 'react';
import './style.css';
import perfil from '../../img/perfil.svg';
import sacola from '../../img/sacola.svg';
function Icones() {
  const iconOpcoes = [sacola, perfil];
  return (
    <ul className="icones">
      {iconOpcoes.map((text) => (
        <li className="icone">
          <img className="icon" src={text} />
        </li>
      ))}
    </ul>
  );
}

export default Icones;
