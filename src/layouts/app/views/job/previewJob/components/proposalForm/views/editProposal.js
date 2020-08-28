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
  ContractSummary,
  SubmitContractButton,
  EditContractButton,
  IconButton,
} from '../../../../../../../../components';
import { SubmitButton } from './components';
import QuoteDetails from './quoteDetails';
import PaymentTerms from './paymentTerms';
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
  setContractParent,
  setProposalOpen,
}) {
  const classes = useStyles();

  const [percentLock, setPercentLock] = React.useState({
    status: false,
    sum: null,
    message: '',
  });
  const [detailsLock, setDetailsLock] = React.useState(false);
  const [saveLock, setSaveLock] = React.useState(false);
  const [showContract, setShowContract] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [contract, setContract] = React.useState({
    _id: '',
    notes: '',
    deadline: '',
    startDate: '',
    updatedAt: '',
    cost: '100',
    paymentTerms: [],
    currency: 'GBP',
    status: '',
    job: {},
    user: {},
  });

  useEffect(() => {
    const paymentTerms = contractData.paymentTerms;

    setContract({
      _id: contractData._id,
      paymentTerms: paymentTerms,
      notes: contractData.notes,
      deadline: contractData.deadline,
      startDate: contractData.startDate,
      updatedAt: contractData.updatedAt,
      cost: contractData.cost ? contractData.cost : '0',
      currency: contractData.currency,
      status: contractData.status,
      job: contractData.job,
      user: contractData.user,
    });
    const percentLockCalc = calculatePercent(paymentTerms);
    setPercentLock(percentLockCalc);
    percentLockCalc.sum >= 0 ? setSaveLock(false) : setSaveLock(true);
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
              name: 'Milestones',
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
        <Paper>
          {contract._id === '' ? (
            <ActionWrapper>
              <Mutation
                mutation={CREATE_CONTRACT}
                variables={{
                  currency: 'GBP',
                  cost: '0',
                  jobId,
                }}
                onCompleted={(data) => {
                  toaster('Autosave');
                  const updatedId = data.contractCreateOne.recordId;
                  setLoading(false);
                  setContract({ ...contract, _id: updatedId });
                }}
              >
                {(mutation) => {
                  return (
                    <IconButton
                      disabled={false}
                      color="primary"
                      title={loading ? 'Creating...' : 'Create a Quote'}
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
          ) : contract.status === 'submitted' ? (
            <div>
              <Typography>
                Submitted - this should display a view of the contract and allow
                editing - send a notification and email to the job owner - add a
                chat message with link to the contract
              </Typography>
            </div>
          ) : (
            <Column>
              <Mutation
                mutation={UPDATE_CONTRACT}
                variables={{
                  ...contract,
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
                          contract={contract}
                          mutation={mutation}
                          menu={
                            <BorderBox w={300}>
                              <Meta str="Continue onto payment milestones" />
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
                          contract={contract}
                          setContract={setContract}
                          calculatePercent={calculatePercent}
                          saveLock={saveLock}
                          setSaveLock={setSaveLock}
                          setDetailsLock={setDetailsLock}
                          detailsLock={detailsLock}
                          menu={
                            <BorderBox w={300}>
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
                                iconPos="left"
                                color="text-dark"
                                onClickEvent={() => {
                                  setPage(0);
                                }}
                                styleOverride={{ width: '100%' }}
                              />
                            </BorderBox>
                          }
                        />
                      )}
                      {page === 2 && (
                        <div style={{ width: '100%' }}>
                          <ContractSummary
                            contractData={contract}
                            contractStatus={contract.status}
                          />
                          <ActionWrapper>
                            <EditContractButton
                              contract={contract}
                              jobId={jobId}
                              setContract={setContract}
                              title="Edit Quote"
                            />
                            <SubmitContractButton
                              contract={contract}
                              jobId={jobId}
                              setContract={setContract}
                            />
                            <IconButton
                              title="Minimise"
                              color="text-dark"
                              icon=""
                              disabled={false}
                              iconPos="right"
                              styleOverride={null}
                              type="button"
                              onClickEvent={() => {
                                setProposalOpen(false);
                              }}
                            />
                          </ActionWrapper>
                        </div>
                      )}
                      {/*
                      <Divider />
                      <FieldTitle
                        name="3. Contract Preview"
                        description="Be precise, this will form the basis of the contractual obligations between you and the client."
                        warning=""
                        inline={true}
                      />
                      <Divider />
                      <IconButton
                        title="Contract"
                        icon="fact_check"
                        color="secondary"
                        onClickEvent={() => {
                          setShowContract(true);
                        }}
                      />
                      {showContract && (
                        <ContractComponent
                          contractData={contract}
                          history={history}
                          readOnly={true}
                        />
                      )}*/}

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
