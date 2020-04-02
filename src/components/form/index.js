import React from 'react';
import { styles } from './styles';

function Form(props) {
  const classes = styles();
  const { width } = props;

  return (
    <form
      className={classes.container}
      style={{ width: width ? width : '100%' }}
      noValidate
      autoComplete="off"
    >
      {props.children}
    </form>
  );
}

export default Form;
