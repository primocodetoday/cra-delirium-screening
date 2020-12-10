import * as React from 'react';
import { Form } from 'react-bootstrap';

export type InputProps = {
  label: string;
  name: string;
  options?: { label: string; value: number }[];
  type?: 'select' | 'text' | 'number';
  register: any;
};

export const Input = ({ label, name, options = [], type = 'text', register }: InputProps) => {
  const opts = options.length
    ? options.map((opt, idx) => {
        return (
          <option key={idx} value={opt.value}>
            {opt.label}
          </option>
        );
      })
    : null;

  return (
    <Form.Group>
      <Form.Label htmlFor={name} className="mb-2 font-weight-bold">
        {label}
      </Form.Label>
      {type === 'select' ? (
        <Form.Control name={name} as={type} ref={register} className="text-center mb-4">
          <option> </option>
          {opts}
        </Form.Control>
      ) : (
        <Form.Control name={name} type={type} ref={register} className="text-center mb-4" />
      )}
    </Form.Group>
  );
};

export default Input;
