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
  BorderBox,
  Divider,
} from '../../../../../../components';
import { Query } from 'react-apollo';
import { PAYMENTS, GET_PAYMENT_TERMS } from '../../../../../../data/queries';
import Cookies from 'js-cookie';
import { Typography } from '@material-ui/core';

export default function PaymentsView({ job, refreshCount, setRefreshCount }) {
  const isCreator = Cookies.get('userId') === job.jobData.user._id;
  const [displayPayment, setDisplayPayment] = React.useState(false);
  const isFunded = job.jobData.activeContract.status === 'paid';
  const isPending = job.jobData.activeContract.status === 'pending';
  return (
    <Column j="center" a="center">
      {isCreator && !isFunded && (
        <Paper pt={10}>
          <Column j="center" a="center">
            <HeaderTwo str="Funding" />
            {!isPending ? (
              <IconButton
                title="Fund this Project"
                onClickEvent={() => setDisplayPayment(true)}
                icon="credit_card"
                color="warning"
              />
            ) : (
              <BorderBox>
                <Typography align="center">
                  Payment confirmation is pending, this should only take a few
                  minutes, you will receive an email as soon as this is done.
                </Typography>
                <Divider />
                <Typography align="center">
                  Please email{' '}
                  <a href="mailto:support@doodlemeeple.com">
                    support@doodlemeeple.com
                  </a>{' '}
                  if you believe there is an error.
                </Typography>
                <IconButton
                  title="Refresh"
                  icon="refresh"
                  styleOverride={{ margin: 'auto', marginTop: 10 }}
                  color="warning"
                  onClickEvent={() => setRefreshCount(refreshCount + 1)}
                />
              </BorderBox>
            )}
          </Column>
        </Paper>
      )}
      <Paper pt={10}>
        <Column j="center" a="center">
          <HeaderTwo str="Milestones" />

          <PaymentElement
            display={displayPayment}
            setDisplayPayment={setDisplayPayment}
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
        </Column>
      </Paper>
    </Column>
  );
}
