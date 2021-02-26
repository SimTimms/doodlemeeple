import React from 'react';
import { useStyles } from './styles';
import { Column, Divider } from '../../../../../components';
import * as CONSTANTS from './constants';
import profileComplete from '../../../../../utils/profileComplete';
import getRole from '../../../../../utils/getRole';

export default function NoticeBoard({ profile }) {
  const classes = useStyles();
  const role = getRole(profile);
  return (
    <div className={classes.root}>
      <Column w={400}>
        {!profileComplete(profile) ? (
          <Column h="100%">
            {CONSTANTS.WELCOME}
            <Divider />
            {CONSTANTS.WELCOME_SUB}
          </Column>
        ) : role === 'creative' || role === 'creator' || role === 'both' ? (
          <Column h="100%">
            {CONSTANTS.SET_UP}
            <Divider />
            {CONSTANTS.SET_UP_SUB}
          </Column>
        ) : (
          <Column h="100%">
            {CONSTANTS.SET_UP_NONE}
            <Divider />
            {CONSTANTS.SET_UP_NONE_SUB}
          </Column>
        )}
      </Column>
    </div>
  );
}
