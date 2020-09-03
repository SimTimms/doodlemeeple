import React from 'react';
import {
  Column,
  FieldTitle,
  Divider,
  FieldBox,
} from '../../../../../../../../components';
import autosave from '../../../../../../../../utils/autosave';
import { Typography } from '@material-ui/core';

export default function QuoteDetails({
  contract,
  setContract,
  mutation,
  menu,
}) {
  const [wholeFigures, setWholeFigures] = React.useState(false);

  return (
    <Column>
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
          e.indexOf('.') > -1 ? setWholeFigures(true) : setWholeFigures(false);
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
      {wholeFigures && (
        <Typography color="error">Whole figures only please</Typography>
      )}
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
      {menu}
    </Column>
  );
}
