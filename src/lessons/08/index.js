import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu } from "./Menu";
import { Search } from "./Search";
import { NumberInput } from "./NumberInput";
import { WindowSize } from "./WindowSize";
import { Timer } from "./Timer";
import { SayMyName } from "./SayMyName";

export function Lesson() {
  const [isShow, setIsShow] = useState(false)

  return (
    <div className="">
      {/*<Menu />*/}
      {/*<Search />*/}
      {/*<NumberInput />*/}
      {isShow && (
        <SayMyName />
      )}
      <button onClick={() => setIsShow(!isShow)}>toggle</button>
    </div>
  );
}

Lesson.propTypes = {};
