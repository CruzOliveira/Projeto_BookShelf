import React from 'react';
import styled from 'styled-components';
import logo from '../../img/logo.svg';

const Logo = styled.div`
  display: flex;
`;
const LogoImg = styled.img`
  margin-right: 6px;
`;
const Titulo = styled.p`
  font-weight: 600;
  font-size: 30px;
  span {
    font-weight: 400;
  }
`;

function LogoHeader() {
  return (
    <Logo>
      <LogoImg src={logo} alt="Logo" />
      <Titulo>BookShelf</Titulo>
    </Logo>
  );
}
export default LogoHeader;
