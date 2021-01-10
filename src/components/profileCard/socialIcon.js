import React from 'react';
import { useStyles } from './styles';

export default function SocialIcon({ img, link }) {
  const classes = useStyles();

  return link !== '' && link !== null && link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', paddingTop: 5 }}
    >
      <img src={img} className={classes.socialIcon} />
    </a>
  ) : null;
}
