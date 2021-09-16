import React from 'react';
import { Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useStyles } from './styles';
import clsx from 'clsx';
import imageOptimiser from '../../../../../utils/imageOptimiser';
import { randomKey } from '../../../../../utils';

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
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');
  const [large, setLarge] = React.useState(null);

  return (
    <div
      className={clsx({
        [classes.imgWrapper]: true,
        [classes.imgWrapperMobile]: mobile,
      })}
    >
      <div
        className={classes.imgBack}
        style={{
          cursor: 'pointer',
          backgroundImage: `url(${imageOptimiser(img)})`,
        }}
        onClick={() => {
          setLarge(img);
        }}
      ></div>
      {large !== null && (
        <div
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            zIndex: 100,
            background: 'rgba(0,0,0,0.8)',
            cursor: 'pointer',
          }}
          onClick={() => setLarge(null)}
        >
          <img
            src={img}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
            }}
            alt=""
            onClick={() => {
              setLarge(null);
            }}
          />
        </div>
      )}
    </div>
  );
}

export function Testimonials({ testimonials }) {
  const classes = useStyles();
  const testimonialElements = testimonials.map((item) => {
    return item.summary ? (
      <div
        className={classes.testimonialWrapper}
        key={`testimonial_${randomKey()}`}
      >
        {item.image && (
          <div
            style={{
              backgroundImage: `url(${imageOptimiser(item.image)}`,
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
        {item.image ? (
          <div
            className={classes.projectWrapperItem}
            style={{
              backgroundImage: `url(${imageOptimiser(item.image)}`,
              backgroundSize: 'cover',
            }}
          ></div>
        ) : (
          <div
            className={`${classes.projectWrapperItem} ${classes.projectWrapperItemMissing}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h5">{item.name}</Typography>
          </div>
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
