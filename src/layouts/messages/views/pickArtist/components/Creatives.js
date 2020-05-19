import React from 'react';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { CREATIVES } from '../../../../../data/queries';
import { LoadIcon, ProfileCard } from '../../../../../components';

export default function Creatives({
  favourites,
  job,
  removeInviteList,
  updateInviteList,
  inviteList,
}) {
  const classes = useStyles();

  return (
    <Query
      query={CREATIVES}
      fetchPolicy="network-only"
      onCompleted={(data) => {}}
    >
      {({ loading, error, data }) => {
        if (loading) return <LoadIcon />;
        if (error) return <div>Error</div>;

        return (
          <div className={classes.creativeWrapper}>
            {data.getCreatives.map((creative, index) => {
              return (
                <ProfileCard
                  creative={creative}
                  favourite={
                    favourites.indexOf(creative.id) > -1 ? true : false
                  }
                  gameId={job.gameId}
                  jobId={job.id}
                  invite={inviteList.filter(
                    (filterItem) => filterItem.id === creative.id,
                  )}
                  key={`creative_${index}`}
                  updateInviteList={updateInviteList}
                  removeInviteList={removeInviteList}
                  disabled={inviteList.length >= 5 ? true : false}
                />
              );
            })}
          </div>
        );
      }}
    </Query>
  );
}