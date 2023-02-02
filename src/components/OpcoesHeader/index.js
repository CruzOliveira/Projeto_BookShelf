import React from 'react';
import styled from 'styled-components';

const Opcoes = styled.ul`
  display: flex;
`;
const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

function OpcoesHeader() {
  const textoOpcoes = ['Categorias', 'Minha Estante', 'Favoritos'];

  return (
    <Opcoes>
      {textoOpcoes.map((text) => (
        <Opcao>{text}</Opcao>
      ))}
    </Opcoes>
  );
}

export default OpcoesHeader;
