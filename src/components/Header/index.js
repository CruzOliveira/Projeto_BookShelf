import React from 'react';
import Logo from '../Logo/index';
import Opcoes from '../OpcoesHeader/index';
import Icones from '../IconesHeader/index';
import styled from 'styled-components';

const HeaderConteiner = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;
function Header() {
  return (
    <HeaderConteiner>
      <Logo />
      <Opcoes />
      <Icones />
    </HeaderConteiner>
  );
}

export default Header;
