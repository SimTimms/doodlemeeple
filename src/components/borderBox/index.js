import React from 'react';
import { styles } from './styles';

function BorderBox(props) {
  const classes = styles();
  const { w, mb } = props;
  return (
    <div className={classes.root} style={{ maxWidth: w ? w : '100%' }}>
      <div
        className={classes.borderBox}
        style={{ marginBottom: mb !== null ? mb : 320 }}
      >
        {props.children}
      </div>
    </div>
  );
}

export default BorderBox;
