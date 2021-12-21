import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export function SWPeople() {
  const [status, setStatus] = useState('initial');
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  // useEffect(async () => {
  //   try {
  //     const res = await fetch('https://www.swapi.tech/api/people');
  //     const data = await res.json();
  //     setError(null);
  //     setStatus('success');
  //     setData(data);
  //   } catch(e) {
  //     setError(e.message);
  //     setStatus('error');
  //     setData(null);
  //   }
  // }, []);

  useEffect(() => {
    let mountState = {
      isMount: true,
    };

    fetch('https://www.swapi.tech/api/people')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (mountState.isMount) {
          setError(null);
          setStatus('success');
          setData(data);
        }
      })
      .catch((e) => {
        if (mountState.isMount) {
          setError(e.message);
          setStatus('error');
          setData(null);
        }
      });

    return () => {
      mountState.isMount = false;
    }
  }, []);

  return (
    <div className="">
      {(status === 'initial' || status === 'loading') ? (
        <div>Loading...</div>
      ) : (
        <>
          {status === 'error' ? (
            <div>{error}</div>
          ) : (
            <div>{JSON.stringify(data)}</div>
          )}
        </>
      )}
    </div>
  );
}

SWPeople.propTypes = {};
