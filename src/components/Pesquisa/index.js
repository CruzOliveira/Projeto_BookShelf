import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../Input/index';
import { livros } from './dadosPesquisa';

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0;
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
const ResultadoConteiner = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 110vh;
  align-items: center;
  width: 60vw;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  width: 248.4px;

  p {
    width: 200px;
    text-shadow: 1px 1px 2px black;
  }
  img {
    width: 100.6px;
    height: 134.93px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
  &:hover {
    border: 1px solid white;
  }
`;

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={(evento) => {
          const textoDigitado = evento.target.value;
          const resultadoPesquisa = livros.filter((livro) =>
            livro.nome
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .includes(
                textoDigitado
                  .toLowerCase()
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, ''),
              ),
          );
          setLivrosPesquisados(resultadoPesquisa);
        }}
      />
      <ResultadoConteiner>
        {livrosPesquisados.map((livro) => (
          <Resultado>
            <img src={livro.src} />
            <p>{livro.nome}</p>
          </Resultado>
        ))}
      </ResultadoConteiner>
    </PesquisaContainer>
  );
}

export default Pesquisa;
