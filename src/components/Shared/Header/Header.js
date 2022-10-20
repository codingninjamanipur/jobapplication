import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from '../../Authentication/Login';



function header() {
  return (
    <>
    <div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="" >
        <Navbar.Brand href="/"><b>Job Seel</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
      
          <Nav className="ms-auto">
          <Nav.Link href="jobs">Jobs</Nav.Link>
            <Nav.Link href="companies">Companies</Nav.Link>

            <Nav.Link href="Resume">Resume</Nav.Link>
            <Nav.Link href="jobs">Post a Jobs</Nav.Link>
            <Login/> 
             {/* <Nav.Link type='button'>Login</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div> 

    </>
  
     )
}

export default header