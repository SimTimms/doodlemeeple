import React from 'react';
import { Button, Icon } from '@material-ui/core';
import { Mutation } from 'react-apollo';
import { REMOVE_TESTIMONIAL_MUTATION } from '../../../../../../../data/mutations';

export function DeleteButton({
  index,
  testimonials,
  setTestimonials,
  testimonialId,
  autosave,
}) {
  return (
    <Mutation
      mutation={REMOVE_TESTIMONIAL_MUTATION}
      variables={{
        id: testimonialId,
      }}
    >
      {(RemoveTestimonialMutation) => {
        return (
          <Button
            onClick={() => {
              testimonialId !== 'new' && RemoveTestimonialMutation();
              let copyArr = Object.assign([], testimonials);
              copyArr.splice(index, 1);
              testimonialId !== 'new' &&
                autosave &&
                autosave(RemoveTestimonialMutation);
              setTestimonials(copyArr);
            }}
            variant="contained"
            style={{
              margin: 3,
              boxShadow: 'none',
              marginLeft: 10,
              minWidth: 32,
              maxWidth: 32,
              minHeight: 32,
              maxHeight: 32,
              borderRadius: '50%',
            }}
          >
            <Icon style={{ fontSize: 18, color: '#fff' }}>delete</Icon>
          </Button>
        );
      }}
    </Mutation>
  );
}
