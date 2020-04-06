import React from 'react';
import { TextField, useMediaQuery } from '@material-ui/core';
import { DeleteButton } from './deleteButton';
import { useStyles } from './styles';
import { Uploader } from '../../../../../../components';
import { UPDATE_TESTIMONIAL } from '../../../../../../data/mutations';
import { Mutation } from 'react-apollo';
import clsx from 'clsx';
import autosave from '../../../../../../utils/autosave';

export function Testimonial({
  testimonial,
  setChanged,
  index,
  setTestimonials,
  testimonials,
  sectionId,
}) {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');

  return (
    <Mutation
      mutation={UPDATE_TESTIMONIAL}
      variables={{
        testimonial: testimonial,
        sectionId,
      }}
      onCompleted={data => {}}
    >
      {mutation => {
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

                  setTestimonials(copyArr);
                }}
                styleOverride={null}
                cbDelete={() => {
                  setChanged(true);
                  const copyArr = Object.assign([], testimonials);
                  copyArr[index].image = '';
                  setTestimonials(copyArr);
                }}
                hasFile={
                  testimonial.image !== '' || testimonial.image ? true : false
                }
                className={null}
                setImagePosition={null}
              />
            </div>
            <div className={classes.actionInputWrapper}>
              <TextField
                id={'testimonial'}
                label={`Testimonial ${
                  testimonial.summary
                    ? `(${126 - testimonial.summary.length})`
                    : ''
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

                  autosave(mutation, 'testimonial');
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
              autosave={autosave && autosave}
            />
          </div>
        );
      }}
    </Mutation>
  );
}
