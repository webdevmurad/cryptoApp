import React from 'react';
import {Carts} from './components'
import {Header} from './components'
import {SortBlock} from './components'
import Container from '@material-ui/core/Container'


import './styles/app.sass'


function App() {

  return (
    <div className="App">
      <Container>
        <Header/>
        <SortBlock/>
        <Carts/>
      </Container>
    </div>
  );
}

export default App;
