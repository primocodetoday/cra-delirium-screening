import * as React from 'react';
import { Form } from 'react-bootstrap';

export type InputProps = {
  label: string;
  name: string;
  options?: string[];
  type?: 'select' | 'text' | 'number';
};

export const Input = ({ label, name, options = [], type = 'text' }: InputProps) => {
  const opts = options.length
    ? options.map((opt, idx) => {
        return <option key={idx}>{opt}</option>;
      })
    : null;

  return (
    <Form.Group>
      <Form.Label className="mb-2 font-weight-bold">{label}</Form.Label>
      {type === 'select' ? (
        <Form.Control name={name} as={type} className="text-center mb-4">
          {opts}
        </Form.Control>
      ) : (
        <Form.Control name={name} type={type} className="text-center mb-4" />
      )}
    </Form.Group>
  );
};

export default Input;
