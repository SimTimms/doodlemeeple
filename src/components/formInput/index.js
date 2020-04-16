import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const StyledTextField = withStyles({
  root: {
    margin: 3,
    width: '100%',
  },
})(TextField);

function FormInput(props) {
  const fieldValue = props.fieldValue;

  return (
    <StyledTextField
      id={props.fieldName}
      label={props.fieldTitle}
      value={fieldValue}
      onChange={(e) => {
        props.setFieldValue(e.target.value);
      }}
      type={props.type}
      margin="normal"
      variant="outlined"
      inputProps={props.inputProps}
      onKeyPress={props.onKeyPress}
    />
  );
}
export default FormInput;
