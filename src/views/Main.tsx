import React from 'react';
import { Button, Form, Row,Col} from 'react-bootstrap'
import * as dayjs from 'dayjs'

const Main = () => {
  const now = dayjs.default().format('YYYY-MM-DD HH:mm:ss')
  console.log(now)

  return (
    <div>
      <div className="my-3 text-center">Aktualna godzina: <span className="font-weight-bold">{now}</span></div>
      <Row className="mt-4 justify-content-center">
          <Button className="m-3">Skala DOSS</Button>
          <Button className="m-3">Czynniki Ryzyka</Button>
          <Button className="m-3">Wyniki leczenia</Button>
        </Row>
    </div>
  );
};

export default Main;