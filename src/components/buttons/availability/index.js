import React, { useEffect } from 'react';
import { Mutation } from 'react-apollo';
import { UPDATE_AVAILABILITY } from '../../../data/mutations';
import { useStyles } from './styles';
import { IconButton } from '../../';
import { toaster } from '../../../utils/toaster';

export default function Availability({ available }) {
  const classes = useStyles();
  const [availability, setAvailability] = React.useState(true);

  useEffect(() => {
    setAvailability(available);
  }, [available]);
  console.log(availability);
  return (
    <Mutation
      mutation={UPDATE_AVAILABILITY}
      variables={{
        available: availability ? false : true,
      }}
      onCompleted={() => toaster('Availability Set')}
    >
      {(mutation) => {
        function changeAvailable() {
          setAvailability(availability ? false : true);
          mutation();
        }

        return (
          <div className={classes.root}>
            <IconButton
              icon={!availability ? 'toggle_off' : 'toggle_on'}
              title={
                !availability ? 'I am unavailable' : 'I am available for work'
              }
              disabled={false}
              color="text-dark"
              onClickEvent={() => {
                changeAvailable();
              }}
              styleOverride={{
                margin: 0,
                marginLeft: 10,
                width: 340,
                paddingLeft: 10,
                paddingRight: 10,
              }}
              type="button"
              iconPos="right"
            />
          </div>
        );
      }}
    </Mutation>
  );
}
