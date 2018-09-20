import React from 'react';
import classNames from 'classnames';

export const Button = ({ title, style, block, className, ...rest }) => (
  <button
    type="button"
    className={classNames(
      'btn',
      `btn-${style || 'primary'}`,
      { 'btn-block': block },
      className,
    )}
    {...rest}
  >
    {title}
  </button>
);
