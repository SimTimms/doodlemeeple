import React from 'react';
import { useStyles } from './styles';

export default function Paper({ children, ...props }) {
  const { pt, p, pb, pl, pr } = props;
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{
        padding: p ? p : 30,
        paddingTop: pt ? pt : p ? p : 30,
        paddingLeft: pl ? pl : p ? p : 30,
        paddingRight: pr ? pr : p ? p : 30,
        paddingBottom: pb ? pb : p ? p : 30,
      }}
    >
      {children}
    </div>
  );
}
