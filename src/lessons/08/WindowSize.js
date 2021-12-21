import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export function WindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      console.log('----------------- handleResize');
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    console.log('----------------- first render');

    return () => {
      console.log('----------------- before unmount');
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="">
      Width: {windowSize.width}
      Height: {windowSize.height}
    </div>
  );
}

WindowSize.propTypes = {};
