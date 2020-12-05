import * as React from 'react';
import { Form } from 'react-bootstrap';

export type InputProps = {
  label: string;
  name: string;
  options?: string[];
  type?: 'select' | 'text';
};

export const Input = ({ label, name, options = [], type = 'text' }: InputProps) => {
  // const { dispatch } = useOrderContext();

  const opts = options.length
    ? options.map((opt, idx) => {
        return <option key={idx}>{opt}</option>;
      })
    : null;

  return (
    <Form.Group>
      <Form.Label className="text-center mb-2">{label}</Form.Label>
      <Form.Control name={name} as={type} className="text-center mb-4">
        {opts}
      </Form.Control>
    </Form.Group>
  );
};

export default Input;
