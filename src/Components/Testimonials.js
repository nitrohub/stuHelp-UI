import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Testimonials extends Component{
    render(){
        return(
            <>
            <Container>
                <Row>
                    <h2 style={{textAlign:'center'}}>Testimonials</h2>
                </Row>
                <Row>
                    <Col xs={12} sm={12} lg={4}><img src="/" alt="Image" style={{borderRadius:'50%'}}/></Col>
                    <Col xs={12} sm={12} lg={8}><p>Do magna sit labore excepteur anim id voluptate cillum. Anim commodo est et ut ipsum ut cillum id irure adipisicing ex. Ea sit nisi ipsum incididunt aliquip reprehenderit velit labore reprehenderit.</p></Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} lg={8}><p>Do magna sit labore excepteur anim id voluptate cillum. Anim commodo est et ut ipsum ut cillum id irure adipisicing ex. Ea sit nisi ipsum incididunt aliquip reprehenderit velit labore reprehenderit.</p></Col>
                    <Col xs={12} sm={12} lg={4}><img src="/" alt="Image" style={{borderRadius:'50%'}}/></Col>
                </Row>
            </Container>
            </>
        )
    }
}

export default Testimonials;