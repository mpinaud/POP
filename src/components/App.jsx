import React from 'react';
import Incubator from './Incubator';
import Header from './Header';
import glamorous from 'glamorous';
import { reset } from 'glamor/reset';

const Container = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  height: '100vh',
  border: 'solid 1px',
});

function App() {

  return (
    <Container>
      <Incubator />
      <Header />
    </Container>
  );
}

export default App;
