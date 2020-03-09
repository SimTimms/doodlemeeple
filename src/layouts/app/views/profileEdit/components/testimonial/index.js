import React from 'react';
import TextField from '@material-ui/core/TextField';
import { DeleteButton } from './deleteButton';
import { useStyles } from './styles';
import { Uploader } from '../../../../../../components/uploader';

export function Testimonial({
  testimonial,
  setChanged,
  index,
  setTestimonials,
  testimonials,
}) {
  const classes = useStyles();

  return (
    <div className={classes.inputWrapper}>
      <div>
        <Uploader
          cbImage={url => {
            setChanged(true);
            const copyArr = Object.assign([], testimonials);
            copyArr[index].image = url;
            setTestimonials(copyArr);
          }}
          styleOverride={{
            background: testimonial.image
              ? `url(${testimonial.image})`
              : '#ddd',
            backgroundPosition: 'center center',
          }}
          cbDelete={() => {
            setChanged(true);
            const copyArr = Object.assign([], testimonials);
            copyArr[index].image = '';
            setTestimonials(copyArr);
          }}
          hasFile={testimonial.image !== '' || testimonial.image ? true : false}
          className={classes.avatarWrapper}
        />
      </div>
      <div className={classes.actionInputWrapper}>
        <TextField
          id={'testimonial'}
          label={`Testimonial ${
            testimonial.summary ? `(${126 - testimonial.summary.length})` : ''
          }`}
          inputProps={{ maxLength: 126 }}
          multiline
          value={testimonial.summary}
          margin="normal"
          variant="outlined"
          rowsMax={4}
          rows={4}
          style={{ width: '100%' }}
          onChange={ev => {
            setChanged(true);
            const copyArr = Object.assign([], testimonials);
            copyArr[index].summary = ev.target.value;
            setTestimonials(copyArr);
          }}
        />
        <TextField
          id={'name'}
          label={`Name ${
            testimonial.name ? `(${36 - testimonial.name.length})` : ''
          }`}
          inputProps={{ maxLength: 36 }}
          multiline
          value={testimonial.name}
          margin="normal"
          variant="outlined"
          style={{ width: '100%' }}
          onChange={ev => {
            setChanged(true);
            const copyArr = Object.assign([], testimonials);
            copyArr[index].name = ev.target.value;
            setTestimonials(copyArr);
          }}
        />
      </div>
      <DeleteButton
        testimonialId={testimonial.id}
        testimonials={testimonials}
        index={index}
        setTestimonials={setTestimonials}
      />
    </div>
  );
}
