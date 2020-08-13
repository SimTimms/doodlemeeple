import React, { useEffect } from 'react';
import { Slide, TextField, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import {
  FieldTitle,
  FieldTitleWrapper,
  CurrencySelector,
  Divider,
  IconButton,
  ActionWrapper,
} from '../../../../../../../../components';
import PaymentTerm from '../components';
import autosave from '../../../../../../../../utils/autosave';
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
  const [detailsLock, setDetailsLock] = React.useState(false);
  const [saveLock, setSaveLock] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [contract, setContract] = React.useState({
    id: '',
    notes: '',
    deadline: '',
    cost: '',
    paymentTerms: [],
    currency: 'GBP',
    status: '',
    job: {},
    user: {},
  });

  useEffect(() => {
    const paymentTerms = contractData.paymentTerms;

    setContract({
      id: contractData.id,
      paymentTerms: paymentTerms,
      notes: contractData.notes,
      deadline: contractData.deadline,
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

  function calculatePercent(paymentTermsArray) {
    let response = {
      status: false,
      sum: 0,
      message: '',
    };
    let percentSum = 0;

    for (let i = 0; i < paymentTermsArray.length; i++) {
      let numberVal = paymentTermsArray[i].percent;
      percentSum += parseInt(numberVal === '' ? 0 : numberVal);
    }

    response =
      percentSum > 100
        ? {
            status: true,
            sum: 100 - percentSum,
            message:
              'Although it would be nice, your payment terms cannot exceed 100%',
          }
        : percentSum === 100
        ? {
            status: false,
            sum: 100 - percentSum,
            message: '',
          }
        : percentSum < 100 && {
            status: false,
            sum: 100 - percentSum,
            message: `3.${
              paymentTermsArray.length + 1
            }: The Creative shall receive ${100 - percentSum}% of the total cost
upon completion of this contract.`,
          };
    return response;
  }

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div>
        {contract.id === '' ? (
          <ActionWrapper>
            <Mutation
              mutation={CREATE_CONTRACT}
              variables={{
                id: contract.id,
                contract: {
                  notes: '',
                  deadline: '',
                  currency: 'GBP',
                  cost: 0,
                  jobId,
                },
              }}
              onCompleted={(data) => {
                toaster('Autosave');
                const updatedId = data.createContract;
                setLoading(false);
                setContract({ ...contract, id: updatedId });
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
                id: contract.id,
                contract: {
                  notes: contract.notes,
                  deadline: contract.deadline,
                  currency: contract.currency,
                  cost: contract.cost,
                  jobId,
                },
              }}
              onCompleted={(data) => {
                toaster('Autosave');
                setDetailsLock(false);
                setLoading(false);
                const updatedId = data.updateContract;
                setContract({ ...contract, id: updatedId });
              }}
            >
              {(mutation) => {
                return (
                  <div className={classes.root}>
                    <FieldTitleWrapper>
                      <FieldTitle
                        name=" 1. Expected Delivery Date"
                        description="The expected date of when you will you finish this project and provide the client with all the specified works. Please be specific about whether this deadline is a rough estimate or a definite finishing time."
                        warning={`Example: "Around the 21st May, give or take 2-3 days"`}
                        inline={true}
                      />
                      <TextField
                        id={'deadline'}
                        value={contract.deadline}
                        label={`Delivery Date ${
                          contract.deadline
                            ? `(${86 - contract.deadline.length})`
                            : ''
                        }`}
                        inputProps={{ maxLength: 86 }}
                        onChange={(e) => {
                          autosave(mutation, null);
                          setContract({
                            ...contract,
                            deadline: e.target.value.substring(0, 86),
                          });
                        }}
                        multiline
                        margin="normal"
                        variant="outlined"
                        style={{ marginRight: 10, width: '100%' }}
                      />
                    </FieldTitleWrapper>
                    <FieldTitleWrapper>
                      <FieldTitle
                        name=" 2. Total Cost"
                        description="The total amount you will be paid upon completion of this job, please take into consideration that Doodle Meeple fees will be subtracted from this amount"
                        warning="Example: 1020"
                        inline={true}
                      />
                      <TextField
                        id={'cost'}
                        value={contract.cost}
                        label={
                          contract.cost !== ''
                            ? `Cost ${contract.cost}.00`
                            : `00.00`
                        }
                        inputProps={{ maxLength: 12 }}
                        onChange={(e) => {
                          e.target.value.indexOf('.') > -1
                            ? setWholeFigures(true)
                            : setWholeFigures(false);
                          const message = e.target.value
                            .substring(0, 12)
                            .replace(/[^0-9]/gi, '');
                          setContract({ ...contract, cost: message });
                          autosave(mutation, null);
                        }}
                        multiline
                        margin="normal"
                        variant="outlined"
                        style={{ marginRight: 10 }}
                      />
                      <CurrencySelector
                        selectedCurrency={contract.currency}
                        onChangeEvent={setContract}
                        mutation={mutation}
                        contract={contract}
                      />
                    </FieldTitleWrapper>
                    {wholeFigures && (
                      <Typography color="error">
                        Whole figures only please
                      </Typography>
                    )}
                    <div style={{ marginTop: 20, width: '100%' }} />

                    <FieldTitle
                      name=" 3. Payment Terms"
                      description="Go into detail about how and when you would like to be paid, be very specific about your terms to decrease the chance of a dispute further down the line."
                      warning="Example: The Creative shall receive 10% upon commencement of the project, The Creative shall receive 20% upon delivery of 10 full resolution SVG files, the Creative shall receive 70% upon delivery of all remaining specified items"
                      inline={false}
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
                        id: 'new',
                        paymentTerm: {
                          percent: 0,
                          description: '',
                          contractId: contract.id,
                        },
                      }}
                      onCompleted={(data) => {
                        toaster('Created');
                        setDetailsLock(true);
                        addPaymentTerm({
                          id: data.createPaymentTerm,
                          percent: 0,
                          description: '',
                          contractId: contract.id,
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
                    <FieldTitle
                      name=" 3. Additional Notes"
                      description="Record any other clauses or notes that should be attached with this contract."
                      warning="Example: Work will continue after payment is received according to each clause. Payment should be made within 3 days. This quote is valid for 7 days."
                      inline={false}
                    />
                    <div
                      style={{
                        width: '100%',
                        padding: '0 10px 20px 10px',
                        boxSizing: 'border-box',
                      }}
                    >
                      <TextField
                        id={'notes'}
                        value={contract.notes}
                        label={`Notes ${
                          contract.notes
                            ? `(${586 - contract.notes.length})`
                            : ''
                        }`}
                        inputProps={{ maxLength: 586 }}
                        onChange={(e) => {
                          autosave(mutation, 'notes');
                          setContract({
                            ...contract,
                            notes: e.target.value.substring(0, 586),
                          });
                        }}
                        multiline
                        margin="normal"
                        variant="outlined"
                        style={{
                          width: '100%',
                        }}
                      />
                    </div>
                  </div>
                );
              }}
            </Mutation>
            <Mutation
              mutation={UPDATE_CONTRACT}
              variables={{
                id: contract.id,
                contract: {
                  notes: contract.notes,
                  deadline: contract.deadline,
                  currency: contract.currency,
                  cost: contract.cost,
                  jobId,
                  status: 'preview',
                },
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
