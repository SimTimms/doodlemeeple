import React, { useEffect } from 'react';
import { MediaGalleryObjectProfile } from '../../mediaGalleryOject';
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
  SectionWrapper,
  UnlockInfo,
  FieldBox,
  Column,
} from '../../../../../../../components';
import Testimonials from '../../testimonials';
import Projects from '../../projects';
import clsx from 'clsx';

function GallerySection({
  index,
  sections,
  setSections,
  section,
  autosaveIsOn,
  ...props
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
  const { setChanges, badges } = props;
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
        setChanges();
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
              style={{ width: '100%' }}
              className={clsx({
                [classes.deleteSection]: deleting,
              })}
            >
              <Column w="100%" p={10}>
                <FieldBox
                  value={summary}
                  title="Summary"
                  maxLength={256}
                  minLength={1}
                  onChangeEvent={(e) => {
                    autosave(mutation, 'summary');
                    setSummary(e);
                  }}
                  replaceMode="loose"
                  placeholder=""
                  info="This is an opportunity for you to shout about yourself! Describe your
                  best genres, what it's like working with you, your work ethic,
                  successes, and process. "
                  warning="Please do not include any external links on your profile."
                  size="s"
                  multiline={true}
                />

                {section._id === 'new' && (
                  <UnlockInfo str=" Start typing a summary to unlock more options" />
                )}
                {section._id !== 'new' && (
                  <div style={{ width: '100%' }}>
                    <FieldBox
                      value={showreel}
                      title="Showreel"
                      maxLength={256}
                      minLength={7}
                      onChangeEvent={(e) => {
                        autosave(mutation, 'summary');
                        setShowreel(e);
                      }}
                      replaceMode="none"
                      placeholder=""
                      info="Grab the attention of a client with a short video (we recommend about 30 seconds). Please enter the URL you'd like to embed, including https:// or http://."
                      warning=""
                      size="s"
                      multiline={false}
                    />
                    {showreel && (
                      <ReactPlayer
                        url={showreel}
                        playing
                        controls={true}
                        muted={true}
                        style={{
                          width: '100%',
                          marginTop: 20,
                          marginBottom: 20,
                          border: '10px solid #eee',
                          borderRadius: 10,
                          boxSizing: 'border-box',
                        }}
                        width="100%"
                      />
                    )}
                    <FieldTitle
                      name="Portfolio"
                      description="Choose your most impressive pieces of work, and try to think about what clients are looking for, such as piece of card art, box cover or spot illustration in a manual. Consider including an image that shows your process. Show your range if you're able to provide a variety of styles"
                      warning=""
                      inline={false}
                    />
                    <MediaGalleryObjectProfile
                      images={images}
                      setImages={(newImages) => {
                        setImages(newImages);
                      }}
                      index={index}
                      galleryId={section.gallery._id}
                      sectionType={section.type}
                      badges={badges}
                    />
                    <Projects
                      projects={notableProjects}
                      setNotableProjects={setNotableProjects}
                      sectionId={section._id}
                      autosaveIsOn={autosaveIsOn}
                    />
                    <Testimonials
                      testimonials={testimonials}
                      setTestimonials={setTestimonials}
                      sectionId={section._id}
                    />
                  </div>
                )}
              </Column>
            </div>
          </SectionWrapper>
        );
      }}
    </Mutation>
  );
}

export default GallerySection;
