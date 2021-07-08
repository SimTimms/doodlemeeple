import React from 'react';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { LATEST_CREATIVES_WIDGET } from './data';
import { ProfileCardMini } from '../profileCard/';
import BigImage from '../bigImage';

export default function LatestCreativesWidget() {
  const classes = useStyles();
  const [creativeArray, setCreativeArray] = React.useState([]);
  const [large, setLarge] = React.useState(null);

  return (
    <div className={classes.root}>
      {large !== null && <BigImage large={large} setLarge={setLarge} />}
      <Query
        query={LATEST_CREATIVES_WIDGET}
        fetchPolicy="network-only"
        onCompleted={(data) => {
          setCreativeArray([...data.latestCreativesWidget]);
        }}
      >
        {() => {
          return creativeArray.map((creative, index) => {
            return (
              <ProfileCardMini
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
