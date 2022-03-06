import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';


class CourseCard extends Component{

    render(){
        return(
            <>
                <div>
                    <Card style={{ width: '18rem',marginLeft:'3vw'}}>
                        <Card.Img variant="Top" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg" />
                        <Card.Body>
                            <Card.Title>Course Name</Card.Title>
                            <Card.Text>
                           Nostrud officia eu ullamco nisi consequat. Ea adipisicing quis sunt commodo dolor cillum mollit non pariatur eiusmod laboris non adipisicing minim. Lorem nisi dolore excepteur velit aute mollit. Mollit eu laboris amet nisi fugiat sunt eiusmod.
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
                </div>
            </>
        )
    }

}

export default CourseCard;