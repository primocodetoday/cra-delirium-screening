import * as React from 'react';
import { Card, Col, Row, FormCheck } from 'react-bootstrap';

interface InputRadioProps {
  label: string;
  name: string;
  options: { label: string; value: number }[] | undefined;
  error: any;
  register: any;
}

const InputRadio = ({ label, name, options, register, error }: InputRadioProps) => {
  const radioOptions = options
    ? options.map((opt, idx) => (
        <Row key={idx} className="d-flex align-items-center form-check mb-2">
          <FormCheck.Input ref={register} type="radio" name={name} value={opt.value} id={`${name}-${idx}`} />
          <FormCheck.Label htmlFor={`${name}-${idx}`}>{opt.label}</FormCheck.Label>
        </Row>
      ))
    : [];

  return (
    <Card className="p-3 my-3 bg-light">
      <Row>
        <Col xs="8">
          <h6 className={`${error && 'text-danger'}`}>{label}</h6>
        </Col>
        <Col xs="4" className="d-flex flex-column justify-content-center ">
          {radioOptions}
        </Col>
      </Row>
    </Card>
  );
};

export default InputRadio;
