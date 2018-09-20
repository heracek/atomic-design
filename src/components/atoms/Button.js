import React from 'react';
import classNames from 'classnames';

export const Button = ({ title, style, className, ...rest }) => (
  <button type="button" className={classNames("btn", `btn-${style || 'primary'}`, className)} {...rest}>
    {title}
  </button>
)
