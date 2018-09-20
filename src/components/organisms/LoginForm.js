import React from 'react';

import { InputWithLabel } from '../molecules/InputWithLabel';
import { Button } from '../atoms/Button';
import { Form } from '../atoms/Form';

export const LoginForm = ({ values, ...rest }) => (
  <Form {...rest}>
    <InputWithLabel id="email" label="Email" value={(values || {}).email} />
    <InputWithLabel id="passowrd" label="Password" type="passowrd" value={(values || {}).passowrd} />
    <Button type="submit" title="Login" />
  </Form>
)
