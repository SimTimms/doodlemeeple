import React from 'react';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { CREATIVES } from '../../../../../data/queries';
import { ProfileCard } from '../../../../../components';

export default function Creatives({ favourites, history, ...props }) {
  const classes = useStyles();
  const { job, removeInviteList, updateInviteList, inviteList } = props;
  return (
    <Query query={CREATIVES} fetchPolicy="network-only">
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
                  key={`creative_${index}`}
                />
              );
            })}
          </div>
        ) : null;
      }}
    </Query>
  );
}
