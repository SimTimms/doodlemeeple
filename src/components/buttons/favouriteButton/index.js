import React, { useEffect } from 'react';
import { Button, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { toaster } from '../../../utils/toaster';

export default function FavouriteButton({ styleAdd, mutation, favourite }) {
  const classes = useStyles();
  const [on, setOn] = React.useState(false);

  useEffect(() => {
    setOn(favourite);
  }, [favourite]);

  return (
    <Button
      variant="contained"
      className={clsx({
        [classes.root]: true,
        [classes.on]: on,
      })}
      style={styleAdd || styleAdd}
      onClick={() => {
        toaster(
          !on ? (
            <Icon className={classes.iconOn}>favorite</Icon>
          ) : (
            <Icon className={classes.iconOff}>favorite_border</Icon>
          )
        );
        on === true ? setOn(false) : setOn(true);
        mutation();
      }}
    >
      {on ? (
        <Icon style={{ color: '#fff' }}>favorite</Icon>
      ) : (
        <Icon style={{ color: '#fff' }}>favorite_border</Icon>
      )}
    </Button>
  );
}
