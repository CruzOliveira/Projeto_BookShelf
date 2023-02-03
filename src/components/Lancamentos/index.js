import React from 'react';
import styled from 'styled-components';
import { livros } from '../Pesquisa/dadosPesquisa';
import { Titulo } from '../Titulo/index.js';
import Card from '../Card/index.js';
import Naldo from '../../img/Naldo.png';

const LancamentoConteiner = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #ebecee;
  overflow-x: hidden;
  height: 50vh;
`;
const NovosLivrosConteiner = styled.div`
  margin-top: 30px;
  display: flex;
  overflow-x: hidden;
  justify-content: center;
`;
const Seletor = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80vw;
  overflow-x: scroll;

  img {
    width: 209px;
    height: 282px;
    margin: 20px 20px;
    cursor: pointer;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    &:hover {
      border: 2px solid white;
    }
  }
`;

function Lancamentos() {
  return (
    <LancamentoConteiner>
      <Titulo cor={'#EB9B00'} tamanhoFonte={'36px'}>
        ÚLTIMOS LANÇAMENTOS
      </Titulo>
      <NovosLivrosConteiner>
        <Seletor>
          {livros.map((livro) => (
            <img src={livro.src} />
          ))}
        </Seletor>
      </NovosLivrosConteiner>
    </LancamentoConteiner>
  );

  return (
    <LancamentoConteiner>
      <Titulo cor={'#EB9B00'} tamanhoFonte={'36px'}>
        ÚLTIMOS LANÇAMENTOS
      </Titulo>
      <NovosLivrosConteiner>
        <Seletor>
          {livros.map((livro) => (
            <img src={livro.src} />
          ))}
        </Seletor>
      </NovosLivrosConteiner>
      <Card
        titulo="Talvez você se interesse por"
        subtitulo="Naldo Benny - Cada vez eu quero mais"
        descricao="Aos sete anos de idade, Ronaldo Jorge Silva, Naldo, já mostrava que tinha dom para a música nas apresentações que fazia em uma igreja perto de sua casa, levado pela mãe. Em 1996, ao lado do irmão Lula, passou a cantar em alguns barese eventos. Gravaram o primeiro álbum pela EMI Music (atual Universal Music) em 1999, que acabou não sendo lançado por problemas internos da gravadora. Apenas em 2001 conseguiram lançar seu primeiro single promocional ? Chinelada."
        img={Naldo}
      />
    </LancamentoConteiner>
  );
}

export default Lancamentos;
