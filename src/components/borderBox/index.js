import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { styles } from './styles';

function BorderBox(props) {
  const mobile = useMediaQuery('(max-width:800px)');
  const classes = styles();
  return (
    <div className={classes.root}>
      <div className={classes.borderBox}>{props.children}</div>
    </div>
  );
}

export default BorderBox;
