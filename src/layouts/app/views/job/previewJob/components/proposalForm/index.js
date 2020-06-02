import React, { useEffect } from 'react';
import { Slide, TextField, Typography, Button } from '@material-ui/core';
import { useStyles } from './styles';
import {
  ContentHeader,
  FieldTitle,
  FieldTitleWrapper,
  CurrencySelector,
} from '../../../../../../../components';
import PaymentTerm from './components';
import autosave from '../../../../../../../utils/autosave';

export default function ProposalForm() {
  const classes = useStyles();
  const mutation = () => {};
  const [wholeFigures, setWholeFigures] = React.useState(false);
  const [percentLock, setPercentLock] = React.useState(false);
  const [contract, setContract] = React.useState({
    notes: '',
    deadline: '',
    cost: '',
    deposit: '',
    item: '',
    paymentTerms: [],
    currency: 'GBP',
  });

  useEffect(() => {
    console.log('ADS');
    let percentSum = 0;
    for (let i = 0; i < contract.paymentTerms.length; i++) {
      let numberVal = contract.paymentTerms[i].percent;

      percentSum += parseInt(numberVal === '' ? 0 : numberVal);
    }
    percentSum > 100 && percentLock === false && setPercentLock(true);
    percentSum <= 100 && percentLock === true && setPercentLock(false);
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
              contract.deadline ? `(${86 - contract.deadline.length})` : ''
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
            description="The expected date of when you will you finish this project and provide the client with all the specified works. Please be specific about whether this deadline is a rough estimate or a definite finishing time."
            warning="Example: 1020"
            inline={true}
          />
          <TextField
            id={'cost'}
            value={contract.cost}
            label={contract.cost !== '' ? `Cost ${contract.cost}.00` : `00.00`}
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
          <Typography color="error">Whole figures only please</Typography>
        )}
        <div style={{ marginTop: 20, width: '100%' }} />
        <FieldTitle
          name=" 3. Payment Terms"
          description="Go into detail about how and when you would like to be paid, be very specific about your terms to decrease the chance of a dispute further down the line."
          warning="Example: The Creative shall receive 10% upon commencement of the project, The Creative shall receive 20% upon delivery of 24 full resolution jgeg images, the Creative shall receive 70% upon delivery of all remaining specified items"
          inline={false}
        />

        {contract.paymentTerms.map((term, index) => (
          <PaymentTerm
            contract={contract}
            setContract={setContract}
            term={term}
            index={index}
            key={`term_${index}`}
            mutation={mutation}
            availablePercent={100}
            percentLock={percentLock}
          />
        ))}
        {percentLock ? (
          'DONE'
        ) : (
          <Button
            color="primary"
            style={{ textTransform: 'none' }}
            onClick={() =>
              addPaymentTerm({
                id: 'new',
                percent: '0',
                description: 'completion',
              })
            }
          >
            + Add another payment term
          </Button>
        )}

        <FieldTitle
          name=" 3. Additional Notes"
          description="Record any other clauses or notes that should be attached with this contract."
          warning=""
          inline={false}
        />
        <TextField
          id={'notes'}
          value={contract.notes}
          label={`Notes ${
            contract.notes ? `(${186 - contract.notes.length})` : ''
          }`}
          inputProps={{ maxLength: 86 }}
          onChange={(e) => {
            autosave(mutation, 'notes');
            setContract({ ...contract, notes: e.target.value });
          }}
          multiline
          margin="normal"
          variant="outlined"
          style={{ marginRight: 10 }}
        />
      </div>
    </Slide>
  );
}
