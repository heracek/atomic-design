import React from 'react';
import classNames from 'classnames';

export const Input = ({ type, className, ...rest }) => (
  <input
    type={type || 'text'}
    className={classNames('form-control', className)}
    {...rest}
  />
);
