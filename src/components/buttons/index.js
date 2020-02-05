import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles({
  root: {
    borderRadius: 3,
    background: 'none',
    borderTop: '1px solid #ddd',
    borderRight: '1px solid #ccc',
    borderBottom: '1px solid #ccc',
    borderLeft: '1px solid #ddd',
    color: '#aaa',
    height: 38,
    margin: 5,
    padding: '0 20px',
    boxShadow: '3px 3px 5px rgba(0,0,0,0.1)',
  },
})(Button);

export default function ActionButton(props) {
  return (
    <StyledButton variant="contained" color="primary" onClick={props.onClick}>
      {props.name}
    </StyledButton>
  );
}
