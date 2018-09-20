import React from 'react';
import classNames from 'classnames';

export const Form = ({ className, ...rest }) => (
  <div className={classNames('form-group', className)} {...rest} />
)
