import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles({
  root: {
    borderRadius: 3,
    background: '#fff',
    border: '1px solid #aaa',
    color: '#aaa',
    height: 38,
    margin: 5,
    padding: '0 20px',
  },
})(Button);

export default function ActionButton(props) {
  return (
    <StyledButton variant="contained" color="primary" onClick={props.onClick}>
      {props.name}
    </StyledButton>
  );
}
