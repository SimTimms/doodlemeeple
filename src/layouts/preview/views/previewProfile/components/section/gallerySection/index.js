import React from 'react';
import { useStyles } from './styles';
import ReactPlayer from 'react-player';
import { Card, Testimonials, Projects } from './components';
import {
  ColumnWrapper,
  ColumnWrapperFull,
  HeaderTwo,
  Text,
} from '../../../../../../../components';

function GallerySection({ section }) {
  const classes = useStyles();

  const {
    summary,
    gallery,
    notableProjects,
    testimonials,
    showreel,
    type,
  } = section;

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {showreel && (
        <ColumnWrapper>
          <HeaderTwo str="Feature" />
          <ReactPlayer
            url={showreel}
            playing
            controls={true}
            muted={true}
            style={{
              background: '#333',
              width: '100%',
              marginTop: 20,
            }}
            config={{
              youtube: {
                embedOptions: { modestbranding: 1, autoplay: 0 },
                playerVars: { modestbranding: 1, autoplay: 0 },
              },
            }}
            width="100%"
          />
        </ColumnWrapper>
      )}

      <ColumnWrapper>
        <HeaderTwo str="About my Art" />
        <Text str={summary} />
      </ColumnWrapper>
      {gallery.images.length > 0 && (
        <ColumnWrapperFull>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              paddingLeft: 40,
              paddingRight: 40,
              boxSizing: 'border-box',
              border: '5px solid #efeff5',
            }}
          >
            {gallery.images.map((item, index) => {
              return <Card img={`${item.img}`} key={`img_${index}`} />;
            })}
          </div>
        </ColumnWrapperFull>
      )}
      {testimonials.length > 0 && (
        <ColumnWrapper>
          <HeaderTwo str="Testimonials" />
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Testimonials testimonials={testimonials} />
          </div>
        </ColumnWrapper>
      )}
      {notableProjects.length > 0 && (
        <ColumnWrapper>
          <HeaderTwo str="Projects" />
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Projects projects={notableProjects} />
          </div>
        </ColumnWrapper>
      )}
    </div>
  );
}

export default GallerySection;
