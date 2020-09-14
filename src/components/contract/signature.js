import React from 'react';
import {
  Divider,
  IconButton,
  ActionWrapper,
  NoticeBox,
  BorderBox,
  Meta,
} from '../';
import { Mutation } from 'react-apollo';
import { SIGN_CONTRACT, DECLINE_CONTRACT } from '../../data/mutations';
import moment from 'moment';

export default function Signature({
  status,
  setOpenContract,
  setContractStatus,
  contractData,
  history,
}) {
  return (
    <ActionWrapper>
      {status !== 'paid' ? (
        <BorderBox>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            <Meta str="By clicking Accept you will enter into a binding contract with the Creative." />
            <Mutation
              mutation={SIGN_CONTRACT}
              variables={{
                contractId: contractData._id,
              }}
              onCompleted={() => {
                setContractStatus && setContractStatus('accepted');
                setOpenContract && setOpenContract(false);
              }}
            >
              {(mutation) => {
                return (
                  <IconButton
                    title="I Accept"
                    color="primary"
                    icon="thumb_up"
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
                setContractStatus && setContractStatus('declined');
                setOpenContract && setOpenContract(false);
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
            )} GMT and ${contractData.user.name} (the "Creative") on ${moment(
              contractData.signedcreatedAtDate
            ).format('LLLL')} GMT`}
          />
        </BorderBox>
      )}

      <IconButton
        title={contractData.status === 'paid' ? 'Back to Project' : 'Close'}
        color="text-dark"
        icon={contractData.status === 'paid' ? 'chevron_left' : 'close'}
        onClickEvent={() => {
          contractData.status === 'paid'
            ? history.push(`/app/view-job/${contractData.job._id}`)
            : setOpenContract && setOpenContract(false);
        }}
        iconPos={contractData.status === 'paid' ? 'left' : 'right'}
      />
    </ActionWrapper>
  );
}
