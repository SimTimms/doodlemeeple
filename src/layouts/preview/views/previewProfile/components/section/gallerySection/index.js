import React from 'react';
import ReactPlayer from 'react-player';
import { Card, Testimonials, Projects } from './components';
import {
  ColumnWrapper,
  ColumnWrapperFull,
  HeaderThree,
  Text,
} from '../../../../../../../components';
import { TYPE_HELPER } from '../../../../../../../utils';

function GallerySection({ section }) {
  const {
    summary,
    gallery,
    notableProjects,
    testimonials,
    showreel,
    type,
  } = section;
  return section.id === 'new' ? (
    <div>New</div>
  ) : (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <ColumnWrapper>
        <HeaderThree str={TYPE_HELPER(type)} />
        <Text str={summary} />
      </ColumnWrapper>
      {showreel && (
        <ColumnWrapper>
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
      {gallery.images.length > 0 && (
        <ColumnWrapperFull>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              paddingLeft: 40,
              paddingRight: 40,
              boxSizing: 'border-box',
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
          <HeaderThree str="Testimonials" />
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginTop: 20,
            }}
          >
            <Testimonials testimonials={testimonials} />
          </div>
        </ColumnWrapper>
      )}
      {notableProjects.length > 0 && (
        <ColumnWrapper>
          <HeaderThree str="Projects" />
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
