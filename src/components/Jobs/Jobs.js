import React from "react";
import Header from "../Shared/Header/Header";
import './Jobs.css'
import Footer from "../Shared/Footer/Footer"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import Card from 'react-bootstrap/Card';
function Jobs() {
  return (
    <>
      <Header />

      <div className="Job_container">
        <h1 id="hTag">Let's make your next great hire. Fast.</h1>
        <Button>Post a job</Button>
        <img src="http://" alt="Online Interview"></img>
      </div>

      <Container className="Job_container1">

        <Row>

          <Col md>
            <div className="card1">
              <h4 style={{ color: "blue" }}>1</h4>
              <h3>Create your <br /> free account</h3>
              <p>All you need is your email address to create an account and start building your job post.</p>
            </div>
          </Col>

          <Col md>
            <div className="card1">
              <h4 style={{ color: "blue" }}>2</h4>
              <h3>Build your <br /> job post</h3>
              <p>Then just add a title, description, and location to your job post, and you're ready to go.</p>
            </div>
          </Col>

          <Col md>
            <div className="card1">
              <h4 style={{ color: "blue" }}>3</h4>
              <h3>Post <br /> your job</h3>
              <p>After you post your job use our state of the art tools to help you find dream talent.</p>
            </div>
          </Col>

        </Row>

      </Container>

      <div className="card2">

        <h1>Save time and effort in your hiring journey.</h1>
        <p>Finding the best fit for the job shouldn’t be a full-time job. Indeed’s simple and powerful tools let you source, screen, and hire faster.</p>

      </div>

      <Container className="Job_container2">

        <Row>
          <Col md>
            <h1>Get more visibility</h1>
            <p><a href="">Sponsor your job</a> to ensure it gets seen by the right people.</p>
          </Col>
          <Col md>
            <h1>Find quality applicants</h1>
            <p>List your required skills for the job so relevant candidates apply.</p>
          </Col>
        </Row>

        <Row>
          <Col md>
            <h1>Verify their abilities</h1>
            <p>Add screener questions and assessments to test applicants’ skills.</p>
          </Col>
          <Col md>
            <h1>Organize your candidates</h1>
            <p>View and sort resumes, send messages, and schedule interviews—all on Indeed.</p>
          </Col>
        </Row>

      </Container>

      <Container className="Job_container3">

        <Row>
          <Col md>
            <Button variant="primary" size="lg">Get started</Button>
          </Col>

          <Col md>
            <p>You control your posts 24/7—edit, add, pause, or close them whenever you want.</p>
            <a href="">Learn more about posting.</a>
          </Col>
        </Row>

      </Container>

      <div className="card3">
        <h1><strong>Want to fill your job faster? Sponsor it.</strong></h1>
        <p style={{ fontSize: 20 }}>Sponsored Jobs are over 4.5X more likely to result in a hire. Pick the daily budget that works for you; pay only for people clicking on your post.<sup>1</sup></p>
      </div>

      <div className="card3">
        <h1><strong>You're in good company.</strong></h1>
        <p style={{ fontSize: 20 }}>Over 30,00,000 companies use Indeed to hire. See why these amazing companies use us as their platform to hire dream talent.<sup>1</sup></p>
      </div>

      <Container className="Job_container4">

        <Row>

          <Col md>
            <div className="card4">
              <img src="" alt="Macdonal's"></img>
              <p>Indeed helps the world’s largest family restaurant business to recruit high quality candidates for its hard-to-fill positions.</p>
            </div>
          </Col>

          <Col md>
            <div className="card4">
            <img src="" alt="University"></img>
              <p>The second oldest university in the world uses Indeed to draw targeted jobseeker traffic to fill both niche academic positions and corporate support roles.</p>
            </div>
          </Col>

          <Col md>
            <div className="card4">
            <img src="" alt="Nokia"></img>
              <p>The world leader in mobile communications uses Indeed Sponsored Jobs to lower its cost per applicant and cost per hire.</p>
            </div>
          </Col>

        </Row>

      </Container>

      <Footer />
    </>
  );
}

export default Jobs;