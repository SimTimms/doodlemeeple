import React from 'react';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { SaveButton } from './saveButton';
import { DeleteButton } from './deleteButton';
import { NotableProject } from '../notableProject';
import { AddNotableProject } from '../notableProject/addButton';
import { AddTestimonial } from '../testimonial/addButton';
import { Testimonial } from '../testimonial';
import { useStyles } from './styles';
import { MediaGalleryObject } from '../mediaGalleryOject';
import {
  UPDATE_SECTION_MUTATION,
  UPDATE_GALLERY_SECTION_MUTATION,
} from '../../../../../../data/mutations';

export function Section({ index, sections, setSections, section }) {
  const classes = useStyles();
  const [title, setTitle] = React.useState(section.title);
  const [summary, setSummary] = React.useState(section.summary);
  const [changed, setChanged] = React.useState(false);

  let sectionValues = { summary, title };
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

export function GallerySection({ index, sections, setSections, section }) {
  const classes = useStyles();
  const [title, setTitle] = React.useState(section.title);
  const [summary, setSummary] = React.useState(section.summary);
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
  };

  const notableProjectsLength = notableProjects ? notableProjects.length : 0;
  const testimonialsLength = testimonials ? testimonials.length : 0;

  return (
    <div>
      <Divider />
      <div className={classes.sectionWrapper}>
        <div className={classes.sectionHeader}>
          <Icon color="secondary" style={{ fontSize: 42, marginRight: 10 }}>
            edit
          </Icon>
          <div>
            <Typography variant="h1" color="secondary">
              Artist
            </Typography>
            <Typography variant="h6" color="textPrimary">
              Fantasy, Sci-Fi, Character Design...
            </Typography>
          </div>
        </div>
        <TextField
          id={'title'}
          value={title}
          label={`Title ${title ? `(${46 - title.length})` : ''}`}
          inputProps={{ maxLength: 46 }}
          multiline
          margin="normal"
          variant="outlined"
          style={{ width: '300px' }}
          onChange={ev => {
            setChanged(true);
            setTitle(ev.target.value);
          }}
        />
        <TextField
          id={'summary'}
          label={`Description ${summary ? `(${256 - summary.length})` : ''}`}
          inputProps={{ maxLength: 256 }}
          multiline
          value={summary}
          margin="normal"
          variant="outlined"
          style={{ width: '100%' }}
          onChange={ev => {
            setChanged(true);
            setSummary(ev.target.value);
          }}
        />
        <Typography variant="h6" color="textPrimary" style={{ marginTop: 20 }}>
          Notable Projects
        </Typography>
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
        <Typography variant="h6" color="textPrimary" style={{ marginTop: 20 }}>
          Testimonials
        </Typography>
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
        {testimonialsLength < 5 && (
          <AddTestimonial
            testimonials={testimonials}
            setTestimonials={setTestimonials}
          />
        )}
        <MediaGalleryObject
          images={images}
          setImages={newImages => {
            setChanged(true);
            setImages(newImages);
          }}
          index={index}
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
            mutation={UPDATE_GALLERY_SECTION_MUTATION}
          />
        </div>
      </div>
    </div>
  );
}
