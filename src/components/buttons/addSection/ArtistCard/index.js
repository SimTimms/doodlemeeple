import React from 'react';
import { Typography, Card } from '@material-ui/core';
import { useStyles } from './styles';
import { TYPE_HELPER } from '../../../../utils';

export function ArtistCard({ setDisplay, sections, setSections, type, img }) {
  const newSectionTemplate = {
    id: 'new',
    title: '',
    summary: '',
    gallery: {
      images: [],
    },
    notableProjects: [],
    testimonials: [],
    showreel: '',
  };

  const classes = useStyles();
  return (
    <Card
      className={classes.skillCard}
      onClick={() => {
        setDisplay(false);
        const newSection = {
          ...newSectionTemplate,
          type,
        };
        const newSections = Object.assign([], sections);
        newSections.push(newSection);
        setSections(newSections);
      }}
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: 'right center',
        backgroundSize: '150px',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        style={{ textAlign: 'right', display: 'flex', flexDirection: 'row' }}
      >
        <Typography variant="h5">{TYPE_HELPER(type)}</Typography>
      </div>
    </Card>
  );
}
