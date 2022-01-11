import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField } from '@mui/material'

export function TestLayout() {
  return (
    <Box m={3} className="" display="flex" sx={{
      justifyContent: 'center',
    }}>
      <span>123</span>
      <Button variant="contained" type="submit">123</Button>
      <TextField label="hello" name="hello" />
    </Box>
  );
}

TestLayout.propTypes = {};
