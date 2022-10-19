import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { Container, Modal, Form, Button, Row,Col } from 'react-bootstrap';
function header() {
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
<>
<Navbar collapseOnSelect expand="xxl" bg="dark" variant="dark">
      <Container className="" >
        <Navbar.Brand href="/"><b>Job Seel</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
      
          <Nav className="ms-auto">
          
            <Nav.Link href="companies">Companies</Nav.Link>

            <Nav.Link href="resume">Resume</Nav.Link>
            <Nav.Link href="jobs">Post a Jobs</Nav.Link>
            <Nav.Link type='button' onClick={handleShow} >Login/Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>  


    <Modal show={show} onHide={handleClose} centered>
    <Modal.Header closeButton>
    </Modal.Header>
    <div className="header_title">
      <h3>Sign In</h3>
    </div>
    <Modal.Body>
      <div className="login__form">
        <Form action=''>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password"
            />
          </Form.Group>
          <div><a className='forgot_password_link' href='sdsda'>Forgot Password</a></div>
          
          <div className="login_btn_wrapper">
            <Button size="lg" variant="dark" type="submit">Submit</Button>
          </div>
        </Form>
      </div>
      <div className="login__break-wrapper">
        <Row className='login__break'>
          <Col className='front_line'></Col>
          <Col><small>or Sign up with</small></Col>
          <Col className='back_line'></Col>
        </Row>
      </div>
      <div className='register__link'>
        <p>Not yet registered?<a href='kkk'>Register Now</a></p>
      </div>
    </Modal.Body>
  </Modal></>

    )
}

export default header