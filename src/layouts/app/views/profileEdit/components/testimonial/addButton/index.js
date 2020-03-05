import React from 'react';
import Button from '@material-ui/core/Button';

export function AddTestimonial({ setTestimonials, testimonials }) {
  return (
    <div style={{ width: '100%' }}>
      <Button
        onClick={() => {
          const newObj = { summary: '', id: 'new' };
          const copyArr = Object.assign([], testimonials);
          copyArr.push(newObj);
          setTestimonials(copyArr);
        }}
        color="secondary"
        style={{ textTransform: 'none' }}
      >
        {`+ Add a Testimonial (${5 - testimonials.length})`}
      </Button>
    </div>
  );
}
