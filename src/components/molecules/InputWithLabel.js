import React from 'react';
import classNames from 'classnames';

import { Input } from '../atoms/Input';
import { Label } from '../atoms/Label';
import { FormGroup } from '../atoms/FormGroup';

export const InputWithLabel = ({ label, id, ...rest }) => (
  <FormGroup>
    <Label htmlFor={id}>{label}:</Label>
    <Input id={id} {...rest} />
  </FormGroup>
)
