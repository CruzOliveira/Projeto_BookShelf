import React from 'react';
import Header from './components/Header';
import Pesquisa from './components/Pesquisa/index.js';
import Lancamentos from './components/Lancamentos/index.js';
import styled from 'styled-components';

const AppConteiner = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`;

function App() {
  return (
    <AppConteiner>
      <Header />
      <Pesquisa />
      <Lancamentos />
    </AppConteiner>
  );
}

export default App;
