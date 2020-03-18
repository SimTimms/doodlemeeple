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
import { FieldTitle } from './fieldTitle';
import ReactPlayer from 'react-player';
import { TYPE_HELPER } from '../../../../../../utils';

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
          name="Portfolio"
          description="Choose your most impressive pieces of work, and try to think about what clients are looking for, such as piece of card art, box cover or spot illustration in a manual. Consider including an image that shows your process. Show your range if you're able to provide a variety of styles"
          warning=""
        />
        <MediaGalleryObject
          images={images}
          setImages={newImages => {
            setChanged(true);
            setImages(newImages);
          }}
          index={index}
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
          name="Featured Showreel"
          description="Grab the attention of a client with a short video (we recommend about 30 seconds). Please enter the URL you'd like to embed,"
          warning=""
        />
        <TextField
          id={'showreel'}
          label={`YouTube, Vimeo URL ${
            showreel ? `(${256 - showreel.length})` : ''
          }`}
          inputProps={{ maxLength: 256 }}
          value={showreel}
          margin="normal"
          variant="outlined"
          style={{ width: '100%', marginTop: 10 }}
          onChange={ev => {
            setChanged(true);
            setShowreel(ev.target.value);
          }}
        />

        {showreel ? (
          <ReactPlayer
            url={showreel}
            playing
            controls={true}
            muted={true}
            style={{ width: '100%' }}
            width="100%"
          />
        ) : (
          <div
            style={{
              width: '100%',
              background: '#222',
              height: 340,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Icon style={{ color: '#fff' }}>videocam_off</Icon>{' '}
          </div>
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
