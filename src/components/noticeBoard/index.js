import React from 'react';
import { useStyles } from './styles';
import { Column, Divider } from '../';
import * as CONSTANTS from './constants';
import profileComplete from '../../utils/profileComplete';

export default function NoticeBoard({ profile }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {!profileComplete(profile) ? (
        <Column h="100%">
          {CONSTANTS.WELCOME}
          <Divider />
          {CONSTANTS.WELCOME_SUB}
        </Column>
      ) : (
        <Column h="100%">
          {CONSTANTS.SET_UP_CREATIVE}
          <Divider />
          {CONSTANTS.SET_UP_CREATIVE_SUB}
        </Column>
      )}
    </div>
  );
}
