import React from 'react';

import { LoginForm } from '../organisms/LoginForm';
import { Heading } from '../atoms/Heading';
import { Paragraph } from '../atoms/Paragraph';
import { PageWrapper } from '../atoms/PageWrapper';

export const LoginTemplate = ({ ...rest }) => (
  <PageWrapper>
    <Heading>Log Into E-shop</Heading>
    <LoginForm {...rest} />
    <Paragraph muted className="mt-5 mb-3">
      © 2016-2018
    </Paragraph>
  </PageWrapper>
);
