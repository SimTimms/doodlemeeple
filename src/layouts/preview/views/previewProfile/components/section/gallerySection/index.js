import React from 'react';
import { Divider, Typography, Icon } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import { useStyles } from './styles';
import ReactPlayer from 'react-player';
import { SubHeader, MainHeader, Card, Testimonials } from './components';

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
    <div>
      <Divider />
      <ToastContainer />

      <div className={classes.sectionWrapper}>
        <div className={classes.sectionHeader}>
          <MainHeader title={type} />
          {showreel && (
            <ReactPlayer
              url={showreel}
              playing
              controls={true}
              muted={true}
              style={{
                margin: 20,
                border: '10px solid #222',
                boxShadow: '5px 5px 40px rgba(0,0,0,0.3)',
                borderRadius: 5,
              }}
              config={{
                youtube: {
                  embedOptions: { modestbranding: 1, autoplay: 0 },
                  playerVars: { modestbranding: 1, autoplay: 0 },
                },
              }}
              width="100%"
            />
          )}
          <SubHeader title="Summary" />
          <Typography
            variant="body1"
            component="p"
            style={{ padding: 30, width: '100%' }}
          >
            {summary}
          </Typography>
          <SubHeader title="Gallery" />
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {gallery.images.map((item) => {
              return <Card img={`${item.img}`} />;
            })}
          </div>
          {testimonials.length > 0 && <SubHeader title="Testimonials" />}
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
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
