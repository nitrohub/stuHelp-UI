import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import one from '../assets/3.png';
import two from '../assets/info2.png';
import three from '../assets/1.png';
import Button from 'react-bootstrap/Button';

class Appointment extends Component{

    constructor(props){
        super(props);
        this.state={
            
        }
    }

    render(){
        return(
            <>
            <section>
                <div className="Appointment">
                    <Container className="carousalPeople">
                        <Row>
                            <Col>
                            <h2 style={{textAlign:'center', marginTop:'20px',marginBottom:'60px',color:'#fff'}}>
                                Get Free Counselling sessions
                            </h2>
                            </Col>
                        </Row>
                        <Row>

                        <Carousel className="carousalItems"
                        // activeIndex={index} onSelect={handleSelect}
                        >
                            <Carousel.Item>
                                <img
                                className="d-block w-50 carouImage"
                                src={one}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                <Button variant='success'>Book Appointment</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-50 carouImage"
                                src={two}
                                alt="Second slide"
                                />

                                <Carousel.Caption >
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <Button variant='success'>Book Appointment</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-50 carouImage"
                                src={three}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                                <Button variant='success'>Book Appointment</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            </Carousel>

                        </Row>
                    </Container>
                </div>
            </section>
            </>
        );
    }
}

export default Appointment;