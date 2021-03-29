import React from 'react';
import { Icon, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { Mutation } from 'react-apollo';
import { REMOVE_INVITE } from '../../../../../data/mutations';
import { Column } from '../../../../../components';
import SubmitBrief from './SubmitBrief';

export default function ArtistLineup({
  history,
  removeInviteList,
  inviteList,
  job,
}) {
  const classes = useStyles();

  function Fillers({ count }) {
    let returnArr = [];
    for (let i = count * 1; i < 5; i++) {
      returnArr.push(
        <div className={classes.closeWrapper} key={`artist_blank_${i}`}>
          <div className={classes.button}>
            <div className={classes.miniProfileBlank}></div>
          </div>
        </div>
      );
    }
    return returnArr.length > 0 ? returnArr : null;
  }

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
              {inviteList.map((artist, index) => (
                <div className={classes.closeWrapper} key={`artist_${index}`}>
                  <Mutation
                    mutation={REMOVE_INVITE}
                    variables={{
                      _id: artist.inviteId,
                    }}
                  >
                    {(mutation) => {
                      return (
                        <Icon
                          className={classes.closeIcon}
                          onClick={() => {
                            removeInviteList(artist);
                            mutation();
                          }}
                        >
                          close
                        </Icon>
                      );
                    }}
                  </Mutation>
                  <div
                    onClick={() => {
                      history.push(`/public-preview/${artist._id}`);
                    }}
                    className={classes.button}
                  >
                    <div
                      className={classes.miniProfile}
                      style={{
                        backgroundImage: `url(${artist.img})`,
                      }}
                      title={artist.name}
                    ></div>
                  </div>
                </div>
              ))}
              <Fillers count={inviteList.length} />
            </div>
          </div>
          <SubmitBrief job={job} history={history} inviteList={inviteList} />
        </Column>
      </div>
    </Column>
  );
}
