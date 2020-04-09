import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { useSpring, animated } from 'react-spring';

export function MainHeader({ title }) {
  const classes = useStyles();
  return (
    <Typography variant="h1" className={classes.mainHeader}>
      <div className={classes.mainHeaderBorder}></div>
      {`${title[0].toUpperCase()}${title.slice(1)}`}{' '}
      <div className={classes.mainHeaderBorderEnd}></div>
    </Typography>
  );
}

export function SubHeader({ title }) {
  const classes = useStyles();
  return (
    <Typography variant="h6" className={classes.subHeader}>
      <div className={classes.subHeaderBorder}></div>
      {title}
    </Typography>
  );
}

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export function Card({ img }) {
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

export function Testimonials({ testimonials }) {
  const classes = useStyles();
  const testimonialElements = testimonials.map((item) => {
    return item.summary ? (
      <div className={classes.testimonialWrapper}>
        {item.image && (
          <div
            className={classes.testimonialWrapperItem}
            style={{
              backgroundImage: `url(${item.image}`,
            }}
          ></div>
        )}

        <div className={classes.testimonialSummaryWrapper}>
          <Typography variant="h5" className={classes.testimonialSummary}>
            {`"${item.summary}"`}
          </Typography>
          <Typography variant="body1" className={classes.testimonialName}>
            {item.name}
          </Typography>
        </div>
      </div>
    ) : null;
  });

  return (
    <div className={classes.testimonialWrapperParent}>
      {testimonialElements}
    </div>
  );
}

export function Projects({ projects }) {
  const classes = useStyles();
  const projectElements = projects.map((item) => {
    return item.summary ? (
      <div className={classes.projectWrapper}>
        {item.image && (
          <div
            className={classes.projectWrapperItem}
            style={{
              backgroundImage: `url(${item.image}`,
              backgroundSize: 'cover',
            }}
          >
            <Typography variant="h5" className={classes.projectName}>
              {item.name}
            </Typography>
          </div>
        )}

        <div className={classes.testimonialSummaryWrapper}>
          <Typography variant="body1" className={classes.testimonialSummary}>
            {`${item.summary}`}
          </Typography>
        </div>
      </div>
    ) : null;
  });

  return <div className={classes.projectWrapperParent}>{projectElements}</div>;
}
