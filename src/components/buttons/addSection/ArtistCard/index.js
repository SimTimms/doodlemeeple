import React from 'react';
import { Typography, Card, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import { TYPE_HELPER } from '../../../../utils';

export function ArtistCard({ setDisplay, sections, setSections, type }) {
  const newSectionTemplate = {
    id: 'new',
    title: '',
    summary: '',
    gallery: {
      images: [],
    },
    notableProjects: [],
    testimonials: [],
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
      <Icon style={{ fontSize: 20, marginRight: 10 }}>brush</Icon>
      <div style={{ textAlign: 'right' }}>
        <Typography variant="h2">{TYPE_HELPER(type)}</Typography>
      </div>
    </Card>
  );
}
