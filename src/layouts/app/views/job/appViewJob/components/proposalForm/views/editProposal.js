import React, { useEffect } from 'react';
import { Slide, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import {
  Divider,
  ActionWrapper,
  BorderBox,
  Paper,
  Column,
  Meta,
  Row,
  MenuButtonShortcut,
  ContractComponentForCreator,
  ContractSummaryForCreative,
  SubmitContractButton,
  IconButton,
  UnlockInfo,
  PaymentTerms,
  EditContractButton,
} from '../../../../../../../../components';

import QuoteDetails from './quoteDetails';
import { calculatePercent } from '../../../../../../../../utils';
import { toaster } from '../../../../../../../../utils/toaster';
import { Mutation } from 'react-apollo';
import {
  CREATE_CONTRACT,
  UPDATE_CONTRACT,
} from '../../../../../../../../data/mutations';

export default function EditProposalForm({
  jobId,
  contractData,
  setContract,
  history,
}) {
  const classes = useStyles();

  const [percentLock, setPercentLock] = React.useState({
    status: false,
    sum: null,
    message: '',
  });
  const [detailsLock, setDetailsLock] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [lockSubmit, setLockSubmit] = React.useState(true);
  useEffect(() => {
    const { cost, paymentTerms, currency, notes } = contractData;
    const percentLockCalc = calculatePercent(paymentTerms, cost, currency);
    setPercentLock(percentLockCalc);
    setLockSubmit(cost <= 0 || notes === '' || !notes ? true : false);
  }, [contractData]);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div style={{ width: '100%' }}>
        <Row j="space-between">
          <MenuButtonShortcut
            text={{
              name: 'Details',
              color: '#222',
              icon: 'chevron_right',
              count: 0,
            }}
            onClickEvent={() => {
              setPage(0);
            }}
            active={page === 0}
          />
          <MenuButtonShortcut
            text={{
              name: 'Payment',
              color: '#222',
              icon: 'chevron_right',
              count: 0,
            }}
            onClickEvent={() => {
              setPage(1);
            }}
            active={page === 1}
          />
          <MenuButtonShortcut
            text={{
              name: 'Submit',
              color: '#222',
              icon: 'chevron_right',
              count: 0,
            }}
            onClickEvent={() => {
              setPage(2);
            }}
            active={page === 2}
          />
        </Row>
        <Divider />
        <Paper>
          {contractData._id === '' ? (
            <ActionWrapper>
              <Mutation
                mutation={CREATE_CONTRACT}
                variables={{
                  currency: 'GBP',
                  cost: '0',
                  jobId,
                  paymentTerms: [],
                }}
                onCompleted={(data) => {
                  toaster('Autosave');
                  const updatedId = data.contractCreateOne.recordId;
                  setLoading(false);
                  setContract({
                    ...contractData,
                    _id: updatedId,
                    updatedAt: data.contractCreateOne.record.updatedAt,
                    user: data.contractCreateOne.record.user,
                    job: data.contractCreateOne.record.job,
                  });
                }}
              >
                {(mutation) => {
                  return (
                    <IconButton
                      disabled={false}
                      color="primary"
                      title={loading ? 'Creating...' : 'adsasdasda'}
                      icon="fact_check"
                      onClickEvent={() => {
                        !loading && mutation();
                        setLoading(true);
                      }}
                      styleOverride={{
                        margin: 'auto',
                        marginTop: 10,
                        marginBottom: 10,
                      }}
                    />
                  );
                }}
              </Mutation>
            </ActionWrapper>
          ) : contractData.status === 'submitted' ? (
            <div>
              <Typography>
                Submitted - this should display a view of the contract and allow
                editing - send a notification and email to the job owner - add a
                chat message with link to the contract
              </Typography>
              <EditContractButton
                contract={contractData}
                setContract={setContract}
                title="Retract & Edit Quote"
              />
            </div>
          ) : (
            <Column>
              <Mutation
                mutation={UPDATE_CONTRACT}
                variables={{
                  ...contractData,
                }}
                onCompleted={(data) => {
                  toaster('Autosave');
                  setDetailsLock(false);
                  setLoading(false);
                }}
              >
                {(mutation) => {
                  return (
                    <div className={classes.root}>
                      {page === 0 && (
                        <QuoteDetails
                          setContract={setContract}
                          contract={contractData}
                          mutation={mutation}
                          menu={
                            <BorderBox w={300} mb={0}>
                              <Meta str="Continue onto payment & milestones" />
                              <IconButton
                                title="Next"
                                onClickEvent={() => setPage(1)}
                                styleOverride={{ width: '100%' }}
                                icon="chevron_right"
                                iconPos="right"
                              />
                            </BorderBox>
                          }
                        />
                      )}

                      {page === 1 && (
                        <PaymentTerms
                          percentLock={percentLock}
                          setPercentLock={setPercentLock}
                          contract={contractData}
                          setContract={setContract}
                          calculatePercent={calculatePercent}
                          setDetailsLock={setDetailsLock}
                          detailsLock={detailsLock}
                          mutation={mutation}
                          menu={
                            <BorderBox w={300} mb={0}>
                              <Column>
                                <Meta str="Continue to Confirmation" />
                                <IconButton
                                  title="Next"
                                  onClickEvent={() => setPage(2)}
                                  styleOverride={{ width: '100%' }}
                                  icon="chevron_right"
                                  iconPos="right"
                                />
                                <IconButton
                                  title="Back"
                                  icon=""
                                  color="text-dark"
                                  onClickEvent={() => {
                                    setPage(0);
                                  }}
                                  styleOverride={{ margin: 0, padding: 0 }}
                                />
                              </Column>
                            </BorderBox>
                          }
                        />
                      )}
                      {page === 2 && (
                        <div style={{ width: '100%' }}>
                          <ContractSummaryForCreative
                            contractData={contractData}
                          />
                          {lockSubmit && (
                            <Column>
                              <UnlockInfo str="WARNING! You need to set a START DATE, COST and a NOTE to continue." />
                              <IconButton
                                title="Go back and complete"
                                icon="chevron_left"
                                onClickEvent={() => setPage(0)}
                                color="primary"
                              />
                            </Column>
                          )}

                          {percentLock.status ? (
                            <UnlockInfo str="WARNING! Your milestone payments exceed the contract total, please adjust to continue." />
                          ) : (
                            !lockSubmit && (
                              <BorderBox w={300}>
                                {!percentLock.status && (
                                  <Meta str="Submit this proposal to the client?" />
                                )}

                                <SubmitContractButton
                                  contract={contractData}
                                  history={history}
                                />
                              </BorderBox>
                            )
                          )}
                        </div>
                      )}
                      {page === 3 && (
                        <div style={{ width: '100%' }}>
                          <ContractComponentForCreator
                            contractData={contractData}
                            history={history}
                            setContract={setContract}
                          />

                          <BorderBox w={300}>
                            {!percentLock.status && (
                              <Meta str="Continue to Confirmation" />
                            )}

                            {percentLock.status && (
                              <IconButton
                                title="Adjust Milestones"
                                icon=""
                                iconPos="left"
                                color="warning"
                                onClickEvent={() => {
                                  setPage(1);
                                }}
                                styleOverride={{ width: '100%' }}
                              />
                            )}
                          </BorderBox>
                        </div>
                      )}

                      <Divider />
                    </div>
                  );
                }}
              </Mutation>
            </Column>
          )}
        </Paper>
      </div>
    </Slide>
  );
}
