import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { themeContext } from "./context/themeContext";

export function Button(props) {
  const theme = useContext(themeContext);
  const { className = '', children, ...rest } = props;

  return (
    <button className={`${className} theme-${theme}`} {...rest}>
      <span>{children}</span>
    </button>
  );
}

Button.propTypes = {};
