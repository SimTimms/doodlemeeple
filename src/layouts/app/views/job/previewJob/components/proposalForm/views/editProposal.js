import React, { useEffect } from 'react';
import { Slide, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import {
  Divider,
  IconButton,
  ActionWrapper,
  BorderBox,
  Paper,
  Column,
  Meta,
} from '../../../../../../../../components';
import { NextButton } from './components';
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
  const [page, setPage] = React.useState(0);
  const [percentLock, setPercentLock] = React.useState({
    status: false,
    sum: null,
    message: '',
  });
  const [detailsLock, setDetailsLock] = React.useState(false);
  const [saveLock, setSaveLock] = React.useState(false);
  const [showContract, setShowContract] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [contract, setContract] = React.useState({
    _id: '',
    notes: '',
    deadline: '',
    startDate: '',
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
                        />
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
              <BorderBox w={300}>
                <Meta str="Continue onto payment milestones" />
                <NextButton
                  contract={contract}
                  setContractParent={setContractParent}
                  setDetailsLock={setDetailsLock}
                />
              </BorderBox>
              <IconButton
                title="Back"
                icon="chevron_left"
                iconPos="left"
                color="text-dark"
                onClickEvent={() => {
                  setProposalOpen(false);
                }}
              />
            </Column>
          )}
        </Paper>
      </div>
    </Slide>
  );
}
