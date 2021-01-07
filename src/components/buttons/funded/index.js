import React, { useEffect } from 'react';
import { Mutation } from 'react-apollo';
import { UPDATE_FUNDED } from '../../../data/mutations';
import { useStyles } from './styles';
import { IconButton } from '../../';
import { toaster } from '../../../utils/toaster';

export default function Funded({ funded }) {
  const classes = useStyles();
  const [fundedState, setFundedState] = React.useState(false);

  useEffect(() => {
    setFundedState(funded);
  }, [funded]);

  return (
    <Mutation
      mutation={UPDATE_FUNDED}
      variables={{
        acceptsUnfunded: fundedState ? false : true,
      }}
      onCompleted={() => toaster('Speculative Set')}
    >
      {(mutation) => {
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
      }}
    </Mutation>
  );
}
