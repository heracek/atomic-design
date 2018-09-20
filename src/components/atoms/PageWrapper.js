import React from 'react';
import classNames from 'classnames';

export const PageWrapper = ({ className, ...rest }) => (
  <div className={classNames('page-wrapper--narrow', className)} {...rest} />
);
