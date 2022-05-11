import React from 'react';
import Produtos from './components/Produtos'
import styled from 'styled-components';

const Principal = styled.div`
  text-align: center;
`;

class App extends React.Component {
  render() {

    return (
      <Principal>
        <h1>Produtos</h1>
        
        <Produtos  />   

      </Principal>
    );
  }
}

export default App;
