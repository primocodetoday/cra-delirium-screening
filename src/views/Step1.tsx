import * as React from 'react';
import { Container, Form, Row, Col, Button, Card } from 'react-bootstrap';
import TopNav from 'components/TopNav';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'routes';
import UserTemplate from 'templates/UserTemplate';

const Step1 = () => {
  const history = useHistory();

  const handleID = () => {
    history.push(ROUTES.FORMS);
  };

  return (
    <UserTemplate>
      <Row className=" justify-content-center mt-5">
        <Col xs={12} sm={8} md={6} className="">
          <Card className="mx-auto my-auto py-3 px-4">
            <Card.Title className="text-uppercase text-center">Delirium</Card.Title>
            <Form onSubmit={handleID}>
              <Form.Group>
                <Form.Label className="text-uppercase">Id Pacjenta</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Row className="justify-content-center mt-3">
                <Button variant="primary" type="submit">
                  Wprowadź
                </Button>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </UserTemplate>
  );
};

export default Step1;
