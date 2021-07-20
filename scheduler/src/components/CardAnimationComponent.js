import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';

class CardAnimation extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            backgroundColor: 'white',
            width: '25%',
            height: '1000px',
            margin: '0',
          }}
        />

        <div className='page-body'>
          <div className='card-holder'>
            <Card className='card'>
              <CardImg
                className='card-img'
                variant='top'
                src='../assets/images/ladycalendar.jpg'
              />
            </Card>

            <Card className='card'>
              <CardImg
                className='card-img'
                variant='top'
                src='../assets/images/tableclock.jpg'
              />
            </Card>

            <Card className='card'>
              <CardImg
                className='card-img'
                variant='top'
                src='../assets/images/browncalendar.jpg'
              />
            </Card>

            <Card className='card'>
              <CardImg
                className='card-img'
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
