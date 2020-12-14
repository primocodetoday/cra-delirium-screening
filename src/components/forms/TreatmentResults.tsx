import * as React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import InputSelector from 'components/InputSelector';
import { treatForm } from 'constants/treatForm';
import { useForm } from 'react-hook-form';

// wypełniany jako stan
const TreatmentResults = () => {
  const { register, errors } = useForm();

  return (
    <Row className="d-flex justify-content-center mt-3">
      <Col xs="10" sm="8" className="px-3">
        <h3 className="text-uppercase text-center mb-4">Wyniki leczenia</h3>
        <Form>
          {treatForm.map((input) => (
            <InputSelector
              key={input.id}
              label={input.label}
              name={input.name}
              options={input.options}
              type={input.type}
              register={register}
              errors={errors}
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

export default TreatmentResults;
