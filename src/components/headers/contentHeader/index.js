import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';

function ContentHeader({ title, subTitle, button }) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {button}
      <div className={classes.wrapperTwo}>
        <div className={classes.subHeader}>
          <Typography variant="h1" color="textPrimary">
            {title}
          </Typography>
        </div>
        <Typography
          color="textSecondary"
          component="p"
          style={{ textAlign: 'center' }}
        >
          {subTitle}
        </Typography>
      </div>
    </div>
  );
}

export default ContentHeader;
