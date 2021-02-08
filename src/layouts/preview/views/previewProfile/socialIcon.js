import React from 'react';
import { useStyles } from './styles';

export default function SocialIcon({ img, link }) {
  const classes = useStyles();

  return link !== '' && link !== null ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <img src={img} className={classes.socialIcon} />
    </a>
  ) : null;
}