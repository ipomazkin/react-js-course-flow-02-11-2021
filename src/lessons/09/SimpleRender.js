import React from 'react';
import PropTypes from 'prop-types';

export function SimpleRender(props) {
  const { children } = props;

  return (
    <div className="">
      {children}
    </div>
  );
}

SimpleRender.propTypes = {};
