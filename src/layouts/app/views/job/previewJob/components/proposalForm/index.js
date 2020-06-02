import React from 'react';
import { Slide, TextField, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import {
  ContentHeader,
  FieldTitle,
  FieldTitleWrapper,
  CurrencySelector,
} from '../../../../../../../components';
import autosave from '../../../../../../../utils/autosave';

export default function ProposalForm() {
  const classes = useStyles();
  const mutation = () => {};

  const [contract, setContract] = React.useState({
    notes: '',
    deadline: '',
    cost: '',
    deposit: '',
    item: '',
    currency: 'GBP',
  });

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
            warning="Example: 1020.00"
            inline={true}
          />
          <TextField
            id={'cost'}
            value={contract.cost}
            label={`Total Cost `}
            inputProps={{ maxLength: 12 }}
            onChange={(e) => {
              autosave(mutation, 'notes');
              setContract({ ...contract, cost: e.target.value });
            }}
            multiline
            margin="normal"
            variant="outlined"
            style={{ marginRight: 10 }}
          />
          <CurrencySelector selectedCurrency={contract.currency} />
        </FieldTitleWrapper>
        <FieldTitle
          name=" 3. Payment Terms"
          description=""
          warning=""
          inline={false}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Typography>The Creative shall receive </Typography>
          <TextField
            id={'deposit'}
            value={contract.deposit}
            label={`£0.00 ${
              contract.deposit ? `(${10 - contract.deposit.length})` : ''
            }`}
            inputProps={{ maxLength: 10 }}
            onChange={(e) => {
              autosave(mutation, 'notes');
              setContract({ ...contract, deposit: e.target.value });
            }}
            multiline
            margin="normal"
            variant="outlined"
            style={{ marginRight: 10, marginLeft: 10, width: 70, marginTop: 8 }}
          />
          <Typography>upon delivery of </Typography>
          {'  '}
          <TextField
            id={'item'}
            value={contract.item}
            label={`Item (example: 24 cards) ${
              contract.item ? `(${86 - contract.item.length})` : ''
            }`}
            inputProps={{ maxLength: 86 }}
            onChange={(e) => {
              autosave(mutation, 'item');
              setContract({ ...contract, item: e.target.value });
            }}
            multiline
            margin="normal"
            variant="outlined"
            style={{ marginLeft: 10, marginTop: 8 }}
          />
        </div>
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
