import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export function SayMyName() {
  const [name, setName] = useState('Heisenberg');

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('My name is', name);
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [name]);

  return (
    <div className="">
      My name is {name}
      {['Jessie', 'Soul', 'Hank', 'Mike', 'Gustavo', 'Heisenberg'].map((personName) => (
        <button key={personName} onClick={() => setName(personName)}>{personName}</button>
      ))}
    </div>
  );
}

SayMyName.propTypes = {};
