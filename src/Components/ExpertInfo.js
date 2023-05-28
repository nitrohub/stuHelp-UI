import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ModalCalender from './ModalCalender';

class ExpertInfo extends Component{

    constructor(props){
        super(props);
        this.state = {
            showCalender : false
        }
        this.showCalender = this.showCalender.bind(this);
        this.hideCalender = this.hideCalender.bind(this);
    }

    showCalender(){
        this.setState({
            showCalender : true
        })
    }

    hideCalender(){
        this.setState({
            showCalender : false
        })
    }

    render(){
        return(
            <>
                <div className="Expert" >
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={4}>
                            <img src={this.props.image} alt="Expert Image" />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={8}>
                            <h3>{this.props.name}</h3>
                            <p>Lorem Adipisicing fugiat commodo velit fugiat dolor ipsum eiusmod esse nisi ullamco. Quis labore ut occaecat in enim dolor sunt ea incididunt ea sunt aliqua mollit dolore. Officia pariatur pariatur quis ad nulla incididunt id amet commodo elit ipsum reprehenderit est tempor. Labore reprehenderit amet sunt ut labore do duis.</p>
                            <Row>
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <Button variant='success' onClick={this.showCalender}>One-to-One</Button>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <Button variant='primary' onClick={this.showCalender}>Group-call</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    {this.state.showCalender? <ModalCalender show={this.state.showCalender} hide={this.hideCalender} />:''}
                </Container>
                </div>
            </>
        )
    }
}

export default ExpertInfo;