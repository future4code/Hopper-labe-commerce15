import React from 'react';
import Produtos from './components/Produtos'
import styled from 'styled-components';

const Principal = styled.div`
  text-align: center;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

class App extends React.Component {
  render() {

    return (
      <Principal>
        <h1>LabeCommerce</h1>
        
        <Produtos  />   

      </Principal>
    );
  }
}

export default App;
