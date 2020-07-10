import React from 'react';
import { TextField, useMediaQuery } from '@material-ui/core';
import DeleteButtonTestimonial from './deleteButton';
import { useStyles } from './styles';
import { Uploader, Row, IconButton } from '../../../../../../components';
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

  return testimonial._id === 'new' ? (
    <Mutation
      mutation={CREATE_TESTIMONIAL}
      variables={{
        name: testimonial.name,
        summary: testimonial.summary,
        image: testimonial.image,
        sectionId,
      }}
      onCompleted={(data) => {
        toaster('Autosave');

        const copyArr = Object.assign([], testimonials);
        if (testimonial._id === 'new') {
          const indexProject = copyArr
            .map((item, index) => item._id === 'new' && index)
            .filter((item) => item !== false)[0];
          copyArr[indexProject ? indexProject : 0]._id =
            data.testimonialCreateOne.recordId;
        }
        setTestimonials(copyArr);
      }}
    >
      {(mutation) => {
        return (
          <Row>
            <TextField
              id={'name'}
              label={`Who recommended you? ${
                testimonial.name ? `(${56 - testimonial.name.length})` : ''
              }`}
              inputProps={{ maxLength: 56 }}
              multiline
              value={testimonial.name}
              margin="normal"
              variant="outlined"
              style={{ width: '100%' }}
              onChange={(ev) => {
                const copyArr = Object.assign([], testimonials);
                copyArr[index].name = ev.target.value.substring(0, 36);
                setTestimonials(copyArr);
              }}
            />
            <IconButton
              title="Create"
              onClickEvent={mutation}
              styleOverride={{ marginTop: 16 }}
              icon="chevron_right"
              iconPos="right"
              disabled={false}
              color="primary"
              type="button"
            />
          </Row>
        );
      }}
    </Mutation>
  ) : (
    <Mutation
      mutation={UPDATE_TESTIMONIAL}
      variables={{
        name: testimonial.name,
        summary: testimonial.summary,
        image: testimonial.image,
        testimonialId: testimonial._id,
      }}
      onCompleted={(data) => {
        toaster('Autosave');
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
                  autosave(mutation, 'project');
                  setTestimonials(copyArr);
                }}
                styleOverride={null}
                cbDelete={() => {
                  const copyArr = Object.assign([], testimonials);
                  copyArr[index].image = '';
                  autosave(mutation, 'project');
                  setTestimonials(copyArr);
                }}
                hasFile={
                  testimonial.image !== '' || testimonial.image ? true : false
                }
                className={null}
                size="1MB PNG JPG"
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
            <DeleteButtonTestimonial
              onClickEvent={() => {
                let copyArr = Object.assign([], testimonials);
                copyArr.splice(index, 1);
                setShowAdd(true);
                setTestimonials(copyArr);
              }}
              testimonialId={testimonial._id}
            />
          </div>
        );
      }}
    </Mutation>
  );
}
