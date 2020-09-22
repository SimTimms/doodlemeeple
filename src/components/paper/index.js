import React from 'react';
import { useStyles } from './styles';

export default function Paper({ children, ...props }) {
  const { pt, p, pb, pl, pr } = props;
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{
        paddingTop: pt ? pt : 30,
        paddingLeft: pl ? pl : 30,
        paddingRight: pr ? pr : 30,
        paddingBottom: pb ? pb : 30,
        padding: p ? p : 30,
      }}
    >
      {children}
    </div>
  );
}
