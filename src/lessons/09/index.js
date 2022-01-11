import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, THEME_DARK, THEME_LIGHT } from './context/themeContext'
import { Button as ButtonWithConsumer } from "./ButtonWithConsumer";
import { Button as ButtonWithHook } from "./ButtonWithHook";
import { RenderPropsExample } from "./RenderPropsExample";
import { WindowSizeWatcher } from "./WindowSizeWatcher";
import { HashRouter } from "react-router-dom";

export function Lesson09() {
  const [theme, setTheme] = useState(THEME_LIGHT);

  return (
    <ThemeProvider value={theme}>
      <div className="">
        <button onClick={() => setTheme(THEME_DARK)}>dark</button>
        <button onClick={() => setTheme(THEME_LIGHT)}>light</button>
      </div>

      <div>
        <ButtonWithConsumer>Consumer button</ButtonWithConsumer>
        <ButtonWithHook>Hook button</ButtonWithHook>
      </div>

      <div>
        <RenderPropsExample
          header={(
            <h1>Hello!</h1>
          )}
          renderFooter={() => {
            return (
              <p>Footer</p>
            )
          }}
        />
      </div>

      <WindowSizeWatcher>{(windowSize) => (
        <div>Window size is: {windowSize}</div>
      )}</WindowSizeWatcher>

      <WindowSizeWatcher>{(windowSize) => (
        <div>Another window size is: {windowSize}</div>
      )}</WindowSizeWatcher>

      <WindowSizeWatcher>{(windowSize) => (
        <div>Window size is: {windowSize}</div>
      )}</WindowSizeWatcher>

      <WindowSizeWatcher>{(windowSize) => (
        <div>Window size is: {windowSize}</div>
      )}</WindowSizeWatcher>
    </ThemeProvider>
  );
}

Lesson09.propTypes = {};
