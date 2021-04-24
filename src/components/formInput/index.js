import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './styles';

export default function FormInput(props) {
  const fieldValue = props.fieldValue;
  const classes = useStyles();

  return (
    <TextField
      id={props.fieldName}
      label={props.fieldTitle}
      value={fieldValue}
      onChange={(e) => {
        props.setFieldValue(e.target.value);
      }}
      type={props.type}
      margin="normal"
      variant="standard"
      inputProps={props.inputProps}
      onKeyPress={props.onKeyPress}
      InputProps={{
        className: classes.container,
      }}
    />
  );
}
