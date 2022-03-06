import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem';

class Courses extends Component{
    render(){
        return(
            <>
            <section>
                <Container>
                    <Row>
                        <Col>
                            <h2 style={{textAlign:'center',marginBottom:'60px',marginTop:'-50px'}} >Courses</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} sm={12} xs={12} md={6}>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>Course Name</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Cras justo odio</ListGroupItem>
                                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                         </Card>

                        </Col>
                        <Col lg={4} sm={12} xs={12} md={6}>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>Course Name</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Cras justo odio</ListGroupItem>
                                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                         </Card>

                        </Col>
                        <Col lg={4} sm={12} xs={12} md={6}>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>Course Name</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Cras justo odio</ListGroupItem>
                                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                         </Card>
                         <div style={{textAlign:'right',marginTop:'20px', marginRight:'70px'}}>
                            <a href="/">...See More</a>
                         </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            </>
        );
    }
}

export default Courses;