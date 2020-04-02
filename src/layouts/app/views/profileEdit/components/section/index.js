import React, { useEffect } from 'react';
import { Divider, TextField, Typography, Icon } from '@material-ui/core';
import { SaveButton } from './saveButton';
import { DeleteButton } from './deleteButton';
import { NotableProject } from '../notableProject';
import { AddNotableProject } from '../notableProject/addButton';
import { AddTestimonial } from '../testimonial/addButton';
import { Testimonial } from '../testimonial';
import { useStyles } from './styles';
import {
  UPDATE_SECTION_MUTATION,
  UPDATE_GALLERY_SECTION_MUTATION,
} from '../../../../../../data/mutations';
import { FieldTitle } from './fieldTitle';
import { TYPE_HELPER } from '../../../../../../utils';
import 'react-toastify/dist/ReactToastify.css';

export function Section({ index, sections, setSections, section }) {
  const classes = useStyles();
  const [title, setTitle] = React.useState('loading...');
  const [summary, setSummary] = React.useState(section.summary);
  const [changed, setChanged] = React.useState(false);
  let sectionValues = { summary, title };

  useEffect(() => {
    setTitle(section.title);
    setSummary(section.summary);
  }, [section]);

  return (
    <div>
      <Divider />

      <div className={classes.sectionWrapper}>
        <TextField
          id={'title'}
          label={`Title ${title ? `(${46 - title.length})` : ''}`}
          inputProps={{ maxLength: 46 }}
          value={title}
          margin="normal"
          variant="outlined"
          style={{ width: '100%' }}
          onChange={ev => {
            setChanged(true);
            setTitle(ev.target.value);
          }}
        />
        <TextField
          id={'summary'}
          label={`Summary ${summary ? `(${46 - summary.length})` : ''}`}
          inputProps={{ maxLength: 46 }}
          value={summary}
          margin="normal"
          variant="outlined"
          style={{ width: '100%' }}
          onChange={ev => {
            setChanged(true);
            setSummary(ev.target.value);
          }}
        />
        <TextField
          id={'summary'}
          label={`Summary ${summary ? `(${46 - summary.length})` : ''}`}
          inputProps={{ maxLength: 46 }}
          value={summary}
          margin="normal"
          variant="outlined"
          style={{ width: '100%' }}
          onChange={ev => {
            setChanged(true);
            setSummary(ev.target.value);
          }}
        />
        <div className={classes.actionWrapper}>
          <DeleteButton
            sectionId={section.id}
            sections={sections}
            index={index}
            setSections={setSections}
          />
          <SaveButton
            sectionId={section.id}
            sectionValues={sectionValues}
            disabledValue={changed}
            setDisabledValue={setChanged}
            mutation={UPDATE_SECTION_MUTATION}
          />
        </div>
      </div>
    </div>
  );
}

export function EditorSection({
  index,
  sections,
  setSections,
  section,
  autosaveIsOn,
}) {
  const classes = useStyles();
  const [title, setTitle] = React.useState(section.title);
  const [type, setType] = React.useState(section.type);
  const [summary, setSummary] = React.useState(section.summary);
  const [showreel, setShowreel] = React.useState(section.showreel);
  const [images, setImages] = React.useState(section.gallery.images);
  const [notableProjects, setNotableProjects] = React.useState(
    section.notableProjects,
  );
  const [testimonials, setTestimonials] = React.useState(section.testimonials);
  const [changed, setChanged] = React.useState(false);

  const imageFilter = images.map(item => {
    return {
      img: item.img,
    };
  });
  let sectionValues = {
    summary,
    title,
    gallery: { images: imageFilter },
    notableProjects,
    testimonials,
    showreel,
    type,
  };

  const notableProjectsLength = notableProjects ? notableProjects.length : 0;
  const testimonialsLength = testimonials ? testimonials.length : 0;

  return (
    <div>
      <Divider />
      <div className={classes.sectionWrapper}>
        <DeleteButton
          sectionId={section.id}
          sections={sections}
          index={index}
          setSections={setSections}
        />
        <div className={classes.sectionHeader}>
          <div className={classes.sectionHeaderTitle}>
            <Icon color="primary" style={{ fontSize: 28, marginRight: 10 }}>
              brush
            </Icon>
            <Typography variant="h1" color="primary">
              {TYPE_HELPER(type)}
            </Typography>
          </div>
        </div>
        <FieldTitle
          name="Description"
          description=" This is an opportunity for you to shout about yourself! Describe your
          best genres, what it's like working with you, your work ethic,
          successes, and process. "
          warning="Please do not include any external links on your profile."
        />
        <TextField
          id={'summary'}
          label={`Description ${summary ? `(${256 - summary.length})` : ''}`}
          inputProps={{ maxLength: 256 }}
          multiline
          rows={3}
          value={summary}
          margin="normal"
          variant="outlined"
          style={{ width: '100%' }}
          onChange={ev => {
            setChanged(true);
            setSummary(ev.target.value.replace(/[^A-Za-z0-9 \n]/g, ''));
          }}
        />

        <FieldTitle
          name="Notable Projects"
          description="What have you worked on in the industry that will impress clients? Please specify your role within the project."
          warning=""
        />
        {notableProjects &&
          notableProjects.map((notableProject, index) => {
            return (
              <NotableProject
                notableProject={notableProject}
                setChanged={setChanged}
                index={index}
                setNotableProjects={setNotableProjects}
                notableProjects={notableProjects}
                key={`project_${index}`}
              />
            );
          })}
        {notableProjectsLength < 5 && (
          <AddNotableProject
            notableProjects={notableProjects}
            setNotableProjects={setNotableProjects}
          />
        )}

        <FieldTitle
          name="Testimonials"
          description="Ask for some references from previous clients to add to give your profile credibility. Please ask for permission from the referee. It's imperative that DoodleMeeple showcases the best in the industry, references will be spot checked by DoodleMeeple at random, please do not be offended if yours are."
          warning=""
        />
        <div
          className={classes.testimonialWrapper}
          style={{
            padding: testimonials ? (testimonials.length > 0 ? 20 : 0) : 0,
            paddingTop: testimonials ? (testimonials.length > 0 ? 10 : 0) : 0,
            paddingBottom: testimonials
              ? testimonials.length > 0
                ? 10
                : 0
              : 0,
          }}
        >
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
                />
              );
            })}
        </div>
        {testimonialsLength < 5 && (
          <AddTestimonial
            testimonials={testimonials}
            setTestimonials={setTestimonials}
          />
        )}
        <div className={classes.actionWrapper}>
          <SaveButton
            sectionId={section.id}
            sectionValues={sectionValues}
            disabledValue={changed}
            setDisabledValue={setChanged}
            mutation={UPDATE_GALLERY_SECTION_MUTATION}
          />
        </div>
      </div>
    </div>
  );
}
