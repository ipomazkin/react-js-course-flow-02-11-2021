import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export function Timer() {
  const [id, setId] = useState(0);
  const [counter, setCounter] = useState(0);
  const counterRef = useRef({
    counter,
    setCounter,
  });

  useEffect(() => {
    counterRef.current = {
      counter,
      setCounter,
    }
  }, [
    counter,
    setCounter,
  ]);

  useEffect(() => {
    setCounter(0);

    const interval = setInterval(() => {
      counterRef.current.setCounter(counterRef.current.counter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [id]);

  return (
    <div className="">
      {counter}
      <button onClick={() => setId(id + 1)}>reset counter</button>
    </div>
  );
}

Timer.propTypes = {};
