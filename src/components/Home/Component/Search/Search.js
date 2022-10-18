import React from 'react'
import  Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { BsSearch } from "react-icons/bs";
import InputGroup from 'react-bootstrap/InputGroup';
// import { FaLocationArrow } from "react-icons/fa";
import './Search.css'
import RecentSearch from '../RecentSearch/RecentSearch';
// import Select from 'react-select';
import Address from '../../../data/Address'
// import { GrLocation } from "react-icons/gr";


function Search() {
  return (
    <>
      <Form >
    <Row>
      <Col xs={5}>
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
      <Col xs={5}>
      <Form.Select>
        <option selected>
          Location
        </option>
        <Address/>
      </Form.Select>
      </Col>
      <Col>
      <Button className="btn btn-primary w-100">
        Search
      </Button>
      </Col>
    </Row>
  </Form>
  <RecentSearch/>
    </>
    
  )
}

export default Search