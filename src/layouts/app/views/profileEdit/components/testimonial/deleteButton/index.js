import React from 'react';
import Button from '@material-ui/core/Button';
import { Mutation } from 'react-apollo';
import { REMOVE_TESTIMONIAL_MUTATION } from '../../../../../../../data/mutations';

export function DeleteButton({
  index,
  testimonials,
  setTestimonials,
  testimonialId,
}) {
  return (
    <Mutation
      mutation={REMOVE_TESTIMONIAL_MUTATION}
      variables={{
        id: testimonialId,
      }}
    >
      {RemoveTestimonialMutation => {
        return (
          <Button
            color="secondary"
            onClick={() => {
              testimonialId !== 'new' && RemoveTestimonialMutation();
              let copyArr = Object.assign([], testimonials);
              copyArr.splice(index, 1);
              setTestimonials(copyArr);
            }}
          >
            Remove
          </Button>
        );
      }}
    </Mutation>
  );
}
