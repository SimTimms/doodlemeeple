import React from 'react';
import { useStyles } from './styles';

export default function ProfileAvatar({
  title,
  profilePage,
  bgImg,
  history,
  declined,
}) {
  const classes = useStyles();

  return (
    <div
      style={{ cursor: 'pointer', marginRight: 10 }}
      title={title}
      onClick={() => {
        history.push(profilePage);
      }}
    >
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
        className={classes.profileThumb}
      >
        {declined && <div className={classes.declined}></div>}
      </div>
    </div>
  );
}
