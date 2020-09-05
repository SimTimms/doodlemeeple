import React from 'react';
import { Typography } from '@material-ui/core';
import { Divider } from '../';
import { useStyles } from './styles';
import moment from 'moment';
import { IconButton, BorderBox } from '../';

export default function ContractComponentForCreative({
  contractData,
  history,
  ...props
}) {
  let paymentTermsSum = 100;
  const classes = useStyles();
  const { setOpenContract, setContractStatus, readOnly } = props;

  return (
    <div style={{ width: '100%' }}>
      <div className={classes.wrapper}>
        <Typography variant="h5" style={{ textAlign: 'center' }}>
          General Service Agreement
        </Typography>
        <Divider />
        <Typography>
          <b>
            {`THIS GENERAL SERVICE AGREEMENT (the
“Agreement”) is dated: ${moment(contractData.updatedAt).format('LLLL')} GMT.`}
          </b>
        </Typography>
        <Divider />
        <Typography>
          <b>Project:</b>
          {` ${contractData.job.name} `}
        </Typography>
        <Typography>
          <b>Client:</b>
          {` ${contractData.job.user.name}`}
        </Typography>
        <Typography>
          <b>Creative:</b>
          {` ${contractData.user.name}`}
        </Typography>
        <Divider />
        <Typography variant="h5">
          The Client and Creative (the “Party” or “Parties”) agree as follows:
        </Typography>
        <Divider />
        <Typography>
          <b>1. BACKGROUND:</b>
        </Typography>
        <Typography style={{ marginLeft: 40 }}>
          <b>1.1</b> The Client is of the opinion that the Creative has the
          necessary qualifications, experience and abilities to provide services
          to the Client.
        </Typography>
        <Typography style={{ marginLeft: 40 }}>
          <b>1.2</b> The Creative is agreeable to providing such services to the
          Client on the terms and conditions set out in this Agreement.
        </Typography>
        <Divider />
        <Typography>
          <b>2. SERVICES:</b>
        </Typography>
        <Typography style={{ marginLeft: 40 }}>
          <b>2.1</b> The Client agrees to engage the Creative to provide the
          Client with the following services (the "Services"):
        </Typography>
        <Typography style={{ marginLeft: 40, marginTop: 20 }}>
          <b>{contractData.job.name}</b>
          {` ${contractData.job.summary}`}
        </Typography>
        <Divider />
        <Typography>
          <b>3. TERM OF AGREEMENT:</b>
        </Typography>
        <Typography style={{ marginLeft: 40 }}>
          <b>3.1</b> The term of this Agreement (the "Term") will begin on the
          date of this Agreement and will remain in full force and effect until
          the completion of the Services. The Term may be extended or terminated
          with written consent of the Parties
        </Typography>
        <Divider />
        <Typography>
          <b>4. PERFORMANCE:</b>
        </Typography>
        <Typography style={{ marginLeft: 40 }}>
          <b>4.1</b> The Parties agree to do everything necessary to ensure that
          the terms of this Agreement take effect.
        </Typography>
        <Divider />
        <Typography>
          <b>5. COMPLETION DATE:</b>
        </Typography>
        <Typography style={{ marginLeft: 40 }}>
          <b>5.1</b> {contractData.deadline}
        </Typography>
        <Divider />
        <Typography>
          <b>6. PAYMENT:</b>
        </Typography>
        <Typography style={{ marginLeft: 40 }}>
          <b>6.1</b> The Client will be charged a total fee of{' '}
          {`${contractData.cost}
${contractData.currency} `}
          for the Services (the "Payment")
        </Typography>
        <Typography style={{ marginLeft: 40 }}>
          <b>6.2</b> The Creative will receive 87.5% of the total payment, an
          amount equating to{' '}
          {`${contractData.cost * 0.875}
${contractData.currency} `}
        </Typography>
        <Typography style={{ marginLeft: 40 }}>
          <b>6.3</b> DoodleMeeple will retain 12.5% of the total payment, an
          amount equating to{' '}
          {`${contractData.cost * 0.125}
${contractData.currency} `}
        </Typography>
        <Divider />
        <Typography>
          <b>7. PAYMENT TERMS:</b>
        </Typography>
        <Typography style={{ marginLeft: 40 }}>
          <b>7.1</b> The Client agrees to pay the Creative the Payment according
          to the payment terms as follows (The Payment Schedule):
        </Typography>
        {contractData.paymentTerms.map((term, index) => {
          paymentTermsSum = paymentTermsSum - term.percent;
          return (
            <Typography key={`term_${index}`} style={{ marginLeft: 80 }}>
              <b>{`7.1.${index + 1}: `}</b>
              {`The Creative shall receive ${term.percent}% of the Payment upon ${term.description}`}
            </Typography>
          );
        })}
        {paymentTermsSum > 0 && (
          <Typography
            key={`term_${contractData.paymentTerms.length}`}
            style={{ marginLeft: 80 }}
          >
            <b>{`7.1.${contractData.paymentTerms.length + 1}: `}</b>
            {`${paymentTermsSum}% of the Payment upon completion of the Services`}
          </Typography>
        )}
        <Typography style={{ marginLeft: 40 }}>
          <b>7.2</b> The Creative will commence and/or continue to fulfil the
          Services upon notification of payment(s) to DoodleMeeple according to
          the Payment Schedule.
        </Typography>
        <Typography style={{ marginLeft: 40 }}>
          <b>7.3</b> DoodleMeeple will release funds to the Creative upon
          approval from both Parties that the Services have been completed
          according to the Payment Schedule
        </Typography>
        <Divider />
        <Typography>
          <b>8. ADDITIONAL TERMS & NOTES:</b>
        </Typography>
        <Typography style={{ marginLeft: 40 }}>
          <b>8.1</b> This agreement is subject to the additional terms and/or
          notes set out by the Creative as follows:
        </Typography>
        <Typography style={{ marginLeft: 80 }}>
          <b>8.1.1</b>{' '}
          {contractData.notes === ''
            ? 'No additional notes'
            : contractData.notes}
        </Typography>
        <Divider />
        <Typography>
          <b>9. DOODLE MEEPLE TERMS:</b>
        </Typography>
        <Typography style={{ marginLeft: 40 }}>
          <b>9.1</b> This agreement is subject to the Doodle Meeple terms and
          conditions as follows:
        </Typography>
        <Typography style={{ marginLeft: 80 }}>
          <b>9.1.1</b> [link to terms]
        </Typography>
        <Typography style={{ marginLeft: 80 }}>
          <b>9.1.2</b> Where ambiguity or conflict arises between the terms of
          this Agreement and the Doodle Meeple Terms & Conditions the Doodle
          Meeple Terms and conditions will take precedence.
        </Typography>
        <Divider />
        <Typography>
          <b>10. SIGNATURES:</b>
        </Typography>
        <Typography style={{ marginLeft: 40, paddingBottom: 10 }}>
          <b>10.1</b> By clicking "I Accept" the Client will enter into a
          binding contract with the Creative.
        </Typography>
        <BorderBox>
          <IconButton
            title="Minimise Contract"
            color="text-dark"
            icon="close"
            onClickEvent={() => {
              setOpenContract(false);
            }}
            styleOverride={{ width: '100%' }}
          />
        </BorderBox>
      </div>
    </div>
  );
}