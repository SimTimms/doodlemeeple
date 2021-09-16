import React from 'react';
import ReactPlayer from 'react-player';
import { Testimonials, Projects, Card } from './components';
import {
  Column,
  Divider,
  DividerMini,
  SubTitle,
  Grid,
  GridCard,
} from '../../../../components';
import { Typography } from '@material-ui/core';
import { TYPE_HELPER, randomKey } from '../../../../utils';

function GallerySection({ section }) {
  const { summary, gallery, notableProjects, testimonials, showreel, type } =
    section;
  return section.id === 'new' ? (
    <div>New</div>
  ) : (
    <Column>
      <Divider />
      <SubTitle title={TYPE_HELPER(type)} />
      <Column a="flex-start">
        <SubTitle title="Summary" short={true} />
        <Typography>{summary}</Typography>
      </Column>
      {showreel && (
        <Column a="flex-start">
          <SubTitle title="Showreel" short={true} />
          <DividerMini />
          <ReactPlayer
            url={showreel}
            playing
            controls={true}
            muted={true}
            style={{
              background: '#333',
              width: '100%',
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
        <Column a="flex-start">
          <Divider />
          <SubTitle title="Gallery" short={true} />
          <Divider />
          <Grid>
            {gallery.images.map((item, index) => {
              return (
                <GridCard key={`item_${randomKey()}`}>
                  <Card img={`${item.img}`} key={`img_${index}`} />
                </GridCard>
              );
            })}
          </Grid>
        </Column>
      )}
      {testimonials.length > 0 && (
        <Column a="flex-start">
          <Divider />
          <SubTitle title="Testimonials" short={true} />

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
        <Column a="flex-start">
          <Divider />
          <SubTitle title="Projects" short={true} />
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
    </Column>
  );
}

export default GallerySection;
