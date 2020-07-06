import React from 'react';
import { Typography } from '@material-ui/core';
import moment from 'moment';
import { useStyles } from './styles';
import { NoticeBox, LoadIcon } from '../';
import clsx from 'clsx';
import { ActionWrapper, HeaderTwo, Text, ColumnWrapper } from '../';

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
      {contractData.status === 'submitted' && (
        <NoticeBox
          title="Submitted"
          color="secondary"
          subTitle="This quote has been submitted to the Client"
        />
      )}
      {contractData.status === '' ||
        (contractData.status === 'preview' && (
          <NoticeBox
            title="Draft"
            color="primary"
            subTitle="This quote has not been submitted"
          />
        ))}
      {contractData.status === 'declined' && (
        <NoticeBox
          title="Declined"
          subTitle={`This quote was declined by the Client on 
            ${moment(contractData.signedDate).format('LLLL')}`}
          color="warning"
        />
      )}

      <ColumnWrapper>
        <HeaderTwo str={`Quote for ${contractData.job.name}`} />
        <Text str={`${contractData.cost}.00 ${contractData.currency}`} />
      </ColumnWrapper>
      <ColumnWrapper>
        <HeaderTwo str="Payment Schedule" />
        {contractData.paymentTerms.map((term, index) => {
          paymentTermsSum = paymentTermsSum - term.percent;
          return (
            <Text
              key={`term_summary_${index}`}
              str={`${term.percent}% upon ${term.description}`}
            />
          );
        })}
        {paymentTermsSum > 0 && (
          <Text str={`${paymentTermsSum}% upon completion`} />
        )}
      </ColumnWrapper>
      <ColumnWrapper>
        <HeaderTwo str="Additional Notes" />
        <Text
          str={contractData.notes ? ` ${contractData.notes}` : ` No Notes`}
        />
      </ColumnWrapper>
    </div>
  );
}
