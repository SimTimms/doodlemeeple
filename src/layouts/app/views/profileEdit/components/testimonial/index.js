import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import DeleteButtonTestimonial from './deleteButton';
import { useStyles } from './styles';
import {
  Uploader,
  Row,
  Column,
  IconButton,
  FieldBox,
} from '../../../../../../components';
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
  setDisabled,
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
          <div
            style={{
              width: '100%',
              background: '#fff',
              padding: 5,
              boxSizing: 'border-box',
              marginBottom: 5,
              marginTop: 5,
            }}
          >
            <Column align="center" justify="center">
              <FieldBox
                value={testimonial.name}
                title="From Who?"
                maxLength={66}
                onChangeEvent={(e) => {
                  const copyArr = Object.assign([], testimonials);
                  copyArr[index].name = e;
                  setTestimonials(copyArr);
                }}
                replaceMode="loose"
                placeholder="Example: Juliet Jones, Games Workshop, Will Riker"
                info="Who gave you this testimonial"
                warning=""
                size="s"
                multiline={false}
              />
              <IconButton
                title="Create"
                onClickEvent={mutation}
                icon="check"
                iconPos="right"
                disabled={testimonial.name.length < 1}
                color="primary"
                type="button"
                styleOverride={{
                  width: 200,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
            </Column>
          </div>
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
            <Row>
              <Column justify="center" align="center">
                <FieldBox
                  value={testimonial.summary}
                  title="Testimonial"
                  maxLength={126}
                  onChangeEvent={(e) => {
                    const copyArr = Object.assign([], testimonials);
                    copyArr[index].name = e;
                    setTestimonials(copyArr);
                  }}
                  replaceMode="loose"
                  placeholder="Example: Tim does the best post-impressionist zombie paintings"
                  info="What did this person say about you?"
                  warning=""
                  size="s"
                  multiline={true}
                />
                <FieldBox
                  value={testimonial.name}
                  title="From Who?"
                  maxLength={66}
                  onChangeEvent={(e) => {
                    const copyArr = Object.assign([], testimonials);
                    copyArr[index].name = e;
                    setTestimonials(copyArr);
                  }}
                  replaceMode="loose"
                  placeholder="Example: Juliet Jones, Games Workshop, Will Riker"
                  info="Who gave you this testimonial"
                  warning=""
                  size="s"
                  multiline={false}
                />
              </Column>
              <div
                style={{
                  background: testimonial.image
                    ? `url(${testimonial.image}) center center/cover`
                    : '#fff',
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
              <DeleteButtonTestimonial
                onClickEvent={() => {
                  let copyArr = Object.assign([], testimonials);
                  copyArr.splice(index, 1);
                  setDisabled(true);
                  setTestimonials(copyArr);
                }}
                testimonialId={testimonial._id}
              />
            </Row>
          </div>
        );
      }}
    </Mutation>
  );
}
