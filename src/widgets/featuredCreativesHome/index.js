import React from 'react';
import { Query } from 'react-apollo';
import { FEATURED_CREATIVES_WIDGET } from './data';
import { ProfileCardImpact } from '../profileCard/';
import BigImage from '../bigImage';
import { Grid } from '../../components';
import { randomKey } from '../../utils';

export default function FeaturedCreativeHomeWidget() {
  const [creativeArray, setCreativeArray] = React.useState([]);
  const [large, setLarge] = React.useState(null);

  return (
    <Grid cols={3}>
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
                key={randomKey()}
              />
            );
          });
        }}
      </Query>
    </Grid>
  );
}
