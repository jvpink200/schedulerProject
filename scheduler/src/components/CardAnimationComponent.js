import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';

class CardAnimation extends Component {
    render() {
        return(
            <React.Fragment>
                
                <h1 className="text-center top-page text-white">
                    Scheduler Project
                </h1>
                
                <div
                    style={{
                        backgroundColor: '#031425',
                        width: '100%',
                        height: '500px',
                        margin: '0'
                    }}
                    />

                <div className="page-body">
                    <div className="container">

                    <Card className="card card1">
                        <CardImg variant="top" src="../assets/images/calendar.jpg" />
                    </Card>

                        <Card className="card card2">
                            <CardImg variant="top" src="../assets/images/tableclock.jpg" />
                        </Card>

                        <Card className="card card3">
                            <CardImg variant="top" src="../assets/images/browncalendar.jpg" />
                        </Card>

                        <Card className="card card4">
                            <CardImg variant="top" src="../assets/images/piccollage.jpg" />
                        </Card>
                        </div>
                </div>
            </React.Fragment>
        );
    }
}

export default CardAnimation;