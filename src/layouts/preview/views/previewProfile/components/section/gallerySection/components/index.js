import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

function titleReplace(titleIn) {
  const titleOut = titleIn === 'graphic-artist' ? 'Graphic Artist' : 'Artist';
  return titleOut;
}
export function MainHeader({ title }) {
  const classes = useStyles();
  return (
    <Typography variant="h1" className={classes.mainHeader}>
      <div className={classes.mainHeaderBorder}></div>
      <div className={classes.mainHeaderText}>{titleReplace(title)}</div>
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

export function Card({ img }) {
  return (
    <div
      style={{
        display: 'flex',
        width: '33.3%',
        height: 300,
        boxSizing: 'border-box',
        position: 'relative',
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        border: '10px solid rgba(255,255,255,1)',
        backgroundColor: 'rgba(255,255,255,0.5)',
      }}
    >
      {/*
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => {
          set({ xys: [0, 0, 1] });
        }}
        className={clsx({
          [classes.card]: true,
          [classes.cardMobile]: mobile,
        })}
        style={{
          transform: props.xys.interpolate(trans),
          margin: 20,
          height: '100%',
        }}
      >
        <img
          src={img}
          style={{ width: '100%', margin: 0 }}
          alt="Gallery Card"
        />
      </animated.div>*/}
    </div>
  );
}

export function Testimonials({ testimonials }) {
  const classes = useStyles();
  const testimonialElements = testimonials.map((item) => {
    return item.summary ? (
      <div className={classes.testimonialWrapper}>
        {item.image && (
          <div
            style={{
              backgroundImage: `url(${item.image}`,
            }}
            className={classes.testimonialWrapperItem}
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
  const projectElements = projects.map((item, index) => {
    return item.name ? (
      <div className={classes.projectWrapper} key={`project_${index}`}>
        {item.image && (
          <div
            className={classes.projectWrapperItem}
            style={{
              backgroundImage: `url(${item.image}`,
              backgroundSize: 'cover',
            }}
          ></div>
        )}

        <div className={classes.projectSummaryWrapper}>
          <Typography variant="h6">{item.name}</Typography>
          <Typography variant="body1" className={classes.projectSummary}>
            {`${item.summary}`}
          </Typography>
        </div>
      </div>
    ) : null;
  });

  return <div className={classes.projectWrapperParent}>{projectElements}</div>;
}
