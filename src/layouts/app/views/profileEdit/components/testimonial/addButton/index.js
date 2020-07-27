import React from 'react';
import { IconButton } from '../../../../../../../components';

export function AddTestimonial({
  setTestimonials,
  testimonials,
  setDisabled,
  disabled,
}) {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <IconButton
        title={`Add a Testimonial (${5 - testimonials.length})`}
        icon="add"
        styleOverride={{ marginBottom: 20 }}
        color="text-dark"
        disabled={false}
        onClickEvent={() => {
          const newObj = { summary: '', _id: 'new', image: '', name: '' };
          const copyArr = Object.assign([], testimonials);
          copyArr.push(newObj);
          setTestimonials(copyArr);
          setDisabled(true);
        }}
        iconPos="right"
        type="button"
      />
    </div>
  );
}
