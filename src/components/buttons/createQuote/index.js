import React from 'react';
import { IconButton, BorderBox, Meta, Paper, HeaderThree } from '../../';
import { toaster } from '../../../utils/toaster';
import { useMutation } from '@apollo/client';
import { CREATE_CONTRACT } from '../../../data/mutations';

export default function CreateQuoteButton({
  jobId,
  contract,
  setContract,
  ...props
}) {
  const { style } = props;
  const [createContract, { loading }] = useMutation(
    CREATE_CONTRACT,
    {
      variables: {
        currency: 'GBP',
        cost: '100',
        jobId,
      },
    },
    {
      onCompleted({ contractCreateOne }) {
        toaster('Created');
        const updatedId = contractCreateOne.recordId;
        setContract({
          cost: contractCreateOne.record.cost,
          currency: contractCreateOne.record.currency,
          _id: updatedId,
          updatedAt: contractCreateOne.record.updatedAt,
          user: contractCreateOne.record.user,
          job: contractCreateOne.record.job,
          paymentTerms: [],
          status: null,
        });
      },
    }
  );

  return (
    <Paper>
      <HeaderThree str="My Quote" />
      <BorderBox w={300}>
        <Meta str="Create a quote for this job" />
        <IconButton
          disabled={false}
          color="warning"
          title={loading ? 'Creating...' : 'Create a Quote'}
          icon="fact_check"
          onClickEvent={() => {
            !loading && createContract();
          }}
          styleOverride={{
            margin: style !== 'mini' ? 'auto' : 0,
            marginTop: 10,
            marginBottom: 10,
          }}
        />
        x
      </BorderBox>
    </Paper>
  );
}
