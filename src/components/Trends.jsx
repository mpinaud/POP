import React from 'react';

class Trends extends React.Component{
  constructor() {
    super();
    this.state = {
    };
  }
  //Put token in header / local storage to fetch next api request//

  componentDidMount() {
    // fetch('https://api.twitter.com/1.1/trends/place.json?id=1', {headers: {Authorization: bearerheader})
    //   .then(results => {
    //     return results.json();
    //   }).then(data => {
    //     let trends = data.results.map((trends) => {
    //       return(
    //         <div key={trends.results}>
    //           <h1>{trends.name}</h1>
    //         </div>
    //       );
    //     });
    //     this.setState({trends: trends});
    //   });
    // console.log('state', this.state.trends);
  }

  render() {
    return(
      <p>Trends</p>
    );
  }
}

export default Trends;
