import React from 'react';
import { livros } from '../Pesquisa/dadosPesquisa';

function Lancamentos() {
  return (
    <section>
      <h2>ULTIMOS LANCAMENTOS</h2>
      {livros.map((livro) => (
        <img src={livro.src} />
      ))}
    </section>
  );
}

export default Lancamentos;
