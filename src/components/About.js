import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import profileImage from '../assets/profile.png'; // Adjust the path to your profile image
import image1 from '../assets/images1.jpg';
import image2 from '../assets/images2.jpg';
import image3 from '../assets/images3.jpg';
import image4 from '../assets/images4.jpg'; 
import image5 from '../assets/images5.jpg';
import image6 from '../assets/images6.jpg';
import './About.css'; 

function About() {
  return (
    <Container className="about-container mt-5">
      <Row>
        {/* Sidebar Section */}
        <Col md={4} className="sidebar">
          <Card className="mb-4 text-center">
            <Card.Body>
              <img 
                src={profileImage} 
                alt="Profile" 
                className="img-fluid rounded-circle mb-3" 
                style={{ width: '120px' }} // Adjust the size here
              />
              <Card.Title>Shannen Keith</Card.Title>
              <Card.Text>
                <strong>Intro:</strong> cb
              </Card.Text>
              <Card.Text>
                <strong>Studied at:</strong> National University - Dasmariñas
              </Card.Text>
              <Card.Text>
                <strong>Lives in:</strong> General Trias, Cavite
              </Card.Text>
              <Card.Text>
                <strong>From:</strong> Imus, Cavite
              </Card.Text>
              <Card.Text>
                <strong>Status:</strong> Single
              </Card.Text>
              <Card.Text>
                <strong>Joined:</strong> August 2018
              </Card.Text>
              <ListGroup horizontal className="justify-content-center">
                <ListGroup.Item><a href="https://www.instagram.com/siyanenkeyt/" target="_blank" rel="noopener noreferrer">Instagram</a></ListGroup.Item>
                <ListGroup.Item><a href="https://x.com/shaaa4aaa" target="_blank" rel="noopener noreferrer">x.com</a></ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* Main Content Section */}
        <Col md={8}>
            <Card className="mb-4">
                    <Card.Header>Gallery</Card.Header>
                    <Card.Body>
                    {/* Gallery Section */}
                    <Row>
                        <Col md={4}>
                        <Card className="mb-3">
                            <Card.Img variant="top" src={image1} alt="Gallery Image 1" className="img-fluid" style={{ maxHeight: '200px', objectFit: 'cover' }} />
                        </Card>
                        </Col>
                        <Col md={4}>
                        <Card className="mb-3">
                            <Card.Img variant="top" src={image2} alt="Gallery Image 2" className="img-fluid" style={{ maxHeight: '200px', objectFit: 'cover' }} />
                        </Card>
                        </Col>
                        <Col md={4}>
                        <Card className="mb-3">
                            <Card.Img variant="top" src={image3} alt="Gallery Image 3" className="img-fluid" style={{ maxHeight: '200px', objectFit: 'cover' }} />
                        </Card>
                        </Col>

                        <Col md={4}>
                        <Card className="mb-3">
                            <Card.Img variant="top" src={image4} alt="Gallery Image 4" className="img-fluid" style={{ maxHeight: '200px', objectFit: 'cover' }} />
                        </Card>
                        </Col>
                        <Col md={4}>
                        <Card className="mb-3">
                            <Card.Img variant="top" src={image5} alt="Gallery Image 5" className="img-fluid" style={{ maxHeight: '200px', objectFit: 'cover' }} />
                        </Card>
                        </Col>
                        <Col md={4}>
                        <Card className="mb-3">
                            <Card.Img variant="top" src={image6} alt="Gallery Image 6" className="img-fluid" style={{ maxHeight: '200px', objectFit: 'cover' }} />
                        </Card>
                        </Col>
                    </Row>
                    </Card.Body>
                </Card>`
        </Col>

      </Row>
    </Container>
  );
}

export default About;
