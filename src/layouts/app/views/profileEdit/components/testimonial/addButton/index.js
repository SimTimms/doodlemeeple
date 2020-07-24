import React from 'react';
import Button from '@material-ui/core/Button';
import { IconButton } from '../../../../../../../components';

export function AddTestimonial({ setTestimonials, testimonials, setShowAdd }) {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <IconButton
        title={`Add a Testimonial (${5 - testimonials.length})`}
        icon="add"
        styleOverride={{ marginBottom: 20 }}
        color="primary"
        disabled={false}
        onClickEvent={() => {
          const newObj = { summary: '', _id: 'new', image: '' };
          const copyArr = Object.assign([], testimonials);
          copyArr.push(newObj);
          setTestimonials(copyArr);
          setShowAdd(false);
        }}
        iconPos="right"
        type="button"
      />
    </div>
  );
}
