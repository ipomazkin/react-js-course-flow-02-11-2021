import React from 'react';
import PropTypes from 'prop-types';
import { ThemeConsumer } from "./context/themeContext";

export function Button(props) {
  const { className = '', children, ...rest } = props;

  return (
    <ThemeConsumer>
      {(theme) => (
        <button className={`${className} theme-${theme}`} {...rest}>
          <span>{children}</span>
        </button>
      )}
    </ThemeConsumer>
  );
}

Button.propTypes = {};
