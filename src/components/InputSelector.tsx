﻿import * as React from 'react';
import { Form, Row, Col, Card } from 'react-bootstrap';
import InputRadio from './atoms/InputRadio';
import { UseFormMethods } from 'react-hook-form';

export enum InputType {
  SELECT = 'select',
  TEXT = 'text',
  NUMBER = 'number',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
}

export interface InputProps extends Partial<Pick<UseFormMethods, 'register' | 'errors'>> {
  label: string;
  name: string;
  options?: { label: string; value: number }[];
  type?: InputType;
}

export const InputSelector = ({ label, name, options = [], type = InputType.TEXT, register, errors }: InputProps) => {
  return (
    <>
      {type === InputType.RADIO ? (
        <InputRadio name={name} options={options} register={register} label={label} errors={errors} />
      ) : null}
      {type === InputType.NUMBER ? (
        <Card className="p-3 my-3 bg-light">
          <Form.Group as={Row} className="mb-0">
            <Form.Label column xs={8} htmlFor={name} className="font-weight-bold">
              {label}
            </Form.Label>
            <Col xs={4}>
              <Form.Control name={name} type={type} ref={register} className="" />
            </Col>
          </Form.Group>
        </Card>
      ) : null}
    </>
  );
};

export default InputSelector;
