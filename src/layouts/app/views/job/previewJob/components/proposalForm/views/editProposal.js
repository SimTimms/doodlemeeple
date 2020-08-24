import React, { useEffect } from 'react';
import { Slide, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import {
  FieldTitle,
  Divider,
  IconButton,
  ActionWrapper,
  FieldBox,
  Column,
  NoticeBox,
} from '../../../../../../../../components';
import PaymentTerm from '../components';
import autosave from '../../../../../../../../utils/autosave';
import { calculatePercent } from '../../../../../../../../utils';
import { toaster } from '../../../../../../../../utils/toaster';
import { Mutation } from 'react-apollo';
import {
  CREATE_CONTRACT,
  UPDATE_CONTRACT,
  CREATE_TERM,
} from '../../../../../../../../data/mutations';

export default function EditProposalForm({
  jobId,
  contractData,
  setContractParent,
}) {
  const classes = useStyles();
  const [wholeFigures, setWholeFigures] = React.useState(false);
  const [percentLock, setPercentLock] = React.useState({
    status: false,
    sum: null,
    message: '',
  });
  const commissionRate = 0.125;
  const [detailsLock, setDetailsLock] = React.useState(false);
  const [saveLock, setSaveLock] = React.useState(false);
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

  function addPaymentTerm(newValue) {
    setContract({
      ...contract,
      paymentTerms: [...contract.paymentTerms, { ...newValue }],
    });
  }

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div>
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
                    type="button"
                    iconPos="right"
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
          <div className={classes.root}>
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
                    <Column a="flex-start" j="flex-start">
                      <FieldTitle
                        name="1. Quote Details"
                        description="Be precise, this will form the basis of the contractual obligations between you and the client."
                        warning=""
                        inline={true}
                      />
                      <Divider />
                      <FieldBox
                        value={contract.startDate}
                        title="Start Date"
                        maxLength={86}
                        onChangeEvent={(e) => {
                          autosave(mutation, 'username');
                          setContract({
                            ...contract,
                            startDate: e,
                          });
                        }}
                        replaceMode="loose"
                        placeholder="Example: Start of May"
                        info="The expected date of when you will start this project. Please be specific about whether this is a rough estimate or a definite start time."
                        warning="Example: Between 1st and 7th May 2020"
                        size="s"
                        multiline={false}
                      />
                      <FieldBox
                        value={contract.deadline}
                        title="Delivery Date"
                        maxLength={86}
                        onChangeEvent={(e) => {
                          autosave(mutation, 'username');
                          setContract({
                            ...contract,
                            deadline: e,
                          });
                        }}
                        replaceMode="loose"
                        placeholder="Example: End of May"
                        info="The expected date of when you will finish this project and provide the client with all the specified works. Please be specific about whether this deadline is a rough estimate or a definite finishing time."
                        warning="Example: Around the 21st May, give or take 2-3 days"
                        size="s"
                        multiline={false}
                      />
                      <FieldBox
                        value={contract.cost}
                        title="Total Cost"
                        maxLength={12}
                        onChangeEvent={(e) => {
                          e.indexOf('.') > -1
                            ? setWholeFigures(true)
                            : setWholeFigures(false);

                          setContract({ ...contract, cost: e });
                          autosave(mutation, null);
                        }}
                        replaceMode="number"
                        placeholder="Example: 1050"
                        info="The total amount you will be paid upon completion of this job, please take into consideration that Doodle Meeple fees will be subtracted from this amount"
                        warning="Example: 1050"
                        size="s"
                        multiline={false}
                      />

                      <FieldBox
                        value={contract.currency}
                        title="Currency"
                        maxLength={0}
                        onChangeEvent={(e) => {
                          setContract({ ...contract, currency: e });
                          autosave(mutation, null);
                        }}
                        replaceMode="currency"
                        placeholder="Example: GBP"
                        info=""
                        warning=""
                        size="s"
                        multiline={false}
                      />
                      <FieldBox
                        value={contract.notes}
                        title="Notes"
                        maxLength={1024}
                        onChangeEvent={(e) => {
                          setContract({ ...contract, notes: e });
                          autosave(mutation, null);
                        }}
                        replaceMode="loose"
                        placeholder="Example: This quote is valid for 7 days"
                        info="Add more information to your quote, show you understand the project and what's required by tailoring the content to this specific job"
                        warning=""
                        size="s"
                        multiline={true}
                      />
                      <Divider />
                      <FieldTitle
                        name="2. Commission Deductions"
                        description="Be precise, this will form the basis of the contractual obligations between you and the client."
                        warning=""
                        inline={true}
                      />
                      <Divider />
                      <NoticeBox
                        title="Please Note"
                        subTitle={`After the DoodleMeeple commission fee of ${
                          commissionRate * 100
                        }% you will receive ${
                          contract.cost - contract.cost * commissionRate
                        } ${contract.currency}`}
                        color="primary"
                      />
                    </Column>
                    {wholeFigures && (
                      <Typography color="error">
                        Whole figures only please
                      </Typography>
                    )}
                    <div style={{ marginTop: 20, width: '100%' }} />

                    <FieldTitle
                      name="3. Payment Terms"
                      description="Go into detail about how and when you would like to be paid, be very specific about your terms to decrease the chance of a dispute further down the line."
                      warning="Example: The Creative shall receive 10% upon commencement of the project, The Creative shall receive 20% upon delivery of 10 full resolution SVG files, the Creative shall receive 70% upon delivery of all remaining specified items"
                      inline={true}
                    />

                    {contract.paymentTerms.map((paymentTerm, index) => (
                      <PaymentTerm
                        contract={contract}
                        setContract={setContract}
                        paymentTerm={paymentTerm}
                        index={index}
                        key={`term_${index}`}
                        availablePercent={100}
                        calculatePercent={calculatePercent}
                        setPercentLock={setPercentLock}
                        percentLock={percentLock}
                        saveLock={saveLock}
                        setSaveLock={setSaveLock}
                        setDetailsLock={setDetailsLock}
                      />
                    ))}
                    {percentLock.message !== '' && (
                      <Typography
                        style={{
                          paddingLeft: 30,
                          marginTop: 10,
                          marginBottom: 10,
                          width: '100%',
                          boxSizing: 'border-box',
                        }}
                      >
                        {percentLock.message}
                      </Typography>
                    )}
                    <Mutation
                      mutation={CREATE_TERM}
                      variables={{
                        percent: 0,
                        description: '',
                        contractId: contract._id,
                      }}
                      onCompleted={(data) => {
                        toaster('Created');
                        setDetailsLock(true);
                        addPaymentTerm({
                          _id: data.paymentTermsCreateOne.recordId,
                          percent: 0,
                          description: '',
                          contractId: contract._id,
                        });
                      }}
                    >
                      {(mutation, { loading }) => {
                        return (
                          <IconButton
                            disabled={detailsLock || percentLock.sum < 0}
                            color="secondary"
                            title="Payment Term"
                            icon="add"
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

                    <Divider />
                  </div>
                );
              }}
            </Mutation>
            <Mutation
              mutation={UPDATE_CONTRACT}
              variables={{
                ...contract,
                status: 'preview',
              }}
              onCompleted={(data) => {
                toaster('Submitted');
                setDetailsLock(true);
                setContractParent({ ...contract, status: 'preview' });
              }}
            >
              {(mutation) => {
                return (
                  <div className={classes.actionWrapper}>
                    <IconButton
                      title="Next"
                      icon="chevron_right"
                      color="primary"
                      styleOverride={{ marginBottom: 30, width: '100%' }}
                      disabled={false}
                      onClickEvent={() => mutation()}
                      type="button"
                      iconPos="right"
                    />
                  </div>
                );
              }}
            </Mutation>
          </div>
        )}
      </div>
    </Slide>
  );
}
