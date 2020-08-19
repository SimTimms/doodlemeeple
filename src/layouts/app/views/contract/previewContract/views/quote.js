import React, { useEffect } from 'react';
import {
  ContractSummary,
  IconButton,
  ActionWrapper,
  ContractComponent,
  ProfileCardBasic,
  HeaderTwo,
  Divider,
  Column,
  Meta,
  Text,
  BorderBox,
  PaymentElement,
  HeaderThree,
} from '../../../../../../components';
import { toaster } from '../../../../../../utils/toaster';
import { DECLINE_CONTRACT } from '../../../../../../data/mutations';
import { FAVOURITES } from '../../../../../../data/queries';

import { Mutation, Query } from 'react-apollo';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function QuoteSummary({
  display,
  contractData,
  setContract,
  history,
}) {
  const classes = useStyles();
  const [openContract, setOpenContract] = React.useState(false);
  const [contractStatus, setContractStatus] = React.useState(null);
  const [declineWarning, setDeclineWarning] = React.useState(false);
  const [favourites, setFavourites] = React.useState([]);
  const [displayPayment, setDisplayPayment] = React.useState(false);

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
      <HeaderTwo str={`Creative`} />
      <PaymentElement
        display={displayPayment}
        setDisplayPayment={setDisplayPayment}
        contractData={contractData}
        setContractStatus={setContractStatus}
      />
      <Query
        query={FAVOURITES}
        onCompleted={(data) => {
          setFavourites(data.profile.favourites.map((fav) => fav.receiver._id));
        }}
        fetchPolicy="network-only"
      >
        {({ data }) => {
          return null;
        }}
      </Query>
      <Column j="center" a="center">
        <ProfileCardBasic
          history={history}
          creative={contractData.user}
          favourite={
            favourites.indexOf(contractData.user._id) > -1 ? true : false
          }
        />
      </Column>
      {contractData.status !== 'paid' ? (
        <HeaderTwo str="Quote" />
      ) : (
        <HeaderTwo str="Contract" />
      )}

      <Divider />

      <div className={classes.root}>
        {!openContract && contractData.status !== 'paid' && (
          <ContractSummary
            contractData={contractData}
            contractStatus={contractStatus}
          />
        )}
        {openContract ||
          (contractData.status === 'paid' && (
            <ContractComponent
              contractData={contractData}
              setOpenContract={setOpenContract}
              setContractStatus={setContractStatus}
              history={history}
            />
          ))}
        {!openContract && contractData.status !== 'paid' && (
          <Column>
            <Divider />
            <HeaderThree str="Payment" />
            <ActionWrapper>
              {contractStatus === 'submitted' ? (
                <BorderBox>
                  <Meta
                    str={`Choose to read the full details or decline this offer`}
                  />
                  {contractData.status !== 'accepted' && (
                    <IconButton
                      title="Continue"
                      color="primary"
                      icon="chevron_right"
                      disabled={false}
                      onClickEvent={() => {
                        setOpenContract(true);
                      }}
                      styleOverride={{ width: '100%' }}
                      type="button"
                      iconPos="right"
                    />
                  )}
                  {declineWarning && (
                    <Column j="center" a="center">
                      <Text str="You will be unable to continue conversations with this Creative about this particular job." />{' '}
                      <Text str="Do you wish to continue?" />
                    </Column>
                  )}
                  {contractData.status !== 'accepted' && (
                    <Mutation
                      mutation={DECLINE_CONTRACT}
                      variables={{
                        contractId: contractData._id,
                      }}
                      onCompleted={(data) => {
                        toaster('Declined');
                        setContractStatus('declined');
                      }}
                    >
                      {(mutation) => {
                        return (
                          <IconButton
                            title="Decline"
                            color="warning"
                            icon="thumb_down"
                            disabled={false}
                            onClickEvent={() => {
                              declineWarning === false
                                ? setDeclineWarning(true)
                                : mutation();
                            }}
                            styleOverride={{ width: '100%' }}
                            type="button"
                            iconPos="right"
                          />
                        );
                      }}
                    </Mutation>
                  )}
                  {declineWarning && (
                    <IconButton
                      title="Cancel"
                      color="text-dark"
                      icon="cancel"
                      disabled={false}
                      onClickEvent={() => {
                        setDeclineWarning(false);
                      }}
                      styleOverride={{ width: '100%' }}
                      type="button"
                      iconPos="right"
                    />
                  )}
                </BorderBox>
              ) : contractStatus === 'declined' ? (
                <BorderBox>
                  <Meta
                    str={`You have rejected this quote, ${contractData.user.name} has been notified`}
                  />
                </BorderBox>
              ) : contractStatus === 'paid' ? (
                <BorderBox>
                  <Meta
                    str={`You have deposited the payment for this contract, ${contractData.user.name} has been notified`}
                  />
                  <IconButton
                    title="Back to Project"
                    color="primary"
                    icon="work"
                    disabled={false}
                    onClickEvent={() => {
                      history.push(`/app/view-job/${contractData.job._id}`);
                    }}
                    styleOverride={{ width: '100%' }}
                    type="button"
                    iconPos="right"
                  />
                </BorderBox>
              ) : (
                <BorderBox>
                  <Meta
                    str={`You have accepted this quote, ${contractData.user.name} has been notified. Please continue to Payment`}
                  />
                  <IconButton
                    title="Payment"
                    color="text-dark"
                    icon="payment"
                    disabled={false}
                    onClickEvent={() => {
                      setDisplayPayment(true);
                    }}
                    styleOverride={{ width: '100%' }}
                    type="button"
                    iconPos="right"
                  />
                </BorderBox>
              )}

              <PaymentElement
                display={displayPayment}
                setDisplayPayment={setDisplayPayment}
                contractData={contractData}
                setContractStatus={setContractStatus}
              />
            </ActionWrapper>
          </Column>
        )}
      </div>
    </div>
  );
}
