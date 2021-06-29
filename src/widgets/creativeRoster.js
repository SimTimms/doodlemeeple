import React from 'react';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { CREATIVE_ROSTER_WIDGET } from './data';
import { ProfileCardMini } from './profileCard';
import BigImage from './profileCard/components/bigImage';

export default function CreativeRosterWidget() {
  const classes = useStyles();
  const [creativeArray, setCreativeArray] = React.useState([]);
  const [large, setLarge] = React.useState(null);

  return (
    <div className={classes.root}>
      {large !== null && <BigImage large={large} setLarge={setLarge} />}
      <Query
        query={CREATIVE_ROSTER_WIDGET}
        fetchPolicy="network-only"
        onCompleted={(data) => {
          setCreativeArray([...data.creativeRosterWidget]);
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
