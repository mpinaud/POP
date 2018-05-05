import React from 'react';
import axios from 'axios';

class Twitter extends React.Component {
  constructor() {
    super();
    this.state = {
      header: [],
      trends: []
    };
    this.handleFetchData = this.handleFetchData.bind(this);
    console.log('this.state.header', this.state.header);
  }

  authorize() {
    axios.post('http://localhost:3000/authorize', {'Content-Type': 'application/X-www-form-urlencoded'})
      .then(res => {
        console.log('res', res);
        const authData = res.data.data;
        console.log('authData', authData);
        this.setState(this.state.header.push(authData));
      });
  }

  componentWillMount() {
    this.authorize();
  }

  handleFetchData() {
    let bearerheader = 'Bearer ' + this.state.header;
    console.log('bearerheader', bearerheader);

    fetch('https://api.twitter.com/1.1/trends/place.json?id=1', {headers: {Authorization: bearerheader}})
      .then(results => {
        return results.json();
      }).then(data => {
        let trends = data.results.map((trends) => {
          return(
            <div key={trends.results}>
              <h1>{trends.name}</h1>
            </div>
          );
        });
        this.setState({trends: trends});
      });
    console.log('state', this.state.trends);
  }

  render() {
    return(
      <button onClick={this.handleFetchData}>TWITTER</button>
    );
  }
}

export default Twitter;
