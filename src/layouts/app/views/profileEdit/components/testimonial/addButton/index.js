import React from 'react';
import Button from '@material-ui/core/Button';

export function AddTestimonial({ setTestimonials, testimonials, setShowAdd }) {
  return (
    <div style={{ width: '100%' }}>
      <Button
        onClick={() => {
          const newObj = { summary: '', _id: 'new', image: '' };
          const copyArr = Object.assign([], testimonials);
          copyArr.push(newObj);
          setTestimonials(copyArr);
          setShowAdd(false);
        }}
        color="primary"
        style={{ textTransform: 'none' }}
      >
        {`+ Add a Testimonial (${5 - testimonials.length})`}
      </Button>
    </div>
  );
}
