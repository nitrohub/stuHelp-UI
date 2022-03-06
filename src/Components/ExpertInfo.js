import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class ExpertInfo extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <div className="Expert" >
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={4}>
                            <img src="/" alt="Expert Image" />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={8}>
                            <h3>Name</h3>
                            <p>Lorem Adipisicing fugiat commodo velit fugiat dolor ipsum eiusmod esse nisi ullamco. Quis labore ut occaecat in enim dolor sunt ea incididunt ea sunt aliqua mollit dolore. Officia pariatur pariatur quis ad nulla incididunt id amet commodo elit ipsum reprehenderit est tempor. Labore reprehenderit amet sunt ut labore do duis.</p>
                            <Row>
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <Button variant='success' onClick={this.props.showCalender}>One-to-One</Button>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <Button variant='primary' onClick={this.props.showCalender}>Group-call</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                </div>
            </>
        )
    }
}

export default ExpertInfo;