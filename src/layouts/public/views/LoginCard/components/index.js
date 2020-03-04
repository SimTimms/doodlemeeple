import React from 'react';
import Button from '@material-ui/core/Button';
const CHECKING = 'Checking...';

export function LoginButton({
  loginMutation,
  status,
  setStatus,
  email,
  password,
}) {
  return (
    <Button
      onClick={() => {
        if (password === '' || email === '') {
          setStatus('Try Again');
          return;
        }
        if (status !== CHECKING) {
          setStatus('Checking...');
          loginMutation();
        }
      }}
      variant="contained"
      color="secondary"
      style={{ width: 180, marginTop: 0 }}
    >
      {status}
    </Button>
  );
}
