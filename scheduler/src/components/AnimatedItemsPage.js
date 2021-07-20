import React, { Component } from 'react';
import AnimatingItems from '../components/animatedItems';

class AnimatedItemsPage extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className='site-pages'>Animated Items Page</h1>
        <AnimatingItems />
      </React.Fragment>
    );
  }
}
export default AnimatedItemsPage;
