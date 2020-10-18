import React from 'react';
import {
  HeaderTwo,
  Column,
  Payments,
  PaymentTermsWithdraw,
  Paper,
  IconButton,
  PaymentElement,
  UnlockInfo,
} from '../../../../../../components';
import { Query } from 'react-apollo';
import { PAYMENTS, GET_PAYMENT_TERMS } from '../../../../../../data/queries';
import Cookies from 'js-cookie';

export default function PaymentsView({ job }) {
  const isCreator = Cookies.get('userId') === job.jobData.user._id;
  const [displayPayment, setDisplayPayment] = React.useState(false);
  const isFunded = job.jobData.activeContract.status === 'paid';
  return (
    <Column j="center" a="center">
      {isCreator && !isFunded && (
        <Paper pt={10}>
          <Column j="center" a="center">
            <HeaderTwo str="Funding" />
            <IconButton
              title="Fund this Project"
              onClickEvent={() => setDisplayPayment(true)}
              icon="credit_card"
              color="warning"
            />
          </Column>
        </Paper>
      )}
      <Paper pt={10}>
        <Column j="center" a="center">
          <HeaderTwo str="Milestones" />

          <PaymentElement
            display={displayPayment}
            job={{ jobData: job.jobData, setJobData: job.setJobData }}
          />
          {!isFunded ? (
            <UnlockInfo str="Fund this project to unlock" />
          ) : (
            <Query
              query={GET_PAYMENT_TERMS}
              variables={{
                contractId: job.jobData.activeContract._id,
              }}
              fetchPolicy="network-only"
            >
              {({ data }) => {
                return data ? (
                  <PaymentTermsWithdraw
                    data={data.getPaymentTerms}
                    isCreator={isCreator}
                    isFunded={isFunded}
                  />
                ) : null;
              }}
            </Query>
          )}
        </Column>
      </Paper>
      <Paper pt={10}>
        <Column j="center" a="center">
          <HeaderTwo str="Payment History" />
          {!isFunded ? (
            <UnlockInfo str="Fund this project to unlock" />
          ) : (
            <Query
              query={PAYMENTS}
              variables={{
                contractId: job.jobData.activeContract._id,
                accountOne: isCreator ? 'commission' : '',
                accountTwo: 'holding',
              }}
              fetchPolicy="network-only"
            >
              {({ data }) => {
                return data ? (
                  <Payments data={data.paymentMany.reverse()} type="creative" />
                ) : null;
              }}
            </Query>
          )}
        </Column>
      </Paper>
    </Column>
  );
}
