import React from 'react';

import { InputWithLabel } from '../molecules/InputWithLabel';
import { Button } from '../atoms/Button';
import { Form } from '../atoms/Form';

export const LoginForm = ({ values, onInputChange, ...rest }) => (
  <Form {...rest}>
    <InputWithLabel
      id="email"
      label="Email"
      value={(values || {}).email}
      onInputChange={onInputChange}
    />
    <InputWithLabel
      id="passowrd"
      label="Password"
      type="passowrd"
      value={(values || {}).passowrd}
      onInputChange={onInputChange}
    />
    <Button block type="submit" title="Login" />
  </Form>
);
