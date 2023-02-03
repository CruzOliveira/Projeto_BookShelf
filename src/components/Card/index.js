import React from 'react';
import { Titulo } from '../Titulo';
import styled from 'styled-components';

const CardConteiner = styled.div`
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  margin: auto;
  max-width: 700px;
  padding: 25px 20px;
  justify-content: space-around;
  width: 100%;
`;

const Botao = styled.button`
  background-color: #eb9b00;
  color: #fff;
  padding: 10px 0px;
  font-size: 16px;
  border: none;
  font-weight: 900;
  display: block;
  text-align: center;
  width: 150px;
  &:hover {
    cursor: pointer;
  }
`;

const Descricao = styled.p`
  max-width: 300px;
`;

const Subtitulo = styled.h4`
  color: #002f52;
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0;
`;
const ImgLivro = styled.img`
  width: 150px;
  margin-top: 50px;
`;

function Card({ titulo, subtitulo, descricao, img }) {
  return (
    <CardConteiner>
      <div>
        <Titulo>{titulo}</Titulo>
        <Subtitulo>{subtitulo}</Subtitulo>
        <Descricao>{descricao}</Descricao>
      </div>
      <div>
        <ImgLivro src={img} />
        <Botao>Saiba mais</Botao>
      </div>
    </CardConteiner>
  );
}

export default Card;
