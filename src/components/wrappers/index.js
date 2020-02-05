import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 20,
    borderTop: '1px solid #ddd',
    background: '#eee',
  },
});

export function CardActionArea({ children }) {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
}
