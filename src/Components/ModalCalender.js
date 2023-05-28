//Problem 
// --> Showing the available Dates for the Professor 
//   --> Getting the Dates from the Database showcasing the available dates on the Calender
// --> Showing the available Timelines for the Available Dates
// --> Managing the One - One Counselling and the Group Counselling
// --> Updating the Availability of the Professor according to the Booking Done on the Website 
// --> One-One --> Time slot will be Completely Booked
// --> Group --> Time Slot will be shown until member limit becomes full

import { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ModalCalender extends Component{

    constructor(props){
        super(props);
        this.state={
            show : props.show
        }
    }


render(){

    var today = new Date();
    var maxDate = new Date();
    var dd = today.getDate();
    var maxdd = today.getDate()+5;
    var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;
    maxDate =  yyyy + '-' + mm + '-' + maxdd;

    return(<>
        <Modal
        show={this.state.show}
         //we can pass the props over here
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
      <Modal.Header closeButton onClick={this.props.hide}>
        <Modal.Title id="contained-modal-title-vcenter">
          Select Date
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="Date" min={today} max={maxDate} />
                <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>
            <Row>
                <Col style={{marginBottom:'3px'}} xs={6} sm={6} md={12} lg={4}>
                    <Button variant="primary" type="button">
                        10 - 10.30
                    </Button>
                </Col>
                <Col style={{marginBottom:'3px'}} xs={6} sm={6} md={12} lg={4}>
                    <Button variant="primary" type="button">
                        10 - 10.30
                    </Button>
                </Col>
                <Col style={{marginBottom:'3px'}} xs={6} sm={6} md={12} lg={4}>
                    <Button variant="primary" type="button">
                        10 - 10.30
                    </Button>
                </Col>
                <Col style={{marginBottom:'3px'}} xs={6} sm={6} md={12} lg={4}>
                    <Button variant="primary" type="button">
                        10 - 10.30
                    </Button>
                </Col>
                <Col style={{marginBottom:'3px'}} xs={6} sm={6} md={12} lg={4}>
                    <Button variant="primary" type="button">
                        10 - 10.30
                    </Button>
                </Col>
            </Row>
        </Form>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.hide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>)
}

}

export default ModalCalender;