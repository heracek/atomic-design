import React from 'react';
import classNames from 'classnames';

import { Input } from '../atoms/Input';
import { Label } from '../atoms/Label';
import { FormGroup } from '../atoms/FormGroup';

export const InputWithLabel = ({ label, id, onInputChange, ...rest }) => (
  <FormGroup>
    <Label htmlFor={id}>{label}:</Label>
    <Input
      id={id}
      name={id}
      onChange={e => onInputChange && onInputChange(id, e.target.value)}
      {...rest}
    />
  </FormGroup>
);
