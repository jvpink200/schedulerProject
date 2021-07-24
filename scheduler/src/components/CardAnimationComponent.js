import React, { Component, Row, Col, Container } from 'react';
import { Card, CardImg } from 'reactstrap';

class CardAnimation extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          className='cardAnimationDiv'
          style={{
            backgroundColor: '#2285AB',
            width: '100%',
            height: '500px',
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
