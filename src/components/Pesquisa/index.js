import React from 'react';
import styled from 'styled-components';
import Input from '../Input/index';

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #992f52, 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

function Pesquisa() {
  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input placeholder="Escreva sua proxima leitura" />
    </PesquisaContainer>
  );
}

export default Pesquisa;
