import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';

class CardAnimation extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="pt-4 pb-1 text-center text-white orange">
          <h2 className="gray-text">Impressive Collection of Features</h2>
          <p className="pt-2">Designed to work seamlessly together</p>
        </div>
        <div
          className='cardAnimationDiv'
          style={{
            backgroundColor: '#F48C1B',
            width: '100%',
            height: '400px',
            margin: '0',
          }}
        />
        <div className='page-body'>
          <div className='card-holder'>
            <Card className='card-anime'>
              <CardImg
                className='card-img-anime'
                variant='top'
                src='../assets/images/ladycalendar.jpg'
              />
            </Card>

            <Card className='card-anime'>
              <CardImg
                className='card-img-anime'
                variant='top'
                src='../assets/images/tableclock.jpg'
              />
            </Card>

            <Card className='card-anime'>
              <CardImg
                className='card-img-anime'
                variant='top'
                src='../assets/images/browncalendar.jpg'
              />
            </Card>

            <Card className='card-anime'>
              <CardImg
                className='card-img-anime'
                variant='top'
                src='../assets/images/piccollage.jpg'
              />
            </Card>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CardAnimation;
