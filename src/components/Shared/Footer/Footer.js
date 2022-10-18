import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";
const footer__component = [
  { name: "Career Advice" ,href:"careerAdvice"},
  { name: "Browse Jobs" ,href:"browseJobs" },
  { name: "Browse Companies", href:"browseCompanies" },
  { name: "Salaries" , href:"salaries"},
  { name: "Indeed Events" , href:"indeedEvents"},
  { name: "Work at Indeed" , href:"workAtIndeed"},
  { name: "Countries" , href:"countries"},
  { name: "About" , href:"about"},
  { name: "Help Center" , href:"helpCenter"},
  { name: "ESG at Indeed" , href:"esgAtIndeed"},
  { name: "Guidelines for Safe Job Search" , href:"guidelines"},
];

const footer__component1 = [
  { name: "Accessibility at Indeed" , href:"acessibilityAtIndeed" },
  { name: "Privacy Center" , href:"privacyCenter"},
  { name: "Cookies" , href:"cookies" },
  { name: "Privacy" , href:"privacy"},
  { name: "Terms" , href:"terms"},
];

function footer() {
  return (
    <Container fluid>
      <Row>
        <Col>
          {footer__component.map((footer__component) => (
            <a href={footer__component.href} className="footer__component mx-2">
              {footer__component.name}
            </a>
          ))}
        </Col>
      </Row>
      <Row>
        <Col className="mx-2">
        <span>Job Seel<sup>&#169;</sup></span>
          {footer__component1.map((footer__component1) => (
      
              <a href={footer__component1.href} className="footer__component1 mx-2">
                {footer__component1.name}
              </a>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default footer;
