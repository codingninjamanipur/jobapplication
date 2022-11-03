import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import './Register.css'
import Login from './Login'
// import Alert from 'react-bootstrap/Alert';
function Register() {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Show = () => setShow(true);
  return (
    <>
      
      <a class="page" property="item" type="button" onClick={handleShow}><span property="name">Register</span></a>
          
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <p>Welcome to Job Seel</p>
        <button class=" test_gl_login" type="button" onClick={Show}><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="none" fill-rule="evenodd"><circle fill="#FFF" cx="12" cy="12" r="12"></circle><path d="M19.844 10.433H19.2V10.4H12v3.2h4.522A4.8 4.8 0 0112 16.8 4.8 4.8 0 017.2 12 4.8 4.8 0 0112 7.2a4.77 4.77 0 013.184 1.216l2.263-2.263A7.962 7.962 0 0012 4a8 8 0 00-8 8 8 8 0 008 8 8 8 0 007.844-9.567z" fill="#FFC107" fill-rule="nonzero"></path><path d="M4.922 8.277l2.63 1.928A4.797 4.797 0 0112 7.2a4.77 4.77 0 013.184 1.216l2.263-2.263A7.962 7.962 0 0012 4a7.995 7.995 0 00-7.078 4.277z" fill="#FF3D00" fill-rule="nonzero"></path><path d="M12 20c2.066 0 3.944-.79 5.364-2.077l-2.477-2.095A4.767 4.767 0 0112 16.8a4.796 4.796 0 01-4.513-3.178l-2.609 2.01A7.993 7.993 0 0012 20z" fill="#4CAF50" fill-rule="nonzero"></path><path d="M19.844 10.4H12v3.2h4.522a4.822 4.822 0 01-1.636 2.228h.002l2.476 2.095C17.19 18.081 20 16 20 12c0-.536-.055-1.092-.156-1.6z" fill="#1976D2" fill-rule="nonzero"></path></g></svg>Sign up with Google</button>
      
        <Modal.Title><div className='log'>Sign up</div></Modal.Title>
        </Modal.Header>
        <Modal.Body> 
   
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>
          Enter your fullName
        </Form.Label>
        <Form.Control type="Name" placeholder="Full Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>
          Enter your username or email address
        </Form.Label>
        <Form.Control type="email" placeholder="usename or email address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
       
      </Form.Group>
      </Form>
            </Modal.Body>
        <Modal.Footer>
       <Login/>
      <Button variant="secondary" onClick={handleClose}>
            SignUp
          </Button>
        
       
        </Modal.Footer>
       
      </Modal>
   
    </>
    
  );
  

}

export default Register;