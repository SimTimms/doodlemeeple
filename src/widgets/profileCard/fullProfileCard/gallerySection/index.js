import React from 'react';
import ReactPlayer from 'react-player';
import { Card, Testimonials, Projects } from './components';
import {
  ColumnWrapperFull,
  Column,
  Divider,
  Text,
} from '../../../../components';
import { Typography } from '@material-ui/core';

import { TYPE_HELPER } from '../../../../utils';

function GallerySection({ section }) {
  const { summary, gallery, notableProjects, testimonials, showreel, type } =
    section;
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
        marginTop: 20,
      }}
    >
      <Column w={400} bg="#ddd">
        <Typography style={{ color: '#222', padding: 5 }}>
          {TYPE_HELPER(type)}
        </Typography>
      </Column>
      <Column>
        <Text str={summary} />
        <Divider />
      </Column>
      {showreel && (
        <Column>
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
        </Column>
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
        <Column>
          <Column w={400} bg="#ddd">
            <Typography style={{ color: '#222', padding: 5 }}>
              Testimonials
            </Typography>
          </Column>

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
        </Column>
      )}
      {notableProjects.length > 0 && (
        <Column>
          <Column w={400} bg="#ddd" m="20px 0 0 0">
            <Typography style={{ color: '#222', padding: 5 }}>
              Projects
            </Typography>
          </Column>
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
        </Column>
      )}
    </div>
  );
}

export default GallerySection;
