import React from 'react';
import { FieldTitle } from '../section/fieldTitle';
import { useStyles } from './styles';
import { AddTestimonial } from '../testimonial/addButton';
import { Testimonial } from '../testimonial';

function Testimonials({
  testimonials,
  setChanged,
  setTestimonials,
  sectionId,
}) {
  const classes = useStyles();

  return (
    <div style={{ width: '100%' }}>
      <FieldTitle
        name="Testimonials"
        description="Ask for some references from previous clients to add to give your profile credibility. Please ask for permission from the referee. It's imperative that DoodleMeeple showcases the best in the industry, references will be spot checked by DoodleMeeple at random, please do not be offended if yours are."
        warning=""
      />

      <div className={classes.testimonialWrapper}>
        {testimonials &&
          testimonials.map((testimonial, index) => {
            return (
              <Testimonial
                testimonial={testimonial}
                setChanged={setChanged}
                index={index}
                setTestimonials={setTestimonials}
                testimonials={testimonials}
                key={`testimonial_${index}`}
                sectionId={sectionId}
              />
            );
          })}
      </div>

      {testimonials.length < 5 && (
        <AddTestimonial
          testimonials={testimonials}
          setTestimonials={setTestimonials}
        />
      )}
    </div>
  );
}

export default Testimonials;
