import React, { Component } from 'react';
import { Row, Col , Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

class Version extends Component {
    render() {
        return (
            <section className="pb-5 scheduler-version">
                <h1 className="ml-5 pt-3">Scheduler</h1>
                <p className="ml-5 pt-2">
                    Do you want to test and see the benefits of this scheduler before purchasing it? You can give the demo version a try. <br/> It contains enough basic features for you to get a feel of the design and also to test the quality of the service. Get it free on GitHub!
                </p>
                <Row className="container text-center">
                    <Col sm="4">
                        <Card className="card-version-img ml-3 ">
                            <CardImg
                                src='../assets/images/orange-floral.jpg'
                            />
                            <CardImgOverlay>
                                <CardTitle>Basic</CardTitle>
                                <CardText tag="h4">
                                    <small>
                                        2 Features
                                        <br/>
                                        5 Components
                                        <br/>
                                        Support
                                    </small>
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                    </Col>
                    <Col sm="4"></Col>
                    <Col sm="4">
                        <Card className="card-version-img mt-2 ml-3">
                            <CardImg
                                src='../assets/images/orange-floral.jpg'
                            />
                            <CardImgOverlay>
                                <CardTitle>Pro</CardTitle>
                                <CardText tag="h4">
                                    <small>
                                        5 Features
                                        <br/>
                                        13 Components
                                        <br/>
                                        Support
                                    </small>
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </section>
        );
    }
}

export default Version;