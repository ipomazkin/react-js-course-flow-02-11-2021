import React, { useMemo, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';

export function Memoization() {
  const a = 1;
  const b = 2;

  const ref = useRef(null);

  const sum = useMemo(() => {
    return a + b
  }, [a, b]);

  const logSum = useCallback(
    () => {
      console.log(sum);
    }
    , [sum]);

  const logSum2 = useMemo(() => {
    return () => {
      console.log(sum);
    };
  }, [sum]);

  const logSum3 = () => {
    console.log(sum);
  };

  return (
    <div ref={ref} className="">

    </div>
  );
}

Memoization.propTypes = {};
