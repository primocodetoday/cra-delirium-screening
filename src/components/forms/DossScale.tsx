import * as React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { dossForm } from 'constants/dossForm';
import { useForm } from 'react-hook-form';
import InputRadio from 'components/atoms/InputRadio';

interface DossScaleFormData {
  doss01: string;
  doss02: string;
  doss03: string;
  doss04: string;
  doss05: string;
  doss06: string;
  doss07: string;
  doss08: string;
  doss09: string;
  doss10: string;
  doss11: string;
  doss12: string;
  doss13: string;
}

// wypełniany  wiele razy
const DossScale = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = React.useCallback((formValues: DossScaleFormData) => {
    // eslint-disable-next-line no-console
    console.log(formValues);
  }, []);

  const inputFields = dossForm.map((field) => {
    const { id, label, name, options } = field;
    return <InputRadio key={id} label={label} name={name} options={options} register={register} errors={errors} />;
  });

  return (
    <Row className="d-flex justify-content-center mt-3 mb-5">
      <Col xs="12" sm="6" className="px-3">
        <h3 className="text-uppercase text-center mb-4">Skala DOSS</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {inputFields}
          <Row className="justify-content-center">
            <Button type="submit">Wyślij </Button>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default DossScale;
