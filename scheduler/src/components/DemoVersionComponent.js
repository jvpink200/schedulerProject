import React, { Component } from 'react';
import { Row, Col , Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

class Version extends Component {
    render() {
        return (
            <section className="pb-5 scheduler-version text-center">
                <h1 className="pt-3">Scheduler</h1>
                <p className="pt-2 pr-3 pl-3">
                    Do you want to test and see the benefits of this scheduler before purchasing it? You can give the demo version a try. <br/> It contains enough basic features for you to get a feel of the design and also to test the quality of the service.
                </p>
                <Row className="container mx-auto">
                    <Col>
                        <Card className="card-version-img mx-auto mb-4">
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
                    <Col>
                        <Card className="card-version-img mx-auto">
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