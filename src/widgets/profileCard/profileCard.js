import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { BgImg, ProfileImg } from './components';
import { Row, Column } from '../../components';
import * as socials from '../../assets/social';
import { nameShortener } from '../../utils';

export default function ProfileCard({ creative }) {
  const classes = useStyles();
  return (
    <div
      className={clsx({
        [classes.creativeCard]: true,
      })}
    >
      <a
        href={`${process.env.REACT_APP_URL}/public-preview/${creative._id}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: '#222', width: '100%' }}
      >
        <BgImg creative={creative} />
        <Row>
          <ProfileImg creative={creative} />
          <Column a="flex-start">
            <Typography style={{ fontWeight: 'bold' }}>
              {creative.name}
            </Typography>
            <Typography className={classes.types}>
              {creative.sections.map(
                (section, index) => `${index > 0 ? ', ' : ''} ${section.type}`
              )}
            </Typography>
          </Column>
        </Row>
        <div className={classes.divider}></div>
        <Typography align="center" className={classes.summary}>
          {nameShortener(creative.summary ? creative.summary : '', 60)}
        </Typography>
      </a>
      <Column a="center" bg="#333" p="3px 0 3px 0" h={60}>
        <Column w={160}>
          <Row j="space-around">
            {creative.linkedIn && (
              <a
                href={`${creative.linkedIn}`}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.social}
                style={{ backgroundImage: `url(${socials.socialLinkedIn})` }}
              ></a>
            )}
            {creative.facebook && (
              <a
                href={`${creative.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.social}
                style={{ backgroundImage: `url(${socials.socialFacebook})` }}
              ></a>
            )}
            {creative.twitter && (
              <a
                href={`${creative.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.social}
                style={{ backgroundImage: `url(${socials.socialTwitter})` }}
              ></a>
            )}
            {creative.instagram && (
              <a
                href={`${creative.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.social}
                style={{ backgroundImage: `url(${socials.socialInstagram})` }}
              ></a>
            )}
          </Row>
        </Column>
        {creative.website && (
          <a
            href={`${creative.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.website}
          >
            <Typography>{`${creative.website}`}</Typography>
          </a>
        )}
      </Column>
    </div>
  );
}
