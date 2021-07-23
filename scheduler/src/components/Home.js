import React, { Component } from 'react';
import peoplePlanning from '..//animatedImages/images/peoplePlanning.jpeg';
import CardAnimationComponent from './CardAnimationComponent';
import AnimatingItems from './animatedItems';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <img
          src={peoplePlanning}
          alt='People planning with clocks and calendars animation'
          className='home-img img-fluid max-width: 1000px height: auto'
        />

        <CardAnimationComponent />
        <AnimatingItems />
      </React.Fragment>
    );
  }
}

export default Home;
