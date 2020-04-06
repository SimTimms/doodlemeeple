import React from 'react';
import { Divider, Typography, Icon } from '@material-ui/core';
import { useSpring, animated } from 'react-spring';
import { ToastContainer, toast } from 'react-toastify';
import { useStyles } from './styles';

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
  console.log(section);

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
          <Typography variant="h5" style={{ width: '100%', paddingLeft: 10 }}>
            {`${type[0].toUpperCase()}${type.slice(1)}`}
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
                borderLeft: '20px solid #ccc',
                height: 5,
                marginRight: 10,
              }}
            ></div>
            Summary
          </Typography>
          <Typography
            variant="body1"
            component="p"
            style={{ padding: '0 30px 0 30px', width: '100%' }}
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
                borderLeft: '20px solid #ccc',
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
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
