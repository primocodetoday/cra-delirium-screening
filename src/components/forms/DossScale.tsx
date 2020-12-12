import * as React from 'react';
import { Row, Col, Form, Button, Card } from 'react-bootstrap';
import InputSelector from 'components/InputSelector';
import { dossForm } from 'constants/dossForm';
import { useForm } from 'react-hook-form';

// wypełniany  wiele razy
const DossScale = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Row className="d-flex justify-content-center mt-3 mb-5">
      <Col xs="10" sm="8" className="px-3">
        <h3 className="text-uppercase text-center mb-4">Skala DOSS</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {dossForm.map((input) => (
            <InputSelector
              key={input.id}
              label={input.label}
              name={input.name}
              options={input.options}
              type={input.type}
              register={register}
            />
          ))}
          <Row className="justify-content-center">
            <Button type="submit">Wyślij </Button>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default DossScale;
