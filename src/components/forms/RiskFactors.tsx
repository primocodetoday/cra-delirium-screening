import * as React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import Input from 'components/Input';
import { riskForm } from 'constants/riskForm';

// wypełniany tylko raz
const RiskFactors = () => {
  return (
    <Row className="d-flex justify-content-center mt-3">
      <Col xs="10" sm="5" className="px-3">
        <h3 className="text-uppercase text-center mb-4">Czynniki Ryzyka</h3>
        <Form>
          {riskForm.map((input) => (
            <Input key={input.id} label={input.label} name="doss1" options={input.options} type={input.type} />
          ))}
        </Form>
      </Col>
    </Row>
  );
};

export default RiskFactors;
