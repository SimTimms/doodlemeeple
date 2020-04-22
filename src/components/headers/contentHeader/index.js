import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';

function ContentHeader({ title, subTitle }) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.subHeader}>
        <Typography variant="h1" color="textPrimary">
          {title}
        </Typography>
      </div>
      <Typography color="textSecondary" component="p">
        {subTitle}
      </Typography>
    </div>
  );
}

export default ContentHeader;
