import React from 'react';
import classNames from 'classnames';

export const Heading = ({ size, ...rest }) => {
  const Element = `h${size || '1'}`;

  return <Element {...rest} />;
};
