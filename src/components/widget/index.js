import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { Column, IconButton } from '../';

export default function Widget({ children, ...props }) {
  const { pt, p, pb, pl, pr, title, btnIcon, btnTitle, btnEvent } = props;
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{
        paddingTop: pt ? pt : p ? p : 30,
        paddingLeft: pl ? pl : p ? p : 30,
        paddingRight: pr ? pr : p ? p : 30,
        paddingBottom: pb ? pb : p ? p : 30,
      }}
    >
      <Column>{children}</Column>
    </div>
  );
}
