import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import ThemeBack from './ThemeBack';
import Redirect from 'react-router-dom';



class Login extends Component{

  constructor(props){
    super(props);
    this.state={
      isModalOpen : true
    }  
    this.toggleModal = this.toggleModal.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
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

  handleLogin(){
    console.log("Handle Login");
  }




  render(){
    return(
      <>
     <ThemeBack />
     <Modal className="Modal" show={this.state.isModalOpen}>
        <Modal.Header closeButton onClick={this.handleClose}>
          <Modal.Title>Login</Modal.Title>
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
            onClick={this.handleLogin}
          >
            Get OTP
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }
}

export default Login