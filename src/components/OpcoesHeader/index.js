import React from 'react';
import './style.css';

function Opcoes() {
  const textoOpcoes = ['Categorias', 'Minha Estante', 'Favoritos'];

  return (
    <ul className="opcoes">
      {textoOpcoes.map((text) => (
        <li className="opcao">
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
}

export default Opcoes;
