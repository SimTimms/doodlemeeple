import React from 'react';
import { Typography } from '@material-ui/core';
import { TYPE_HELPER } from '../../utils';
import { useStyles } from './styles';
import { Column } from '../';

export default function SectionWrapper({ children, header, button }) {
  const classes = useStyles();
  return (
    <Column>
      <div className={classes.actionWrapper}>
        <Typography
          variant="h5"
          component="h2"
          className={classes.actionWrapperHeader}
        >
          {TYPE_HELPER(header)}
        </Typography>
        {button && button}
      </div>
      {children}
    </Column>
  );
}
