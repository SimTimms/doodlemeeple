import React from 'react';
import moment from 'moment';
import { useStyles } from './styles';
import { NoticeBox } from '../';
import { HeaderThree, Column, Divider, TextLeft } from '../';
import { timeDifferenceForDate } from '../../utils/dates';

export default function ContractSummary({ contractData, contractStatus }) {
  let paymentTermsSum = 100;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {contractStatus === 'accepted' && (
        <NoticeBox
          title="Accepted"
          color="secondary"
          subTitle={`This quote was accepted by the Client on 
        ${moment(contractData.signedDate).format('LLLL')}`}
        />
      )}
      {contractStatus === 'submitted' && (
        <NoticeBox
          title="Submitted"
          color="secondary"
          subTitle="This quote has been submitted to the Client"
        />
      )}
      {contractStatus === '' ||
        (contractStatus === 'preview' && (
          <NoticeBox
            title="Draft"
            color="primary"
            subTitle="This quote has not been submitted"
          />
        ))}
      {contractStatus === 'declined' && (
        <NoticeBox
          title="Declined"
          subTitle={`This quote was declined by the Client`}
          color="warning"
        />
      )}

      <Column a="center" j="center">
        <HeaderThree
          str={`Quote for ${contractData.job.name} (${timeDifferenceForDate(
            contractData.updatedAt
          )})`}
        />
        <TextLeft
          str={`${contractData.user.name} estimates they can complete this job for a total cost of ${contractData.cost}.00 ${contractData.currency}`}
        />
        <Divider />
        <HeaderThree str="Payment Schedule" />
        {contractData.paymentTerms.map((term, index) => {
          paymentTermsSum = paymentTermsSum - term.percent;
          return (
            <TextLeft
              key={`term_summary_${index}`}
              str={`${term.percent}% upon ${term.description}`}
            />
          );
        })}
        {paymentTermsSum > 0 && (
          <TextLeft str={`${paymentTermsSum}% upon completion`} />
        )}
        <Divider />
        <HeaderThree str="Additional Notes" />
        <TextLeft
          str={
            contractData.notes
              ? ` ${contractData.notes}`
              : `There are no addition notes`
          }
        />
      </Column>
    </div>
  );
}
