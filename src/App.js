import React from 'react';
import Produtos from './components/Produtos'
import styled from 'styled-components';



class App extends React.Component {
  render() {

    return (
      <div>
        <h1>Produtos</h1>
        
        <Produtos  />   

      </div>
    );
  }
}

export default App;
