import React from 'react';
import { Typography } from '@material-ui/core';
import { Query } from 'react-apollo';
import { PROFILE_PREVIEW } from '../../../../../data/queries';
import { Column, ProfileCard, Divider } from '../../../../../components';

export default function Creative({
  favourites,
  job,
  removeInviteList,
  updateInviteList,
  inviteList,
  history,
  creativeId,
}) {
  return (
    <Query
      query={PROFILE_PREVIEW}
      variables={{ userId: creativeId }}
      fetchPolicy="network-only"
    >
      {({ data }) => {
        return data ? (
          <Column>
            <Column bg="rgba(255,255,255,0.3)">
              <Typography
                variant="h5"
                style={{ marginTop: 20, marginBottom: 10 }}
              >
                Invite your chosen creative
              </Typography>
              <ProfileCard
                history={history}
                creative={data.userByIdWithTracker}
                favourite={
                  favourites.indexOf(data.userByIdWithTracker._id) > -1
                    ? true
                    : false
                }
                jobId={job._id}
                invite={inviteList.filter((filterItem) => {
                  return filterItem._id === data.userByIdWithTracker._id;
                })}
                updateInviteList={updateInviteList}
                removeInviteList={removeInviteList}
                disabled={inviteList.length >= 5 ? true : false}
              />
              <Divider />
              <Typography variant="body1">
                Discover other creatives you may want to work with...
              </Typography>
              <Divider />
            </Column>
          </Column>
        ) : null;
      }}
    </Query>
  );
}
