import React from 'react';
import Incubator from './Incubator';
import Header from './Header';
import glamorous from 'glamorous';
import axios from 'axios';

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
      trend: []
    };
  }

  authorize() {
    axios.post('http://localhost:3000/authorize', {'Content-Type': 'application/X-www-form-urlencoded'});
  }

  componentWillMount() {
    this.authorize();
  }

  componentDidMount() {
    axios.post('http://localhost:3000/top')
      .then(res => {
        let trends = [];
        const trendArray = Object.values(res.data.data[0].trends);
        trendArray.map((trend) => {
          trends.push(trend.name);
        });
        this.setState({trend: trends});
        console.log('state', this.state.trend);
      });
  }

  render() {
    return (
      <Container>
        <Incubator/>
        <Header/>
      </Container>
    );
  }
}

export default App;
