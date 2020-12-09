import * as React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import Input from 'components/Input';
import { riskForm } from 'constants/riskForm';
import { useForm } from 'react-hook-form';

// wypełniany tylko raz
const RiskFactors = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <Row className="d-flex justify-content-center mt-3">
      <Col xs="10" sm="8" className="px-3">
        <h3 className="text-uppercase text-center mb-4">Czynniki Ryzyka</h3>
        <Form>
          {riskForm.map((input) => (
            <Input
              key={input.id}
              label={input.label}
              name="doss1"
              options={input.options}
              type={input.type}
              register={register}
            />
          ))}
        </Form>
      </Col>
    </Row>
  );
};

export default RiskFactors;
