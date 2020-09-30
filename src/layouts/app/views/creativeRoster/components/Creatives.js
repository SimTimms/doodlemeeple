import React from 'react';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { CREATIVES } from '../../../../../data/queries';
import { ProfileCard } from '../../../../../components';

export default function Creatives({ favourites, history, filter, ...props }) {
  const classes = useStyles();
  console.log(filter);
  return (
    <Query
      query={CREATIVES}
      variables={{ type: filter }}
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
