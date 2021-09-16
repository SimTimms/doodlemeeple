import React from 'react';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { LATEST_CREATIVES_WIDGET } from './data';
import { ProfileCardMacro } from '../profileCard/';
import BigImage from '../bigImage';
import { Grid } from '../../components';
import clsx from 'clsx';

export default function LatestCreativesWidget({ ...props }) {
  const classes = useStyles();
  const [creativeArray, setCreativeArray] = React.useState([]);
  const [large, setLarge] = React.useState(null);
  const { dashboard } = props;
  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.dashboard]: dashboard,
      })}
    >
      {large !== null && <BigImage large={large} setLarge={setLarge} />}
      <Grid cols={3}>
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
                <ProfileCardMacro
                  creative={creative}
                  key={`creative_${index}`}
                />
              );
            });
          }}
        </Query>
      </Grid>
    </div>
  );
}
