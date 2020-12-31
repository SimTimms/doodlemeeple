import React from 'react';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { CREATIVES } from '../../../../../data/queries';
import { ProfileCard } from '../../../../../components';

export default function Creatives({
  favourites,
  job,
  removeInviteList,
  updateInviteList,
  inviteList,
  history,
}) {
  const classes = useStyles();
  return (
    <Query
      query={CREATIVES}
      variables={{ type: job.keywords, job: job._id }}
      fetchPolicy="network-only"
    >
      {({ data }) => {
        return data ? (
          <div className={classes.creativeWrapper}>
            {data.getCreatives.map((creative, index) => {
              return (
                <ProfileCard
                  history={history}
                  creative={creative}
                  favourite={
                    favourites.indexOf(creative._id) > -1 ? true : false
                  }
                  gameId={job.gameId}
                  jobId={job._id}
                  invite={inviteList.filter((filterItem) => {
                    return filterItem._id === creative._id;
                  })}
                  key={`creative_${index}`}
                  updateInviteList={updateInviteList}
                  removeInviteList={removeInviteList}
                  disabled={inviteList.length >= 5 ? true : false}
                />
              );
            })}
          </div>
        ) : null;
      }}
    </Query>
  );
}
