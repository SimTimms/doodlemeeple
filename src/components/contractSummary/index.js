import React from 'react';
import { Typography } from '@material-ui/core';
import { LoadIcon } from '../';
import { PREVIEW_CONTRACT } from '../../data/queries';
import { Query } from 'react-apollo';
import { useStyles } from './styles';

export default function ContractSummary({ contractId }) {
  let paymentTermsSum = 100;
  const classes = useStyles();
  return (
    <Query
      query={PREVIEW_CONTRACT}
      variables={{ contractId }}
      fetchPolicy="network-only"
    >
      {({ loading, data }) => {
        const contractData = data && data.previewContract;

        return loading ? (
          <LoadIcon />
        ) : (
          data && (
            <div className={classes.wrapper}>
              <Typography variant="h6">
                <b>{`${contractData.cost}.00 ${contractData.currency} for ${contractData.job.name}`}</b>
              </Typography>
              <Typography variant="body1" style={{ marginTop: 10 }}>
                <b>Subject to the following payment terms:</b>
              </Typography>

              {contractData.paymentTerms.map((term, index) => {
                paymentTermsSum = paymentTermsSum - term.percent;
                return (
                  <Typography variant="body1" key={`term_summary_${index}`}>
                    {`${term.percent}% upon ${term.description}`}
                  </Typography>
                );
              })}

              {paymentTermsSum > 0 && (
                <Typography variant="body1">
                  {`${paymentTermsSum}% of the Payment upon completion of the Services`}
                </Typography>
              )}
              <Typography variant="body1" style={{ marginTop: 10 }}>
                <b>Additional Notes:</b>
                <br />
                {contractData.notes ? ` ${contractData.notes}` : ` No Notes`}
              </Typography>
              <Typography variant="body1" style={{ marginTop: 10 }}>
                <b>Your Creative:</b>
              </Typography>
              <div className={classes.profileWrapper}>
                <img
                  src={data.previewContract.user.profileImg}
                  className={classes.profileImg}
                />
                <div className={classes.profileWrapperDetails}>
                  <Typography variant="h6">
                    {data.previewContract.user.name}
                  </Typography>
                  <Typography variant="body1">
                    {data.previewContract.user.summary}
                  </Typography>
                </div>
              </div>
            </div>
          )
        );
      }}
    </Query>
  );
}
