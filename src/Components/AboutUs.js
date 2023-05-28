import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import help from '../assets/helping2.png';
import circle from '../assets/circle.png';

class AboutUs extends Component{
    render(){
        return(
            <>
                <section>
                    <Container>
                        <Row>
                            <Col><h2 style={{textAlign:'center'}}>About US</h2></Col>
                        </Row>
                        <Row>
                            <Col sm={8} md={8} lg={8} className="AboutUs">
                                <p>
                                    Enim culpa est nostrud consequat cupidatat exercitation cupidatat id aute exercitation. Quis aute ex irure Lorem nostrud minim sunt enim adipisicing cupidatat adipisicing elit. Proident duis occaecat reprehenderit veniam adipisicing culpa dolore tempor nostrud aliqua pariatur. Amet et incididunt Lorem in occaecat dolor pariatur in sunt adipisicing adipisicing.
                                </p>
                            </Col>
                            <Col sm={4} md={4} lg={4} ><img src={help} id="aboutUsImg1" alt="aboutUs"/></Col>
                        </Row>
                        <Row>
                        <Col sm={4} md={4} lg={4} ><img src={circle} id="aboutUsImg2" alt="aboutUs"/></Col>
                        <Col sm={8} md={8} lg={8} className="AboutUs">
                                <p>
                                    Enim culpa est nostrud consequat cupidatat exercitation cupidatat id aute exercitation. Quis aute ex irure Lorem nostrud minim sunt enim adipisicing cupidatat adipisicing elit. Proident duis occaecat reprehenderit veniam adipisicing culpa dolore tempor nostrud aliqua pariatur. Amet et incididunt Lorem in occaecat dolor pariatur in sunt adipisicing adipisicing.
                                </p>
                        </Col>
                        </Row>
                    </Container>
                </section>
            </>
        )
    }
}

export default AboutUs;