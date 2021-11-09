import React, { useState } from 'react';

import './App.css';
import { Lesson as Lesson2 } from "./lessons/02";


function App() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <Lesson2 />
  );
}

export default App;
