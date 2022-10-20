import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import './Login.css'
import Register from './Register'


function Login() {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
      <Nav.Link type='button'onClick={handleShow}>Login/Register</Nav.Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <h3 class="LoginWelcomeText">Welcome to Job Seel</h3>
        <span class="sign">Log in with</span>
        <button class="test_login" type="button" aria-label="Login with Google"><svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18.5" cy="18" r="18" fill="#fff"></circle><path d="M30.876 18.275c0-1.017-.084-1.76-.267-2.53H18.753v4.593h6.96c-.14 1.14-.898 2.86-2.582 4.014l-.024.154 3.749 2.846.26.026c2.385-2.16 3.76-5.335 3.76-9.103z" fill="#4285F4"></path><path d="M18.752 30.376c3.41 0 6.271-1.1 8.362-2.998l-3.985-3.025c-1.066.729-2.497 1.238-4.377 1.238a7.587 7.587 0 01-7.184-5.143l-.148.013-3.898 2.956-.05.139c2.076 4.042 6.341 6.82 11.28 6.82z" fill="#34A853"></path><path d="M11.57 20.448A7.483 7.483 0 0111.149 18c0-.852.154-1.677.407-2.447l-.007-.165-3.947-3.003-.13.06A12.185 12.185 0 006.127 18c0 1.994.49 3.877 1.347 5.555l4.096-3.107z" fill="#FBBC05"></path><path d="M18.752 10.41c2.371 0 3.97 1.005 4.883 1.844l3.563-3.41c-2.189-1.994-5.037-3.218-8.446-3.218-4.939 0-9.204 2.777-11.28 6.82l4.082 3.107c1.024-2.983 3.859-5.142 7.198-5.142z" fill="#EB4335">
        </path></svg>Google</button>
       <div className='test_git' type="button">
        <img id="wp_thbn_37" src="data:image/png;base64,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"  height="50" width="50" alt="" ></img>
        Github
        </div>
          {/* <Modal.Title><div className='log'>Sign in</div></Modal.Title> */}
        </Modal.Header>
        <Modal.Body>  <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Text className="text-muted">
          Enter your username or email address
        </Form.Text>
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control type="email" placeholder="usename or email address" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter your password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      </Form.Group>
      </Form>
      </Modal.Body>
        <Modal.Footer>
        <Register/>

          <Button variant="secondary" onClick={handleClose}>
            Signin
          </Button>
         </Modal.Footer>
    
      </Modal>
      
    </>
  );
}

export default Login;