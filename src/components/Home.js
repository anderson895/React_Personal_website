import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Home.css';  // We will add some custom styling here

function Home() {
  return (
    <div className="landing-container">
      <Container className="text-center">
        <Row>
          <Col>
            <h1 className="landing-title">Welcome to My Personal Website</h1>
            <p className="landing-subtitle">I'm passionate about coding, photography, and traveling. Let's explore more about me.</p>
            <Button variant="primary" size="lg" href="/about">
              Learn More About Me
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
