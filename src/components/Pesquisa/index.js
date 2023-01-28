import React from 'react';
import styled from 'styled-components';

function Pesquisa() {
  const Input = styled.input`
  *
  `;
  return (
    <section>
      <h2>Já sabe por onde começar?</h2>
      <h3>Encontre seu livro em nossa estante.</h3>
      <input placeholder="Escreva sua proxima leitura" />
    </section>
  );
}

export default Pesquisa;
