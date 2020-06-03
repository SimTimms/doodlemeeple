import React, { useEffect } from 'react';
import { Slide, TextField, Typography, Button } from '@material-ui/core';
import { useStyles } from './styles';
import {
  ContentHeader,
  FieldTitle,
  FieldTitleWrapper,
  CurrencySelector,
  Divider,
} from '../../../../../../../components';
import PaymentTerm from './components';
import autosave from '../../../../../../../utils/autosave';
import { toaster } from '../../../../../../../utils/toaster';
import { Mutation, Query } from 'react-apollo';
import {
  CREATE_CONTRACT,
  UPDATE_CONTRACT,
} from '../../../../../../../data/mutations';
import { GET_CONTRACT } from '../../../../../../../data/queries';

export default function ProposalForm({ jobId }) {
  const classes = useStyles();

  const [wholeFigures, setWholeFigures] = React.useState(false);
  const [percentLock, setPercentLock] = React.useState({
    status: false,
    message: '100',
  });
  const [detailsLock, setDetailsLock] = React.useState(false);

  const [contract, setContract] = React.useState({
    id: 'new',
    notes: '',
    deadline: '',
    cost: '',
    paymentTerms: [],
    currency: 'GBP',
  });

  useEffect(() => {
    let percentSum = 0;

    for (let i = 0; i < contract.paymentTerms.length; i++) {
      let numberVal = contract.paymentTerms[i].percent;
      percentSum += parseInt(numberVal === '' ? 0 : numberVal);
    }

    percentSum > 100 &&
      percentLock.status === false &&
      setPercentLock({
        status: true,
        message:
          'Although it would be nice, your payment terms cannot exceed 100%',
      });
    percentSum === 100 &&
      percentLock.status === false &&
      setPercentLock({
        status: true,
        message: '',
      });

    percentSum < 100 &&
      percentLock.message !== (100 - percentSum).toString() &&
      setPercentLock({
        status: false,
        message: `${(100 - percentSum).toString()}`,
      });
  }, [contract, percentLock]);

  function addPaymentTerm(newValue) {
    setContract({
      ...contract,
      paymentTerms: [...contract.paymentTerms, { ...newValue }],
    });
  }

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Mutation
          mutation={contract.id === 'new' ? CREATE_CONTRACT : UPDATE_CONTRACT}
          variables={{
            id: contract.id,
            contract: {
              notes: contract.notes,
              deadline: contract.deadline,
              paymentTerms: contract.paymentTerms,
              currency: contract.currency,
              cost: parseInt(contract.cost),
              jobId,
            },
          }}
          onCompleted={(data) => {
            toaster('Saved');
            setDetailsLock(false);
            const updatedId =
              contract.id === 'new' ? data.createContract : data.updateContract;
            setContract({ ...contract, id: updatedId });
          }}
        >
          {(mutation) => {
            return (
              <div className={classes.root}>
                <ContentHeader
                  title="Proposal"
                  subTitle="Create a new contract proposal"
                  subTitleExtra={null}
                  button={null}
                />
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
                      autosave(mutation, 'notes');
                      setContract({ ...contract, deadline: e.target.value });
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
                      const message = e.target.value.replace(/[^0-9]/gi, '');
                      setContract({ ...contract, cost: message });
                      autosave(mutation, 'notes');
                    }}
                    multiline
                    margin="normal"
                    variant="outlined"
                    style={{ marginRight: 10 }}
                  />
                  <CurrencySelector selectedCurrency={contract.currency} />
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
                <Divider />
                {contract.paymentTerms.map((paymentTerm, index) => (
                  <PaymentTerm
                    contract={contract}
                    setContract={setContract}
                    paymentTerm={paymentTerm}
                    index={index}
                    key={`term_${index}`}
                    availablePercent={100}
                    percentLock={percentLock}
                  />
                ))}

                {parseInt(percentLock.message) > 0 && (
                  <Typography
                    style={{
                      paddingLeft: 30,
                      marginTop: 10,
                      marginBottom: 10,
                      width: '100%',
                      boxSizing: 'border-box',
                    }}
                  >
                    {`Clause 3.${
                      contract.paymentTerms && contract.paymentTerms.length + 1
                    }: The Creative shall receive ${
                      percentLock.message !== '100' ? 'the remaining' : ''
                    } ${percentLock.message}% of the total cost
            upon completion of this contract.`}
                  </Typography>
                )}
                {percentLock.status ? (
                  <Typography
                    color="error"
                    style={{ marginTop: 10, marginBottom: 10 }}
                  >
                    {percentLock.message}
                  </Typography>
                ) : (
                  <Button
                    disabled={detailsLock}
                    color="primary"
                    style={{ textTransform: 'none' }}
                    onClick={() => {
                      setDetailsLock(true);
                      addPaymentTerm({
                        id: 'new',
                        percent: 0,
                        description: '',
                      });
                    }}
                  >
                    {`+ Add a payment term `}
                  </Button>
                )}
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
                      contract.notes ? `(${586 - contract.notes.length})` : ''
                    }`}
                    inputProps={{ maxLength: 586 }}
                    onChange={(e) => {
                      autosave(mutation, 'notes');
                      setContract({ ...contract, notes: e.target.value });
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
        <Query
          query={GET_CONTRACT}
          variables={{ jobId }}
          onCompleted={(data) => {
            if (data.getContract.length > 0) {
              const contract = data.getContract[0];
              const paymentTerms = data.getContract[0].paymentTerms;

              setContract({
                id: contract.id,
                paymentTerms: paymentTerms,
                notes: contract.notes,
                deadline: contract.deadline,
                cost: contract.cost ? contract.cost : 0,
                currency: contract.currency,
              });
            }
          }}
          fetchPolicy="network-only"
        >
          {({ data }) => {
            return null;
          }}
        </Query>
      </div>
    </Slide>
  );
}
