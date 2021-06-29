import React from 'react';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { CREATIVE_ROSTER_WIDGET, PROFILE_IMAGES } from './data';
import { ProfileCardMini } from './profileCard';

export default function CreativeRosterWidget() {
  const classes = useStyles();
  const [creativeArray, setCreativeArray] = React.useState([]);
  const [large, setLarge] = React.useState(null);

  return (
    <div className={classes.root}>
      {large !== null && (
        <div
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            zIndex: 100,
            background: 'rgba(0,0,0,0.8)',
            cursor: 'pointer',
          }}
          onClick={() => setLarge(null)}
        >
          <img
            src={large}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
            }}
            alt=""
            onClick={() => {
              setLarge(null);
            }}
          />
        </div>
      )}
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
