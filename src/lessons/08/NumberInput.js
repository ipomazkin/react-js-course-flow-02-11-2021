import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export function NumberInput() {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    if (value === '') {
      setIsValid(null);
      return
    }

    if (/^\d+$/gmi.test(value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [value]);

  return (
    <div className="">
      <input
        onChange={(e) => setValue(e.currentTarget.value)}
        type="text"
        value={value}/>
      {isValid === false && (
        <span>Error!</span>
      )}
    </div>
  );
}

NumberInput.propTypes = {};
