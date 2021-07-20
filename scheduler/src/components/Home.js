import React, { Component } from 'react';
import bluesky from '..//animatedImages/images/bluesky.jpg';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <img
          src={bluesky}
          alt='blue sky and clouds'
          className='home-img img-fluid max-width: 100% height: auto'
        />
      </React.Fragment>
    );
  }
}
export default Home;
