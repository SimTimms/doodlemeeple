import React from 'react';
import { styles } from './styles';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';

export function Form(props) {
  const classes = styles();
  const { width } = props;

  return (
    <form
      className={clsx(classes.container)}
      style={{ width: width ? width : '100%' }}
      noValidate
      autoComplete="off"
    >
      {props.children}
    </form>
  );
}

const StyledTextField = withStyles({
  root: {
    margin: 3,
    width: '100%',
  },
})(TextField);

export function FormInput(props) {
  const fieldValue = props.fieldValue;

  return (
    <StyledTextField
      id={props.fieldName}
      label={props.fieldTitle}
      value={fieldValue}
      onChange={e => {
        props.setFieldValue(e.target.value);
      }}
      margin="normal"
      variant="outlined"
    />
  );
}
