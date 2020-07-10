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
  Column,
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

  const imageFilter =
    images !== undefined
      ? images.map((item) => {
          return {
            img: item.img,
          };
        })
      : [];
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
    setImages(section.gallery.images ? section.gallery.images : []);
    setNotableProjects(section.notableProjects);
    setTestimonials(section.testimonials);
  }, [section]);

  return (
    <Mutation
      mutation={
        section._id === 'new'
          ? CREATE_GALLERY_SECTION_MUTATION
          : UPDATE_GALLERY_SECTION_MUTATION
      }
      variables={{
        ...sectionValues,
        galleryId: section._id,
      }}
      onCompleted={(data) => {
        const copyArr = Object.assign([], sections);
        if (section._id === 'new') {
          const indexProject = copyArr
            .map((section, index) => section._id === 'new' && index)
            .filter((section) => section !== false)[0];
          copyArr[indexProject ? indexProject : 0]._id =
            data.sectionCreateOne.recordId;
          copyArr[indexProject ? indexProject : 0].gallery._id =
            data.sectionCreateOne.record.gallery._id;
        }
        setSections(copyArr);
        toaster('Saved');
      }}
    >
      {(mutation) => {
        return (
          <SectionWrapper
            header={section.type}
            button={
              <DeleteButton
                sectionId={section._id}
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
                    name="About you & your art"
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
                        ev.target.value
                          .substring(0, 256)
                          .replace(/[^A-Za-z0-9 .,'\n]/g, '')
                      );
                    }}
                  />
                  {section._id !== 'new' && (
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
                          autosave(mutation, 'showreel');
                          setShowreel(ev.target.value.substring(0, 256));
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
                  )}
                </div>
              </DMCard>
              {section._id !== 'new' && (
                <Column>
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
                        }}
                        index={index}
                        galleryId={section.gallery._id}
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
                        sectionId={section._id}
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
                        sectionId={section._id}
                      />
                    </div>
                  </DMCard>
                </Column>
              )}
            </div>
          </SectionWrapper>
        );
      }}
    </Mutation>
  );
}

export default GallerySection;
