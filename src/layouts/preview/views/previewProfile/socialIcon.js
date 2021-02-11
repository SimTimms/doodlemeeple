import React from 'react';
import { useStyles } from './styles';

export default function SocialIcon({ img, link }) {
  const classes = useStyles();

  return link !== '' && link !== null && link != undefined ? (
    <a
      href={
        link.indexOf('http') === -1 && link.indexOf('https') === -1
          ? `https://${link}`
          : link
      }
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <img src={img} className={classes.socialIcon} />
    </a>
  ) : null;
}
