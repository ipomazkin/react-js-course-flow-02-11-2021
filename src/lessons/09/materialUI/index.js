import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import { TestLayout } from "./TestLayout";
import { ThemeProvider } from "@mui/material";
import { theme } from './theme'

export function MaterialUIExample() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="">
          Test text
        </div>
        <TestLayout />
      </ThemeProvider>
    </>
  );
}

MaterialUIExample.propTypes = {};
