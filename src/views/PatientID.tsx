import * as React from 'react';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'routes';
import UserTemplate from 'templates/UserTemplate';

const PatientID = () => {
  const history = useHistory();

  const handleID = () => {
    history.push(ROUTES.FORMS);
  };

  return (
    <UserTemplate>
      <Row className=" justify-content-center mt-5">
        <Col xs={12} md={5} className="mb-3">
          <Card className="py-3 px-4">
            <Card.Title className="text-uppercase text-center">PODAJ ID PACJENTA</Card.Title>
            <Form onSubmit={handleID}>
              <Form.Group>
                <Form.Label className="text-uppercase">Id Pacjenta</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Button type="submit" className="mr-auto mt-3">
                Wprowadź
              </Button>
            </Form>
          </Card>
        </Col>
        <Col xs={12} md={7} className="mb-3">
          <Card className="py-3 px-4">
            <Card.Title>Pacjent : 35435</Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              Leczony od: <span>2020-01-02</span>
            </Card.Subtitle>
            <Button type="submit" className="mr-auto mt-3">
              DANE
            </Button>
          </Card>
        </Col>
      </Row>
      <Row></Row>
    </UserTemplate>
  );
};

export default PatientID;
