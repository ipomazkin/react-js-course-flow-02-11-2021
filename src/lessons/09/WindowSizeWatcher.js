import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export function WindowSizeWatcher(props) {
  const { children } = props;

  return children(900);
}

WindowSizeWatcher.propTypes = {
  children: PropTypes.func.isRequired,
};
