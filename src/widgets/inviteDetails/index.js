import React from 'react';
import { useStyles } from './styles';

import { JobDescriptionWidget } from '../job';
import { MenuButtonShortcut, TopMenuWrapper } from '../../components';
export default function InviteDetails({ jobId }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopMenuWrapper j="center">
        <MenuButtonShortcut
          text={{
            name: 'Job Description',
            color: 'light',
            icon: 'work',
            count: 0,
          }}
          onClickEvent={() => {}}
          active={true}
          column={true}
        />
      </TopMenuWrapper>
      <JobDescriptionWidget jobId={jobId} />
    </div>
  );
}
