import React, { useEffect } from 'react';
import { UPDATE_AVAILABILITY } from '../../../data/mutations';
import { useStyles } from './styles';
import { IconButton } from '../../';
import { toaster } from '../../../utils/toaster';
import { useMutation } from '@apollo/client';

export default function Availability({ available }) {
  const classes = useStyles();
  const [availability, setAvailability] = React.useState(true);
  const [updateAvailability, { loading }] = useMutation(
    UPDATE_AVAILABILITY,
    {
      variables: { available: availability ? false : true },
    },
    {
      onCompleted({ login }) {
        toaster('Availability Set');
      },
    }
  );

  useEffect(() => {
    setAvailability(available);
  }, [available]);

  function changeAvailable() {
    updateAvailability();
    setAvailability(availability ? false : true);
  }
  if (loading) return <div>Loading</div>;
  return (
    <div className={classes.root}>
      <IconButton
        icon={!availability ? 'toggle_off' : 'toggle_on'}
        title={!availability ? 'I am unavailable' : 'I am available for work'}
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
}
