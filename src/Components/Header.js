import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends Component{

  constructor(props){
    super(props);
    this.state={
      navClass : "nav-col"
    }
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const boxShadow = window.scrollY < 10 ? "nav-col" : "nav-col-scroll";
      this.setState({ navClass: boxShadow});
    });
  }


  render(){
    return (
     <>
        <Navbar bg="light" expand="lg" className={this.state.navClass}>
        <Container>
          <Navbar.Brand className="brand" href="/"><b>StuHelp</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/courses">Courses</Nav.Link>
              <Nav.Link href="/counselling">Counselling</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Signup</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
     </>
    );
  }
}

export default Header