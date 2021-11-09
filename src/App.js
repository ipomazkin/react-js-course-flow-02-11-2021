import React, { useState } from 'react';

import './App.css';
import { Lesson as Lesson1 } from "./lessons/01";


function App() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1 id={[1, 2, 3].join('.')}>{(new Date()).getDate()}</h1>
      <p>Text</p>
      <button onClick={() => setIsOpen(!isOpen)}>click me</button>
      {isOpen && (
        <h3 className="">opened</h3>
      )}
    </div>
  );
}

export default App;
