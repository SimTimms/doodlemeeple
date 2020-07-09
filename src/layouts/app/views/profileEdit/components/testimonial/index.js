import React from 'react';
import { TextField, useMediaQuery } from '@material-ui/core';
import { DeleteButton } from './deleteButton';
import { useStyles } from './styles';
import { Uploader } from '../../../../../../components';
import {
  UPDATE_TESTIMONIAL,
  CREATE_TESTIMONIAL,
} from '../../../../../../data/mutations';
import { Mutation } from 'react-apollo';
import clsx from 'clsx';
import autosave from '../../../../../../utils/autosave';
import { toaster } from '../../../../../../utils/toaster';

export function Testimonial({
  testimonial,
  index,
  setTestimonials,
  testimonials,
  sectionId,
  setShowAdd,
}) {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');

  return (
    <Mutation
      mutation={
        testimonial.id === 'new' ? CREATE_TESTIMONIAL : UPDATE_TESTIMONIAL
      }
      variables={{
        testimonial: testimonial,
        sectionId,
      }}
      onCompleted={(data) => {
        toaster('Saved');

        const copyArr = Object.assign([], testimonials);
        if (testimonial.id === 'new') {
          const indexProject = copyArr
            .map((item, index) => item.id === 'new' && index)
            .filter((item) => item !== false)[0];
          copyArr[indexProject ? indexProject : 0].id = data.createTestimonial;
        }
        setTestimonials(copyArr);
      }}
    >
      {(mutation) => {
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
                  ? `url(${testimonial.image}) center center/cover`
                  : '#ddd',
              }}
              className={clsx({
                [classes.avatarWrapper]: true,
                [classes.avatarWrapperMobile]: mobile,
              })}
            >
              <Uploader
                cbImage={(url) => {
                  const copyArr = Object.assign([], testimonials);
                  copyArr[index].image = url;

                  setTestimonials(copyArr);
                }}
                styleOverride={null}
                cbDelete={() => {
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
                onChange={(ev) => {
                  autosave(mutation, 'testimonial');
                  const copyArr = Object.assign([], testimonials);
                  copyArr[index].summary = ev.target.value.substring(0, 126);
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
                onChange={(ev) => {
                  autosave && autosave(mutation);
                  const copyArr = Object.assign([], testimonials);
                  copyArr[index].name = ev.target.value.substring(0, 36);
                  setTestimonials(copyArr);
                }}
              />
            </div>
            <DeleteButton
              testimonialId={testimonial.id}
              testimonials={testimonials}
              index={index}
              setTestimonials={setTestimonials}
              setShowAdd={setShowAdd}
            />
          </div>
        );
      }}
    </Mutation>
  );
}
