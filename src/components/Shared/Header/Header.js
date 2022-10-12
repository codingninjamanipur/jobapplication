import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function header() {
  return (
<Navbar collapseOnSelect expand="xxl" bg="dark" variant="dark">
      <Container className="" >
        <Navbar.Brand href="/"><b>Job Seel</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
      
          <Nav className="ms-auto">
          <Nav.Link href="jobs">Jobs</Nav.Link>
            <Nav.Link href="companies">Companies</Nav.Link>

            <Nav.Link href="resume">Resume</Nav.Link>
            <Nav.Link href="jobs">Post a Jobs</Nav.Link>
            <Nav.Link type='button'>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>  )
}

export default header