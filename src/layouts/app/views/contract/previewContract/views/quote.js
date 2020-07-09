import React from 'react';
import {
  ContractSummary,
  IconButton,
  ActionWrapper,
  Contract,
  LoadIcon,
} from '../../../../../../components';
import { toaster } from '../../../../../../utils/toaster';
import { DECLINE_CONTRACT } from '../../../../../../data/mutations';
import { Mutation } from 'react-apollo';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function Quote({ display, contractData, setContract }) {
  const classes = useStyles();
  const [openContract, setOpenContract] = React.useState(false);

  return (
    <div
      className={clsx({
        [classes.wrapper]: true,
        [classes.hide]: !display,
      })}
    >
      <ContractSummary contractData={contractData} />
      {openContract && (
        <Contract
          contractData={contractData}
          setOpenContract={setOpenContract}
        />
      )}
      {!openContract && (
        <ActionWrapper>
          {contractData.status !== 'accepted' && (
            <Mutation
              mutation={DECLINE_CONTRACT}
              variables={{
                contractId: contractData.id,
              }}
              onCompleted={(data) => {
                toaster('Declined');
                setContract({
                  ...contractData,
                  status: 'declined',
                });
              }}
            >
              {(mutation) => {
                return (
                  <IconButton
                    title="Decline"
                    color="warning"
                    icon="thumb_down"
                    disabled={false}
                    onClickEvent={mutation}
                    styleOverride={null}
                    type="button"
                  />
                );
              }}
            </Mutation>
          )}
          {contractData.status !== 'accepted' && (
            <IconButton
              title="Interested"
              color="primary"
              icon="check_box"
              disabled={false}
              onClickEvent={() => {
                setOpenContract(true);
              }}
              styleOverride={null}
              type="button"
            />
          )}
        </ActionWrapper>
      )}
    </div>
  );
}
