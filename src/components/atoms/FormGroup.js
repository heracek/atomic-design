import React from 'react';
import classNames from 'classnames';

export const FormGroup = ({ className, ...rest }) => (
  <div className={classNames('form-group', className)} {...rest} />
);
