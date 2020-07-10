import React from 'react';
import { Mutation } from 'react-apollo';
import { REMOVE_TESTIMONIAL_MUTATION } from '../../../../../../../data/mutations';
import { DeleteButton } from '../../../../../../../components';

export default function DeleteButtonTestimonial({
  onClickEvent,
  testimonialId,
}) {
  return (
    <Mutation
      mutation={REMOVE_TESTIMONIAL_MUTATION}
      variables={{
        id: testimonialId,
      }}
    >
      {(mutation) => {
        return (
          <DeleteButton
            mutation={() => {
              onClickEvent();
              mutation();
            }}
            str=""
          />
        );
      }}
    </Mutation>
  );
}
