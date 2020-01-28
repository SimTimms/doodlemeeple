import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const StyledButton = withStyles({
  root: {
    borderRadius: 3,
    background: 'none',
    border: '1px solid #aaa',
    color: '#aaa',
    height: 38,
    margin: 5,
    padding: '0 20px',
  },
})(Button);

export function PublicMenu() {
  return (
    <div>
      <Link to="/home" style={{ textDecoration: 'none' }}>
        <StyledButton>Home</StyledButton>
      </Link>
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <StyledButton>Login</StyledButton>
      </Link>
      <Link to="/register" style={{ textDecoration: 'none' }}>
        <StyledButton>Register</StyledButton>
      </Link>
      <StyledButton>About</StyledButton>
      <StyledButton>Community</StyledButton>
    </div>
  );
}
