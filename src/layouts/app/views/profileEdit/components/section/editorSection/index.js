import React, { useEffect } from 'react';
import { Divider, TextField, Typography, Icon } from '@material-ui/core';
import { Mutation } from 'react-apollo';
import autosave from '../../../../../../../utils/autosave';
import { toaster } from '../../../../../../../utils/toaster';
import { useStyles } from './styles';
import { UPDATE_GALLERY_SECTION_MUTATION } from '../../../../../../../data/mutations';
import { DeleteButton } from '../deleteButton';
import { FieldTitle } from '../../../../../../../components';
import Testimonials from '../../testimonials';
import Projects from '../../projects';
import { SaveButton } from '../saveButton';
import { TYPE_HELPER } from '../../../../../../../utils';

function EditorSection({
  index,
  sections,
  setSections,
  section,
  autosaveIsOn,
}) {
  const classes = useStyles();
  const [title, setTitle] = React.useState('loading...');
  const [type, setType] = React.useState('loading...');
  const [summary, setSummary] = React.useState('loading...');
  const [showreel, setShowreel] = React.useState('loading...');
  const [images, setImages] = React.useState([]);
  const [notableProjects, setNotableProjects] = React.useState([]);
  const [testimonials, setTestimonials] = React.useState([]);
  const [changed, setChanged] = React.useState(false);

  const imageFilter = images.map((item) => {
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

  useEffect(() => {
    setTitle(section.title);
    setSummary(section.summary);
    setType(section.type);
    setShowreel(section.showreel);
    setImages(section.gallery.images);
    setNotableProjects(section.notableProjects);
    setTestimonials(section.testimonials);
  }, [section]);

  return (
    <div>
      <Divider />

      <Mutation
        mutation={UPDATE_GALLERY_SECTION_MUTATION}
        variables={{
          id: section.id,
          section: sectionValues,
        }}
        onCompleted={(data) => {
          toaster('Saved');
        }}
      >
        {(mutation) => {
          return (
            <div className={classes.sectionWrapper}>
              <DeleteButton
                sectionId={section.id}
                sections={sections}
                index={index}
                setSections={setSections}
              />
              <div className={classes.sectionHeader}>
                <div className={classes.sectionHeaderTitle}>
                  <Icon
                    color="primary"
                    style={{ fontSize: 28, marginRight: 10 }}
                  >
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
                label={`Description ${
                  summary ? `(${256 - summary.length})` : ''
                }`}
                inputProps={{ maxLength: 256 }}
                multiline
                rows={3}
                value={summary}
                margin="normal"
                variant="outlined"
                style={{ width: '100%' }}
                onChange={(ev) => {
                  setChanged(true);
                  autosaveIsOn && autosave(mutation, 'summary');
                  setSummary(ev.target.value.replace(/[^A-Za-z0-9 \n]/g, ''));
                }}
              />
              <FieldTitle
                name="Featured Showreel"
                description="Grab the attention of a client with a short video (we recommend about 30 seconds). Please enter the URL you'd like to embed,"
                warning=""
              />
              <Projects
                projects={notableProjects}
                setNotableProjects={setNotableProjects}
                setChanged={setChanged}
                sectionId={section.id}
                autosaveIsOn={autosaveIsOn}
              />
              <Testimonials
                testimonials={testimonials}
                setTestimonials={setTestimonials}
                setChanged={setChanged}
                sectionId={section.id}
              />
              <div className={classes.actionWrapper}>
                {/*!autosaveIsOn && (
                  <SaveButton
                    sectionId={section.id}
                    sectionValues={sectionValues}
                    disabledValue={changed}
                    setDisabledValue={setChanged}
                    mutation={UPDATE_GALLERY_SECTION_MUTATION}
                  />
                )*/}
              </div>
            </div>
          );
        }}
      </Mutation>
    </div>
  );
}

export default EditorSection;
