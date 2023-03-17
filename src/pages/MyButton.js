import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function MyButton() {

  // TODO: Stack should be moved to the parent of the button component
  return (
    <Stack spacing={10} direction="row">
      <Button variant="contained">Contained</Button>
    </Stack>
  );
}