import React from 'react';
import perfil from '../../img/perfil.svg';
import sacola from '../../img/sacola.svg';
import styled from 'styled-components';
function Icones() {
  const Icones = styled.ul`
    display: flex;
    align-items: center;
  `;

  const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
  `;

  const Icon = styled.img`
    cursor: pointer;
  `;
  const iconOpcoes = [sacola, perfil];

  return (
    <Icones>
      {iconOpcoes.map((text) => (
        <Icone>
          <Icon src={text} />
        </Icone>
      ))}
    </Icones>
  );
}

export default Icones;
