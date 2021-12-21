import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log('----------------- after first render');
  }, []);

  useEffect(() => {
    console.log('----------------- after isOpen changed');
    setSearch('after isOpen changed')
  }, [isOpen, setSearch]);

  useEffect(() => {
    console.log('----------------- after search changed');
  }, [search]);

  useEffect(() => {
    console.log('----------------- after the render');
  });


  return (
    <div className="">
      {isOpen && (
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}/>
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)}>toggle</button>
    </div>
  );
}

Search.propTypes = {};
