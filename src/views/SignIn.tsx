import * as React from 'react';
import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap';
import { ROUTES } from 'routes';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
  const history = useHistory();

  const handleSignIn = () => {
    history.push(ROUTES.ID);
  };

  return (
    <Container style={{ height: '100vh' }} fluid="sm">
      <Row className=" justify-content-center align-items-center h-100 px-4">
        <Col xs={12} sm={8} md={6} className="">
          <Card className="mx-auto my-auto py-3 px-4">
            <Card.Title className="text-uppercase text-center">Delirium</Card.Title>
            <Form onSubmit={handleSignIn}>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Row className="justify-content-center mt-3">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
