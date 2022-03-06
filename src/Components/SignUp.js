import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import ThemeBack from './ThemeBack';

class Signup extends Component{

  constructor(props){
    super(props);
    this.state={
      isModalOpen : true
    }  
    this.toggleModal = this.toggleModal.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleClose(){
    this.setState({
      isModalOpen:false
    })
    window.location="/";
  }


  toggleModal(){
    this.setState({
      isModalOpen:!this.state.isModalOpen
    });
  }

  handleSignup(){
    console.log("Handle Signup");
  }




  render(){
    return(
      <>
      <ThemeBack />
     <Modal show={this.state.isModalOpen}>
        <Modal.Header closeButton onClick={this.handleClose}>
          <Modal.Title>Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
          controlId="floatingInput"
          label="Phone Number"
          className="mb-3"
        >
          <Form.Control type="tel" placeholder="XXXXXXXXXX" />
        </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" 
          onClick={this.handleClose}
          >
            Close
          </Button>
          <Button variant="primary"
            onClick={this.handleSignup}
          >
            Get OTP
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }
}

export default Signup