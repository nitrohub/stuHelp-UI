import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StudentImage from '../assets/mainImage.png';
import Button from 'react-bootstrap/Button';

class Intro extends Component{
    render(){
        return(
            <>
                 <section>
                    <div className="showcase">
                    <Container>
                        <Row>
                        <Col sm={12} md={6} lg={4} xs={12}><img className="sect1" src={StudentImage} alt="student Icon"/></Col>
                        <Col sm={12} md={6} lg={8} xs={12}>
                            <p>
                            LoremEt culpa sint quis id nostrud est aliquip dolor sit aliqua et laborum ipsum. Officia nostrud Lorem sunt ad pariatur sint in do voluptate eu velit. Excepteur eiusmod et dolor eu incididunt veniam fugiat ipsum anim dolor mollit exercitation consequat id. Elit nisi dolor reprehenderit nulla voluptate elit veniam aliquip eiusmod consectetur magna duis. Et deserunt labore duis et laborum est mollit ad fugiat excepteur eu. Dolor est qui labore velit sint elit elit esse id dolore elit excepteur magna.
                            <Button className="GetStarted" variant="success">Get Started</Button>
                            </p>
                        </Col>
                        </Row>
                    </Container>
                    </div>
                </section> 
            </>
        )
    }
}

export default Intro;