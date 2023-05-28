import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CourseCard from './CourseCard';

class CoursePack extends Component{
    render(){
        return(
            <>
                <Container>
                    <Row>
                        <Col>
                            <h2 style={{textAlign:'center'}}>Standard</h2>
                        </Col>
                    </Row>    
                    <Row>
                        <Col xs={12} sm={12} lg={4} md={4}>
                            <CourseCard />
                        </Col>
                        <Col xs={12} sm={12} lg={4} md={4}>
                            <CourseCard />
                        </Col>
                        <Col xs={12} sm={12} lg={4} md={4}>
                            <CourseCard />
                        </Col>
                        <Col xs={12} sm={12} lg={4} md={4}>
                            <CourseCard />
                        </Col>
                        <Col xs={12} sm={12} lg={4} md={4}>
                            <CourseCard />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default CoursePack;