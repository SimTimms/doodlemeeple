import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { styles } from './styles';

function BorderBox(props) {
  const mobile = useMediaQuery('(max-width:800px)');
  const classes = styles();
  const { w } = props;
  return (
    <div className={classes.root} style={{ maxWidth: w ? w : '100%' }}>
      <div className={classes.borderBox}>{props.children}</div>
    </div>
  );
}

export default BorderBox;
