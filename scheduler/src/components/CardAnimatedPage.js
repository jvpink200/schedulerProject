import React, { Component } from 'react';
import CardAnimationComponent from '../components/CardAnimationComponent';

class CardAnimatedPage extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className='site-pages'>Card Animation Page</h1>
        <CardAnimationComponent />
      </React.Fragment>
    );
  }
}
export default CardAnimatedPage;
