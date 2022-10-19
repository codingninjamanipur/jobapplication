import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsSearch } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer"
import './Companies.css'
function Companies() {
  return (
    <React.Fragment>
      <Header />
      <div className="main text-center">
        <div className='comapny_header'>
          <h2>Find great places to work</h2>
          <div>
            Get access to millions of company reviews
          </div>

        </div>
        <div className='companies_serchbar mt-5'>
          <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
              <Col xs={12} md={10}>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Job title, keywords, or company"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button className="btn btn-light">
                    <BsSearch variant="outline-secondary" id="button-addon2">
                    </BsSearch>
                  </Button>

                </InputGroup>
              </Col>
              <Col xs={6} md={2} >
                <Button className='px-4 ' variant="primary">Find Companies</Button>{' '}
              </Col>
            </Row>
          </Container>
        </div>
        <div className='popular_comnpaies-header '></div>
        <h3 className=''>
          Popular companies
        </h3>
        <div>
        </div>Based on reviews and recent job openings on Indeed
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Companies