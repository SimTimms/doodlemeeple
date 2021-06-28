import React from 'react';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { FEATURED_CREATIVES_WIDGET } from './data';
import { ProfileCard } from './profileCard';

export default function CreativeRosterWidget() {
  const classes = useStyles();
  const [creativeArray, setCreativeArray] = React.useState([]);

  return (
    <div className={classes.root}>
      <Query
        query={FEATURED_CREATIVES_WIDGET}
        fetchPolicy="network-only"
        onCompleted={(data) => {
          setCreativeArray([...data.featuredCreativesWidget]);
        }}
      >
        {() => {
          return creativeArray.map((creative, index) => {
            return (
              <ProfileCard creative={creative} key={`creative_${index}`} />
            );
          });
        }}
      </Query>
    </div>
  );
}
