import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { Column } from '../../../../imports/sharedComponents';
import SubmitBrief from '../SubmitBrief';
import Artist from './artist';

export default function ArtistLineup({
  history,
  removeInviteList,
  inviteList,
  job,
}) {
  const classes = useStyles();

  return (
    <Column a="center" j="center">
      <div className={classes.noticeArea}>
        <Column>
          <Typography
            variant="body1"
            style={{ marginTop: 5, marginBottom: 5, color: '#fff' }}
          >
            Choose up to 5 Creatives
          </Typography>
          <div className={classes.miniProfileActionWrapper}>
            <div className={classes.miniProfileWrapper}>
              {inviteList.map((artist) => (
                <Artist
                  history={history}
                  removeInviteList={removeInviteList}
                  artist={artist}
                />
              ))}
            </div>
          </div>
          <SubmitBrief job={job} history={history} inviteList={inviteList} />
        </Column>
      </div>
    </Column>
  );
}
