import React, { useEffect } from 'react';
import { FieldTitle } from '../../../../../../components';
import { useStyles } from './styles';
import { AddTestimonial } from '../testimonial/addButton';
import { Testimonial } from '../testimonial';

function Testimonials({ testimonials, setTestimonials, sectionId }) {
  const classes = useStyles();
  const [disabled, setDisabled] = React.useState(true);

  useEffect(() => {
    const newProj = testimonials.filter((item) => item._id === 'new');
    newProj.length === 0 && setDisabled(false);
  }, [testimonials]);

  return (
    <div style={{ width: '100%' }}>
      <FieldTitle
        name="Testimonials"
        description={`Ask for some references from previous clients to add to give your profile credibility. Please ask for permission from the referee. It's imperative that ${process.env.REACT_APP_COMPANY_PUBLIC_NAME} showcases the best in the industry, references will be spot checked by ${process.env.REACT_APP_COMPANY_PUBLIC_NAME} at random, please do not be offended if yours are.`}
        warning=""
        inline={false}
      />

      <div className={classes.testimonialWrapper}>
        {testimonials &&
          testimonials.map((testimonial, index) => {
            return (
              <Testimonial
                testimonial={testimonial}
                index={index}
                setTestimonials={setTestimonials}
                testimonials={testimonials}
                key={`testimonial_${index}`}
                sectionId={sectionId}
                setDisabled={setDisabled}
              />
            );
          })}
      </div>

      {testimonials.length < 5 && !disabled && (
        <AddTestimonial
          testimonials={testimonials}
          setTestimonials={setTestimonials}
          setDisabled={setDisabled}
          disabled={disabled}
        />
      )}
    </div>
  );
}

export default Testimonials;
