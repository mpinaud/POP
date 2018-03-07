import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Twitter extends React.Component{
  authorize() {
    axios.post('http://localhost:3000/authorize', {'Content-Type': 'application/X-www-form-urlencoded'})
    .then(res => {
      console.log(res);
    })
  }

  componentDidMount() {
  this.authorize();
  }

  render() {
    console.log('Twitter component works');
    return(
      <p>This is working</p>
    );
  }
}

Twitter.propTypes = {
};

export default Twitter;


// export class TwitterApiService {
//   tweetsdata;
//
//   constructor(private http: Http) { }
//
//   postToObtainABearerToken() {
//     var headers = new Headers();
//     headers.append('Content-Type', 'application/X-www-form-urlencoded');
//
//     return this.http.post(
//       'http://localhost:3000/authorize', { headers: headers }
//     );
//   }
//
//   getData() {
//     var headers = new Headers();
//     headers.append('Content-Type', 'application/X-www-form-urlencoded');
//
//     return this.http.post('http://localhost:3000/top', {headers: headers});
//   }
// }
