import React from 'react';
import { useStyles } from './styles';
import { FormInput } from '../../../../../components';

export function ProjectComponent({ fieldValue, setFieldValue, title, width }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper} style={{ width: width }}>
      <FormInput
        fieldName={'title'}
        fieldTitle={title}
        fieldValue={fieldValue}
        setFieldValue={setFieldValue}
        style={{ width: '100%' }}
      />
    </div>
  );
}
