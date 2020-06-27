import React from 'react';
import { Typography } from '@material-ui/core';
import moment from 'moment';
import { useStyles } from './styles';
import { NoticeBox } from '../';
import clsx from 'clsx';

export default function ContractSummary({ contractData }) {
  let paymentTermsSum = 100;
  const classes = useStyles();
  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      {contractData.status === 'accepted' && (
        <NoticeBox
          title="Accepted"
          color="secondary"
          subTitle={`This quote was accepted by the Client on 
        ${moment(contractData.signedDate).format('LLLL')}`}
        />
      )}
      {contractData.status === 'declined' && (
        <NoticeBox
          title="Declined"
          subTitle={`This quote was declined by the Client on 
            ${moment(contractData.signedDate).format('LLLL')}`}
          color="warning"
        />
      )}
      <div className={classes.wrapper}>
        <Typography variant="h4">
          <b>{`${contractData.cost}.00 ${contractData.currency}`}</b>
        </Typography>
        <Typography variant="h5">
          <b>{`${contractData.job.name}`}</b>
        </Typography>
        <Typography variant="body1" style={{ marginTop: 30 }}>
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
          <div>
            <Typography variant="body1">
              {`${paymentTermsSum}% of the Payment upon completion of the Services`}
            </Typography>
          </div>
        )}

        <Typography
          variant="body1"
          style={{ marginTop: 30, paddingBottom: 30 }}
        >
          <b>Additional Notes:</b>
          <br />
          {contractData.notes ? ` ${contractData.notes}` : ` No Notes`}
        </Typography>
      </div>
    </div>
  );
}
