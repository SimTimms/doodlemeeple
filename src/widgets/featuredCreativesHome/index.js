import React from 'react';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { FEATURED_CREATIVES_WIDGET } from './data';
import { ProfileCardImpact } from '../profileCard/';
import BigImage from '../bigImage';

export default function FeaturedCreativeHomeWidget() {
  const classes = useStyles();
  const [creativeArray, setCreativeArray] = React.useState([]);
  const [large, setLarge] = React.useState(null);

  return (
    <div className={classes.root}>
      {large !== null && <BigImage large={large} setLarge={setLarge} />}
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
              <ProfileCardImpact
                creative={creative}
                key={`creative_${index}`}
                setLarge={setLarge}
              />
            );
          });
        }}
      </Query>
    </div>
  );
}
