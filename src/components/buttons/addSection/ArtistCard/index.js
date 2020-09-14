import React from 'react';
import { Typography, Card } from '@material-ui/core';
import { useStyles } from './styles';
import { TYPE_HELPER } from '../../../../utils';

export function ArtistCard({ setDisplay, sections, setSections, type }) {
  const newSectionTemplate = {
    _id: 'new',
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
    >
      <Typography variant="body1" align="center" style={{ width: '100%' }}>
        {TYPE_HELPER(type)}
      </Typography>
    </Card>
  );
}
