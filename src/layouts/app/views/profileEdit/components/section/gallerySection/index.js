import React, { useEffect } from 'react';
import { Divider, TextField, Typography, Icon } from '@material-ui/core';
import { MediaGalleryObject } from '../../mediaGalleryOject';
import { Mutation } from 'react-apollo';
import ReactPlayer from 'react-player';
import autosave from '../../../../../../../utils/autosave';
import { toast } from 'react-toastify';
import { toastStyles } from '../../../../../../../components/toast/styles';
import { useStyles } from './styles';
import { UPDATE_GALLERY_SECTION_MUTATION } from '../../../../../../../data/mutations';
import { DeleteButton } from '../deleteButton';
import { FieldTitle } from '../fieldTitle';
//import { NotableProject } from '../../notableProject';
//import { AddNotableProject } from '../../notableProject/addButton';
import Testimonials from '../../testimonials';
import Projects from '../../projects';
import { SaveButton } from '../saveButton';
import { TYPE_HELPER } from '../../../../../../../utils';

function SaveIcon() {
  const toastStyle = toastStyles();
  return (
    <Icon style={{ fontSize: 18 }} className={toastStyle.toastIcon}>
      save
    </Icon>
  );
}

function GallerySection({
  index,
  sections,
  setSections,
  section,
  autosaveIsOn,
}) {
  const classes = useStyles();
  const toastStyle = toastStyles();
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
          toast(<SaveIcon />, {
            className: toastStyle.toast,
            progressClassName: toastStyle.progress,
            bodyClassName: toastStyle.toastBody,
            autoClose: 2000,
            draggable: false,
            closeButton: false,
            hideProgressBar: true,
          });
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
                onChange={(ev) => {
                  setChanged(true);
                  autosaveIsOn && autosave(mutation, 'showreel');
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
                name="Portfolio"
                description="Choose your most impressive pieces of work, and try to think about what clients are looking for, such as piece of card art, box cover or spot illustration in a manual. Consider including an image that shows your process. Show your range if you're able to provide a variety of styles"
                warning=""
              />
              <MediaGalleryObject
                images={images}
                setImages={(newImages) => {
                  setChanged(true);
                  setImages(newImages);
                  autosaveIsOn && autosave(mutation, 'summary');
                }}
                index={index}
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
                {!autosaveIsOn && (
                  <SaveButton
                    sectionId={section.id}
                    sectionValues={sectionValues}
                    disabledValue={changed}
                    setDisabledValue={setChanged}
                    mutation={UPDATE_GALLERY_SECTION_MUTATION}
                  />
                )}
              </div>
            </div>
          );
        }}
      </Mutation>
    </div>
  );
}

export default GallerySection;
