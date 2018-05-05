import React from 'react';
import Incubator from './Incubator';
import Header from './Header';
import glamorous from 'glamorous';
import Trends from './Trends';
import Twitter from './Twitter';

const Container = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  height: '100vh',
  background: 'radial-gradient(white, lightgrey, grey)',
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <Container>
        <Trends/>
        <Twitter/>
        <Incubator/>
        <Header/>
      </Container>
    );
  }
}

export default App;
