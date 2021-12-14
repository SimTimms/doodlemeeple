import React from 'react';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Typography } from '@material-ui/core';

export default function KeywordButton({
  title,
  setProfile,
  profile,
  SignupMutation,
  icon,
}) {
  const keywordArr = profile.keywords;
  const indexOf = keywordArr.indexOf(title);
  const classes = useStyles();

  return (
    <div
      onClick={() => {
        indexOf > -1 && keywordArr.splice(indexOf, 1);
        if (indexOf === -1 && keywordArr.length < 6) {
          keywordArr.push(title);
        }

        setProfile({ ...profile, keywords: keywordArr });
        SignupMutation();
      }}
      className={clsx({
        [classes.keywordButton]: true,
        [classes.keywordButtonOn]: indexOf > -1,
      })}
    >
      {icon ? <img src={icon} /> : <Typography>{title}</Typography>}
    </div>
  );
}
