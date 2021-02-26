import React from 'react';
import { IconButton, ActionWrapper, BorderBox, Meta } from '../';
import { Mutation } from 'react-apollo';
import { SIGN_CONTRACT, DECLINE_CONTRACT } from '../../data/mutations';
import moment from 'moment';

export default function Signature({ contractData, onAccept, onDecline }) {
  return (
    <ActionWrapper>
      {contractData.status !== 'accepted' && contractData.status !== 'paid' ? (
        <BorderBox>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            <Meta str="By clicking Accept you will enter into a binding contract with the Contractor." />
            <Mutation
              mutation={SIGN_CONTRACT}
              variables={{
                contractId: contractData._id,
              }}
              onCompleted={() => onAccept()}
            >
              {(mutation) => {
                return (
                  <IconButton
                    title="I Agree"
                    color="primary"
                    icon="local_post_office"
                    disabled={false}
                    onClickEvent={() => {
                      mutation();
                    }}
                    styleOverride={null}
                    type="button"
                    iconPos="right"
                  />
                );
              }}
            </Mutation>
            <Mutation
              mutation={DECLINE_CONTRACT}
              variables={{
                contractId: contractData._id,
              }}
              onCompleted={() => {
                onDecline();
              }}
            >
              {(mutation) => {
                return (
                  <IconButton
                    title="I Decline"
                    color="warning"
                    icon="thumb_down"
                    disabled={false}
                    onClickEvent={() => {
                      mutation();
                    }}
                    styleOverride={null}
                    type="button"
                    iconPos="right"
                  />
                );
              }}
            </Mutation>
          </div>
        </BorderBox>
      ) : (
        <BorderBox>
          <Meta
            str={`Agreed & Signed by ${
              contractData.signedBy.name
            } (the "Client") on ${moment(contractData.signedDate).format(
              'LLLL'
            )} GMT and ${contractData.user.name} (the "Contractor") on ${moment(
              contractData.signedcreatedAtDate
            ).format('LLLL')} GMT`}
          />
        </BorderBox>
      )}
    </ActionWrapper>
  );
}
