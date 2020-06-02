import React, { useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { MediaGalleryObject } from '../../mediaGalleryOject';
import { Mutation } from 'react-apollo';
import ReactPlayer from 'react-player';
import autosave from '../../../../../../../utils/autosave';
import { toaster } from '../../../../../../../utils/toaster';
import { galleryStyles } from './styles';
import {
  UPDATE_GALLERY_SECTION_MUTATION,
  CREATE_GALLERY_SECTION_MUTATION,
} from '../../../../../../../data/mutations';
import { DeleteButton } from '../deleteButton';
import {
  FieldTitle,
  IconTitle,
  InlineHeader,
  Divider,
  SectionWrapper,
  DMCard,
} from '../../../../../../../components';
import Testimonials from '../../testimonials';
import Projects from '../../projects';
import clsx from 'clsx';
import { TYPE_HELPER } from '../../../../../../../utils';

function GallerySection({
  index,
  sections,
  setSections,
  section,
  autosaveIsOn,
}) {
  const classes = galleryStyles();
  const [title, setTitle] = React.useState('loading...');
  const [type, setType] = React.useState('loading...');
  const [summary, setSummary] = React.useState('loading...');
  const [showreel, setShowreel] = React.useState('loading...');
  const [images, setImages] = React.useState([]);
  const [notableProjects, setNotableProjects] = React.useState([]);
  const [testimonials, setTestimonials] = React.useState([]);
  const [deleting, setDeleting] = React.useState(false);

  const imageFilter = images.map((item) => {
    return {
      img: item.img,
    };
  });

  let sectionValues = {
    summary,
    title,
    gallery: { images: imageFilter },
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
    <Mutation
      mutation={
        section.id === 'new'
          ? CREATE_GALLERY_SECTION_MUTATION
          : UPDATE_GALLERY_SECTION_MUTATION
      }
      variables={{
        id: section.id,
        section: sectionValues,
      }}
      onCompleted={(data) => {
        const copyArr = Object.assign([], sections);
        if (section.id === 'new') {
          const indexProject = copyArr
            .map((item, index) => item.id === 'new' && index)
            .filter((item) => item !== false)[0];
          copyArr[indexProject ? indexProject : 0].id =
            data.createGallerySection;
        }
        setSections(copyArr);
        toaster('Section Created');
      }}
    >
      {(mutation) => {
        return (
          <SectionWrapper
            header={section.type}
            button={
              <DeleteButton
                sectionId={section.id}
                sections={sections}
                index={index}
                setSections={setSections}
                deleteAction={setDeleting}
              />
            }
          >
            <div
              className={clsx({
                [classes.deleteSection]: deleting,
              })}
            >
              <DMCard>
                <InlineHeader>
                  <IconTitle icon="brush" title={TYPE_HELPER(section.type)} />
                </InlineHeader>
                <div className={classes.sectionWrapper}>
                  <FieldTitle
                    name="Description"
                    description=" This is an opportunity for you to shout about yourself! Describe your
          best genres, what it's like working with you, your work ethic,
          successes, and process. "
                    warning="Please do not include any external links on your profile."
                    inline={false}
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
                      autosaveIsOn && autosave(mutation, 'summary');
                      setSummary(
                        ev.target.value.replace(/[^A-Za-z0-9 .,'\n]/g, ''),
                      );
                    }}
                  />
                  <div style={{ width: '100%' }}>
                    <Divider />
                    <FieldTitle
                      name="Featured Showreel"
                      description="Grab the attention of a client with a short video (we recommend about 30 seconds). Please enter the URL you'd like to embed,"
                      warning=""
                      inline={false}
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
                        autosaveIsOn && autosave(mutation, 'showreel');
                        setShowreel(ev.target.value);
                      }}
                    />
                    {showreel && (
                      <ReactPlayer
                        url={showreel}
                        playing
                        controls={true}
                        muted={true}
                        style={{ width: '100%' }}
                        width="100%"
                      />
                    )}
                  </div>
                </div>
              </DMCard>
              <DMCard>
                <InlineHeader>
                  <IconTitle
                    icon="collections"
                    title={`${TYPE_HELPER(section.type)} Portfolio`}
                  />
                </InlineHeader>
                <div className={classes.sectionWrapper}>
                  <FieldTitle
                    name="Gallery"
                    description="Choose your most impressive pieces of work, and try to think about what clients are looking for, such as piece of card art, box cover or spot illustration in a manual. Consider including an image that shows your process. Show your range if you're able to provide a variety of styles"
                    warning=""
                    inline={false}
                  />
                  <MediaGalleryObject
                    images={images}
                    setImages={(newImages) => {
                      setImages(newImages);
                      autosaveIsOn && autosave(mutation, 'summary');
                    }}
                    index={index}
                  />
                </div>
              </DMCard>
              <DMCard>
                <InlineHeader>
                  <IconTitle
                    icon="work"
                    title={`${TYPE_HELPER(section.type)} Projects`}
                  />
                </InlineHeader>
                <div className={classes.sectionWrapper}>
                  <Projects
                    projects={notableProjects}
                    setNotableProjects={setNotableProjects}
                    sectionId={section.id}
                    autosaveIsOn={autosaveIsOn}
                  />
                </div>
              </DMCard>
              <DMCard>
                <InlineHeader>
                  <IconTitle
                    icon="chat"
                    title={`${TYPE_HELPER(section.type)} Testimonials`}
                  />
                </InlineHeader>
                <div className={classes.sectionWrapper}>
                  <Testimonials
                    testimonials={testimonials}
                    setTestimonials={setTestimonials}
                    sectionId={section.id}
                  />
                </div>
              </DMCard>
            </div>
          </SectionWrapper>
        );
      }}
    </Mutation>
  );
}

export default GallerySection;
