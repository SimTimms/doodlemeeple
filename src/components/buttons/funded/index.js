import React, { useEffect } from 'react';
import { UPDATE_FUNDED } from '../../../data/mutations';
import { useStyles } from './styles';
import { IconButton } from '../../';
import { toaster } from '../../../utils/toaster';
import { useMutation } from '@apollo/client';

export default function Funded({ funded }) {
  const classes = useStyles();
  const [fundedState, setFundedState] = React.useState(false);
  const [mutation] = useMutation(
    UPDATE_FUNDED,
    {
      variables: { acceptsUnfunded: fundedState ? false : true },
    },
    {
      onCompleted({ login }) {
        toaster('Availability Set');
      },
    }
  );

  useEffect(() => {
    setFundedState(funded);
  }, [funded]);

  return (
    <div className={classes.root}>
      <IconButton
        icon={!fundedState ? 'toggle_off' : 'toggle_on'}
        title={
          !fundedState
            ? 'I will only quote for funded projects'
            : 'I will quote for un-funded projects'
        }
        disabled={false}
        color="text-dark"
        onClickEvent={() => {
          setFundedState(fundedState ? false : true);
          mutation();
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
