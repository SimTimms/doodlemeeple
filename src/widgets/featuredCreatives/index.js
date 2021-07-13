import React from 'react';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { FEATURED_CREATIVES_WIDGET } from './data';
import { ProfileCard } from '../profileCard/';
import BigImage from '../bigImage';
import { Row } from '../../components';

export default function FeaturedCreativeWidget() {
  const classes = useStyles();
  const [creativeArray, setCreativeArray] = React.useState([]);
  const [large, setLarge] = React.useState(null);

  return (
    <Row of="auto" a="flex-start" j="flex-start" w="100%">
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
              <ProfileCard
                creative={creative}
                key={`creative_${index}`}
                setLarge={setLarge}
              />
            );
          });
        }}
      </Query>
    </Row>
  );
}
