import React from 'react';
import { Divider, Typography, Icon } from '@material-ui/core';
import { useSpring, animated } from 'react-spring';
import { ToastContainer, toast } from 'react-toastify';
import { useStyles } from './styles';
import ReactPlayer from 'react-player';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Card({ img }) {
  const classes = useStyles();
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <animated.div
      className={classes.card}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans),
        margin: 20,
        width: '40%',
        display: 'flex',
      }}
    >
      <img src={img} style={{ width: '100%', margin: 0 }} />
    </animated.div>
  );
}

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

  console.log(gallery);

  return (
    <div>
      <Divider />
      <ToastContainer />

      <div className={classes.sectionWrapper}>
        <div className={classes.sectionHeader}>
          <Typography
            variant="h1"
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}
          >
            <div
              style={{
                borderLeft: '20px solid #444',
                height: 5,
                marginRight: 10,
              }}
            ></div>
            {`${type[0].toUpperCase()}${type.slice(1)}`}{' '}
            <div
              style={{
                width: '100%',
                background: '#444',
                height: 5,
                marginLeft: 10,
              }}
            ></div>
          </Typography>
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
          <Typography
            variant="h6"
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}
          >
            <div
              style={{
                borderLeft: '20px solid #444',
                height: 5,
                marginRight: 10,
              }}
            ></div>
            Summary
          </Typography>
          <Typography
            variant="body1"
            component="p"
            style={{ padding: 30, width: '100%' }}
          >
            {summary}
          </Typography>
          <Typography
            variant="h6"
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}
          >
            <div
              style={{
                borderLeft: '20px solid #444',
                height: 5,
                marginRight: 10,
              }}
            ></div>
            Gallery
          </Typography>
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
          <Typography
            variant="h6"
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}
          >
            <div
              style={{
                borderLeft: '20px solid #444',
                height: 5,
                marginRight: 10,
              }}
            ></div>
            Testimonials
          </Typography>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {testimonials.map((item) => {
              console.log(item);
              return (
                <div
                  style={{
                    maxWidth: '500px',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  <div
                    style={{
                      backgroundImage: `url(${item.image}`,
                      width: 60,
                      height: 60,
                      backgroundSize: 'cover',

                      borderRadius: '50%',
                      border: '3px solid #ddd',
                    }}
                  ></div>
                  <div
                    style={{
                      borderRadius: 40,
                      padding: 15,
                      minWidth: 200,
                      marginLeft: 10,
                    }}
                  >
                    <Typography
                      variant="h5"
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {`"${item.summary}"`}
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        textAlign: 'center',
                      }}
                    >
                      {item.name}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
