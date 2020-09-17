import React, { useEffect } from 'react';
import {
  ContractSummary,
  ContractComponentForCreative,
  ProfileCardCreator,
  HeaderTwo,
  Divider,
  Column,
  BorderBox,
  IconButton,
  NoticeBox,
} from '../';
import { useStyles } from './styles';
import moment from 'moment';
import clsx from 'clsx';

export default function ContractSummaryCreative({
  display,
  contractData,
  history,
}) {
  const classes = useStyles();
  const [openContract, setOpenContract] = React.useState(false);
  const [contractStatus, setContractStatus] = React.useState(null);
  useEffect(() => {
    setContractStatus(contractData.status);
  }, [contractData]);

  return (
    <div
      className={clsx({
        [classes.wrapper]: true,
        [classes.hide]: !display,
      })}
    >
      <Column j="center" a="center">
        <HeaderTwo str={`Creator`} />
        <ProfileCardCreator history={history} user={contractData.job.user} />
      </Column>
      {contractData.status !== 'paid' ? (
        <HeaderTwo str="Quote" />
      ) : (
        <HeaderTwo str="Contract" />
      )}

      <Divider />

      <div className={classes.root}>
        {contractData.status === 'accepted' && (
          <NoticeBox
            title="Accepted - Awaiting Payment"
            color="secondary"
            subTitle={`This quote was accepted & signed by the Client on 
        ${moment(contractData.signedDate).format(
          'LLLL'
        )}. We will notify you when we receive the payment.`}
          />
        )}
        {contractData.status === 'paid' && (
          <NoticeBox
            title="Paid & Active"
            color="secondary"
            subTitle={`Congratulations! The client has paid the requested fee and you may now begin work.`}
          />
        )}
        {!openContract && contractData.status !== 'paid' && (
          <ContractSummary
            contractData={contractData}
            contractStatus={contractStatus}
          />
        )}
        {!openContract && contractData.status !== 'paid' && (
          <BorderBox>
            <IconButton
              title="View Contract"
              color="text-dark"
              icon="preview"
              onClickEvent={() => {
                setOpenContract(true);
              }}
              styleOverride={{ width: '100%' }}
            />
          </BorderBox>
        )}
        {(openContract || contractData.status === 'paid') && (
          <ContractComponentForCreative
            contractData={contractData}
            setOpenContract={setOpenContract}
            setContractStatus={setContractStatus}
            history={history}
          />
        )}
      </div>
    </div>
  );
}
