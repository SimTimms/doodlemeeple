import React from 'react';
import { IconButton, BorderBox, Meta, Paper, HeaderThree } from '../../';
import { toaster } from '../../../utils/toaster';
import { Mutation } from 'react-apollo';
import { CREATE_CONTRACT } from '../../../data/mutations';

export default function CreateQuoteButton({
  jobId,
  contract,
  setContract,
  ...props
}) {
  const [loading, setLoading] = React.useState(false);
  const { style } = props;
  return (
    <Paper>
      <HeaderThree str="My Quote" />
      <BorderBox w={300}>
        <Meta str="Create a quote for this job" />
        <Mutation
          mutation={CREATE_CONTRACT}
          variables={{
            currency: 'GBP',
            cost: '100',
            jobId,
          }}
          onCompleted={(data) => {
            toaster('Created');
            const updatedId = data.contractCreateOne.recordId;
            setLoading(false);
            setContract({
              cost: data.contractCreateOne.record.cost,
              currency: data.contractCreateOne.record.currency,
              _id: updatedId,
              updatedAt: data.contractCreateOne.record.updatedAt,
              user: data.contractCreateOne.record.user,
              job: data.contractCreateOne.record.job,
              paymentTerms: [],
              status: null,
            });
          }}
        >
          {(mutation) => {
            return (
              <IconButton
                disabled={false}
                color="warning"
                title={loading ? 'Creating...' : 'Create a Quote'}
                icon="fact_check"
                onClickEvent={() => {
                  !loading && mutation();
                  setLoading(true);
                }}
                styleOverride={{
                  margin: style !== 'mini' ? 'auto' : 0,
                  marginTop: 10,
                  marginBottom: 10,
                }}
              />
            );
          }}
        </Mutation>
      </BorderBox>
    </Paper>
  );
}
