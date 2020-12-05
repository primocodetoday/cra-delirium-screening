import React from 'react';
import { Button, Row } from 'react-bootstrap';
import * as dayjs from 'dayjs';
import FormContainer from 'components/FormContainer';
import { Link } from 'react-router-dom';
import { ROUTES } from 'routes';

const Main = () => {
  const now = dayjs.default().format('YYYY-MM-DD HH:mm:ss');
  console.log(now);

  return (
    <div>
      <div className="my-3 text-center">
        Aktualna godzina: <span className="font-weight-bold">{now}</span>
      </div>
      <Row className="mt-4 justify-content-center">
        <Button as={Link} to={ROUTES.DOSS} className="m-3">
          Skala DOSS
        </Button>
        <Button as={Link} to={ROUTES.RISK} className="m-3">
          Czynniki Ryzyka
        </Button>
        <Button as={Link} to={ROUTES.RESULTS} className="m-3">
          Wyniki leczenia
        </Button>
      </Row>
      <FormContainer />
    </div>
  );
};

export default Main;
