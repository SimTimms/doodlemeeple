import React from 'react';
import { TextField, useMediaQuery } from '@material-ui/core';
import { DeleteButton } from './deleteButton';
import { useStyles } from './styles';
import { Uploader } from '../../../../../../components';
import clsx from 'clsx';

export function Testimonial({
  testimonial,
  setChanged,
  index,
  setTestimonials,
  testimonials,
  autosave,
}) {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');

  return (
    <div
      className={clsx({
        [classes.inputWrapper]: true,
        [classes.inputWrapperMobile]: mobile,
      })}
    >
      <div
        style={{
          background: testimonial.image
            ? `url(${testimonial.image}) center center/100% `
            : '#ddd',
        }}
        className={clsx({
          [classes.avatarWrapper]: true,
          [classes.avatarWrapperMobile]: mobile,
        })}
      >
        <Uploader
          cbImage={url => {
            setChanged(true);
            const copyArr = Object.assign([], testimonials);
            copyArr[index].image = url;
            autosave && autosave();
            setTestimonials(copyArr);
          }}
          styleOverride={null}
          cbDelete={() => {
            setChanged(true);
            autosave && autosave();
            const copyArr = Object.assign([], testimonials);
            copyArr[index].image = '';
            setTestimonials(copyArr);
          }}
          hasFile={testimonial.image !== '' || testimonial.image ? true : false}
          className={null}
          setImagePosition={null}
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
            autosave && autosave();
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
            autosave && autosave();
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
        autosave={() => {
          autosave && autosave();
        }}
      />
    </div>
  );
}
