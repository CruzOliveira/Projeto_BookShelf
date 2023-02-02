import React from 'react';
import styled from 'styled-components';
import { livros } from '../Pesquisa/dadosPesquisa';

const LancamentoConteiner = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #ebecee;
  padding-bottom: 20px;
`;
const Titulo = styled.h2`
  width: 100%;
  padding: 30px 0;
  background-color: #fff;
  color: #eb9b00;
  font-size: 36px;
  text-align: center;
  margin: 0;
`;
const NovosLivrosConteiner = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  cursor: pointer;
  overflow-x: hidden;
`;
const Seletor = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  img {
    width: 209px;
    height: 282px;
    padding: 0 20px;
  }
`;

function Lancamentos() {
  return (
    <LancamentoConteiner>
      <Titulo>ÚLTIMOS LANÇAMENTOS</Titulo>
      <NovosLivrosConteiner>
        <Seletor>
          {livros.map((livro) => (
            <img src={livro.src} />
          ))}
        </Seletor>
      </NovosLivrosConteiner>
    </LancamentoConteiner>
  );
}

export default Lancamentos;
