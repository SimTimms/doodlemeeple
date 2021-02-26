import React from 'react';
import {
  BorderBox,
  Meta,
  IconButton,
} from '../../../../../../../../components';
import QuoteDetails from './quoteDetails';

export default function quoteTabDetails({
  contractData,
  setContract,
  setTabNbr,
}) {
  return (
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
  );
}
