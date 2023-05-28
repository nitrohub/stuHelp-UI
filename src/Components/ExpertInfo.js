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
                        <Col xs={12} sm={12} md={6} lg={4} >
                            <img src={this.props.image}  alt="Expert Image" style={{ height: '300px', width: '300px' }} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={8}>
                            <h3>{this.props.name}</h3>
                            <p>{this.props.bio}</p>
                            <Row>
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <Button variant='success' onClick={this.showCalender}>Book Meeting</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    {this.state.showCalender? <ModalCalender availability={this.props.availability} show={this.state.showCalender} hide={this.hideCalender} />:''}
                </Container>
                </div>
            </>
        )
    }
}

export default ExpertInfo;