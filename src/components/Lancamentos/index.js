import React from "react";
import styled from "styled-components";
import { livros } from "../Pesquisa/dadosPesquisa";
import { Titulo } from "../Titulo/index.js";

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
            <Titulo cor={"#EB9B00"} tamanhoFonte={"36px"}>
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
}

export default Lancamentos;
