import React from 'react';
import Header from './components/Header';
import styled from 'styled-components';

const AppConteiner = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
  font-family: Arial, Helvetica, sans-serif;
  li {
    list-style: none;
  }
`;

function App() {
  return (
    <AppConteiner>
      <Header />
    </AppConteiner>
  );
}

export default App;
