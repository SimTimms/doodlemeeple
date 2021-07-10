import React from 'react';
import { useStyles } from './styles';
import { NoticeBox } from '../';
import { HeaderThree, Column, Divider, TextLeft } from '../';
import { timeDifferenceForDate } from '../../utils/dates';

export default function ContractSummary({ contractData, contractStatus }) {
  let paymentTermsSum = contractData.cost;
  const classes = useStyles();
  return (
    <div className={classes.root}>
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
          str={`${
            parseInt(contractData.cost) + parseInt(contractData.cost) * 0.1
          } ${
            contractData.currency
          } - If you accept this quote the total amount payable today will be ${
            parseInt(contractData.cost) + parseInt(contractData.cost) * 0.1
          } ${contractData.currency}`}
        />
        <TextLeft
          str={`${contractData.cost} ${contractData.currency} - ${contractData.user.name} estimates they can complete this job for a total cost of ${contractData.cost} ${contractData.currency}`}
        />
        <TextLeft
          str={`${parseInt(contractData.cost) * 0.1} ${
            contractData.currency
          } - The ${process.env.company} commission on this quote will be ${
            parseInt(contractData.cost) * 0.1
          } ${contractData.currency}`}
        />

        <Divider />
        <HeaderThree str="Payment Schedule" />
        <TextLeft
          str={`${process.env.REACT_APP_COMPANY_PUBLIC_NAME} will release funds to the Creative according to this payment schedule:`}
        />
        <TextLeft
          str={`${parseInt(contractData.cost) * 0.1} ${
            contractData.currency
          } upon commencement of the project`}
        />
        {contractData.paymentTerms.map((term, index) => {
          paymentTermsSum = paymentTermsSum - term.percent;
          return (
            <TextLeft
              key={`term_summary_${index}`}
              str={`${term.percent} ${contractData.currency} ${term.description}`}
            />
          );
        })}
        {paymentTermsSum > 0 && (
          <TextLeft
            str={`${paymentTermsSum} ${contractData.currency} upon completion`}
          />
        )}

        <Divider />
        <HeaderThree str="Details of my offer" />
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
