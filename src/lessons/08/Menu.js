import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      {isOpen && (
        <div>Hello</div>
      )}
      <button onClick={() => setIsOpen(!isOpen)}>toggle</button>
    </div>
  );
}

Menu.propTypes = {};
