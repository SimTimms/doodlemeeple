import React, { useEffect } from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from './styles';
import {
  Divider,
  BorderBox,
  Paper,
  Column,
  Meta,
  ContractComponentForCreator,
  ContractSummaryForCreative,
  SubmitContractButton,
  IconButton,
  UnlockInfo,
  PaymentTerms,
  EditContractButton,
} from '../../../../../../../../components';
import Menu from './menu';
import QuoteDetails from './quoteDetails';
import { calculatePercent } from '../../../../../../../../utils';
import { toaster } from '../../../../../../../../utils/toaster';
import { Mutation } from 'react-apollo';
import { UPDATE_CONTRACT } from '../../../../../../../../data/mutations';

export default function EditProposalForm({
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
  const [tabNbr, setTabNbr] = React.useState(0);
  const [lockSubmit, setLockSubmit] = React.useState(true);
  useEffect(() => {
    const { cost, paymentTerms, currency, notes } = contractData;
    const percentLockCalc = calculatePercent(paymentTerms, cost, currency);
    setPercentLock(percentLockCalc);
    setLockSubmit(cost <= 0 ? true : false);
  }, [contractData]);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div style={{ width: '100%' }}>
        <Paper pt={'0'}>
          {contractData.status === 'submitted' ? (
            <Column>
              <Divider />
              <ContractSummaryForCreative contractData={contractData} />
              <EditContractButton
                contract={contractData}
                setContract={setContract}
                title="Retract and/or Edit"
              />
            </Column>
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
                      <Menu tab={{ tabNbr: tabNbr, setTabNbr: setTabNbr }} />
                      <Divider />
                      {tabNbr === 0 && (
                        <QuoteDetails
                          setContract={setContract}
                          contract={contractData}
                          mutation={mutation}
                          menu={
                            <BorderBox w={300} mb={0}>
                              <Meta str="Continue onto payment & milestones" />
                              <IconButton
                                title="Next"
                                onClickEvent={() => setTabNbr(1)}
                                styleOverride={{ width: '100%' }}
                                icon="chevron_right"
                                iconPos="right"
                              />
                            </BorderBox>
                          }
                        />
                      )}

                      {tabNbr === 1 && (
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
                                  onClickEvent={() => setTabNbr(2)}
                                  styleOverride={{ width: '100%' }}
                                  icon="chevron_right"
                                  iconPos="right"
                                />
                                <IconButton
                                  title="Back"
                                  icon=""
                                  color="text-dark"
                                  onClickEvent={() => {
                                    setTabNbr(0);
                                  }}
                                  styleOverride={{ margin: 0, padding: 0 }}
                                />
                              </Column>
                            </BorderBox>
                          }
                        />
                      )}
                      {tabNbr === 2 && (
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
                                onClickEvent={() => setTabNbr(0)}
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
                                  setTabNbr={setTabNbr}
                                  setContract={setContract}
                                />
                              </BorderBox>
                            )
                          )}
                        </div>
                      )}
                      {tabNbr === 3 && (
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
                                  setTabNbr(1);
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
