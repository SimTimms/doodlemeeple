import React from 'react';
import { Button, Icon } from '@material-ui/core';
import { useStyles } from './styles';

export default function FavouriteButton({ styleAdd }) {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      className={classes.root}
      style={styleAdd || styleAdd}
    >
      <Icon style={{ color: '#fff' }}>favorite_border</Icon>
    </Button>
  );
}
