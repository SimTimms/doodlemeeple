import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { TYPE_HELPER } from '../../utils';
import { useStyles } from './styles';

export default function SectionWrapper({ children, header, button }) {
  const classes = useStyles();
  return (
    <div className={classes.sectionWrapperMain}>
      <div className={classes.actionWrapper}>
        <Typography
          variant="h1"
          component="h2"
          className={classes.actionWrapperHeader}
        >
          {TYPE_HELPER(header)}
        </Typography>
        {button && button}
      </div>
      {children}
    </div>
  );
}
