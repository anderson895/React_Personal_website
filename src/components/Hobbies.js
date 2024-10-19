import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hobbies.css'; // Custom CSS file for additional styling

function Hobbies() {
  const hobbies = [
    {
      title: 'Photography',
      description: 'Capturing beautiful moments through my camera lens.',
      imgSrc: 'https://i.pinimg.com/736x/e7/5d/db/e75ddbda351d44e24b6b8099fa200aad.jpg',
    },
    {
      title: 'Coding',
      description: 'Solving problems and building apps using code.',
      imgSrc: 'https://nighteye.app/wp-content/uploads/2020/04/why-programmers-work-with-dark-mode-700x480.png',
    },
    {
      title: 'Traveling',
      description: 'Exploring new places and experiencing different cultures.',
      imgSrc: 'https://img.freepik.com/premium-photo/colorful-background-travel-theme_1031776-143879.jpg',
    },
  ];

  return (
    <Container className="about-container mt-5">
      <h1 className="text-center mb-4">My Hobbies</h1>
      <Row>
        {hobbies.map((hobby, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Card className="hobby-card">
              <Card.Body>
                <Card.Title className="hobby-title">{hobby.title}</Card.Title>
                <Card.Text className="hobby-description">{hobby.description}</Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={hobby.imgSrc} className="hobby-image" />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Hobbies;
