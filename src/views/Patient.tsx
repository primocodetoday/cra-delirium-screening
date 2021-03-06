﻿import React from 'react';
import { Button, Row, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ROUTES } from 'routes';
import UserTemplate from 'templates/UserTemplate';

const Patient = () => {
  return (
    <UserTemplate>
      <Row className="mt-3 justify-content-center">
        <Col xs="12" sm="8">
          <Card className="py-3 px-4">
            <Card.Title>Pacjent : 35435</Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              Leczony od: <span>2020-01-02</span>
            </Card.Subtitle>
            <Card.Subtitle className="text-muted mb-2">Stan:</Card.Subtitle>
            <Row className="mt-2 justify-content-center">
              <Button as={Link} to={ROUTES.RISK} className="m-2">
                Czynniki Ryzyka
              </Button>
              <Button as={Link} to={ROUTES.DOSS} className="m-2">
                Skala DOSS
              </Button>
              <Button as={Link} to={ROUTES.RESULTS} className="m-2">
                Wyniki leczenia
              </Button>
            </Row>
          </Card>
        </Col>
      </Row>
    </UserTemplate>
  );
};

export default Patient;
