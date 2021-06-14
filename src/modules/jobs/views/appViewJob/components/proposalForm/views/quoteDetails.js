import React from 'react';
import {
  Column,
  FieldTitle,
  Divider,
  FieldBox,
} from '../../../../../../../components';
import autosave from '../../../../../../../utils/autosave';

export default function QuoteDetails({
  contract,
  setContract,
  mutation,
  menu,
}) {
  return (
    <Column>
      <FieldTitle
        name="1. Quote Details"
        description="Be precise, this will form the basis of the contractual obligations between you and the client."
        warning=""
        inline={false}
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
        placeholder="12-Sep-2020"
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
        placeholder="01-Dec-2020"
        info="The expected date of when you will finish this project and provide the client with all the specified works. Please be specific about whether this deadline is a rough estimate or a definite finishing time."
        warning="Example: Around the 21st May, give or take 2-3 days"
        size="s"
        multiline={false}
      />
      <FieldBox
        value={contract.notes}
        title="Additional Terms"
        maxLength={1024}
        onChangeEvent={(e) => {
          setContract({ ...contract, notes: e });
          autosave(mutation, null);
        }}
        replaceMode="loose"
        placeholder="Work will begin upon payment of the deposit"
        info="Add more information to your quote, show you understand the project and what's required by tailoring the content to this specific job"
        warning=""
        size="s"
        multiline={true}
      />
      {menu}
    </Column>
  );
}
