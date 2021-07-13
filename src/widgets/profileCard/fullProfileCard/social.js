import React from 'react';
import { useStyles } from './styles';
import * as socials from '../../../assets/social';

export default function Social({ socialStr, socialSite }) {
  const classes = useStyles();
  if (!socialStr) return null;
  const refactoredLink =
    socialSite === 'linkedIn'
      ? socialStr.indexOf('linkedin.com/') === -1
        ? `https://www.linkedin.com/${socialStr}`
        : socialStr
      : socialSite === 'facebook'
      ? socialStr.indexOf('facebook.com/') === -1
        ? `https://www.facebook.com/${socialStr}`
        : socialStr
      : 'd';

  if (!socialStr) return null;
  return (
    socialStr && (
      <a
        href={`${refactoredLink}`}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.social}
      >
        <img
          src={
            socialSite === 'linkedIn'
              ? socials.socialLinkedIn
              : socialSite === 'facebook'
              ? socials.socialFacebook
              : socialSite === 'twitter'
              ? socials.socialTwitter
              : socialSite === 'instagram' && socials.socialInstagram
          }
          className={classes.socialImg}
          alt={socialSite}
        />
      </a>
    )
  );
}
