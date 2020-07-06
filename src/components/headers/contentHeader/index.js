import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';

function ContentHeader({ title, subTitle, subTitleExtra, button }) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {button}
      <div className={classes.wrapperTwo}>
        <div className={classes.subHeader}>
          <Typography variant="h4" color="textPrimary">
            {title}
          </Typography>
        </div>
        {subTitleExtra && subTitleExtra}
        {subTitle && (
          <Typography
            color="textSecondary"
            component="p"
            style={{ textAlign: 'center' }}
          >
            {subTitle}
          </Typography>
        )}
      </div>
    </div>
  );
}

export default ContentHeader;
