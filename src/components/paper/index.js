import React from 'react';
import { useStyles } from './styles';

export default function Paper({ children, ...props }) {
  const { pt, p, pb, pl, pr, w } = props;
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{
        paddingTop: pt ? pt : p ? p : 30,
        paddingLeft: pl ? pl : p ? p : 30,
        paddingRight: pr ? pr : p ? p : 30,
        paddingBottom: pb ? pb : p ? p : 30,
        width: w ? w : '100%',
      }}
    >
      {children}
    </div>
  );
}
