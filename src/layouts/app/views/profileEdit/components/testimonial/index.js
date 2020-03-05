import React from 'react';
import TextField from '@material-ui/core/TextField';
import { DeleteButton } from './deleteButton';
import { useStyles } from './styles';

export function Testimonial({
  testimonial,
  setChanged,
  index,
  setTestimonials,
  testimonials,
}) {
  const classes = useStyles();
  console.log(testimonial);
  return (
    <div className={classes.actionInputWrapper}>
      <TextField
        id={'testimonial'}
        label={`Testimonial ${
          testimonial.summary ? `(${56 - testimonial.summary.length})` : ''
        }`}
        inputProps={{ maxLength: 56 }}
        multiline
        value={testimonial.summary}
        margin="normal"
        variant="outlined"
        style={{ width: '100%' }}
        onChange={ev => {
          setChanged(true);
          const copyArr = Object.assign([], testimonials);
          copyArr[index].summary = ev.target.value;
          setTestimonials(copyArr);
        }}
      />
      <DeleteButton
        testimonialId={testimonial.id}
        testimonials={testimonials}
        index={index}
        setTestimonials={setTestimonials}
      />
    </div>
  );
}
