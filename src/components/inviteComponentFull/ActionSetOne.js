import React from 'react';
import { BorderBox, IconButton } from '../';
import { Mutation } from 'react-apollo';
import { DECLINE_CONTRACT } from '../../data/mutations';

export default function ActionSetOne({ contract, setTabNbr, setTabNbrTwo }) {
  return (
    <BorderBox w={300}>
      <IconButton
        title="Read More"
        color="primary"
        icon="chevron_right"
        disabled={false}
        onClickEvent={() => {
          setTabNbrTwo(1);
        }}
        styleOverride={{
          margin: 'auto',
          marginBottom: 10,
          width: 200,
        }}
        type="button"
        iconPos="right"
      />
      <Mutation
        mutation={DECLINE_CONTRACT}
        variables={{
          contractId: contract._id,
        }}
        onCompleted={() => setTabNbr(-1)}
      >
        {(mutation) => {
          return (
            <IconButton
              title="Decline"
              color="warning"
              icon="thumb_down"
              disabled={false}
              onClickEvent={() => {
                mutation();
              }}
              styleOverride={{ margin: 'auto', width: 200 }}
              type="button"
              iconPos="right"
            />
          );
        }}
      </Mutation>
    </BorderBox>
  );
}
