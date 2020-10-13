import React from 'react';
import {
  HeaderTwo,
  Column,
  Payments,
  PaymentTermsWithdraw,
  Paper,
} from '../../../../../../components';
import { Query } from 'react-apollo';
import { PAYMENTS, GET_PAYMENT_TERMS } from '../../../../../../data/queries';
import Cookies from 'js-cookie';

export default function PaymentsView({ job }) {
  const isCreator = Cookies.get('userId') === job.user._id;

  return (
    <Column j="center" a="center">
      <Paper pt={10}>
        <Column j="center" a="center">
          <HeaderTwo str="Milestones" />
          <Query
            query={GET_PAYMENT_TERMS}
            variables={{
              contractId: job.contracts[0]._id,
            }}
            fetchPolicy="network-only"
          >
            {({ data }) => {
              return data ? (
                <PaymentTermsWithdraw
                  data={data.getPaymentTerms}
                  isCreator={isCreator}
                />
              ) : null;
            }}
          </Query>
        </Column>
      </Paper>
      <Paper pt={10}>
        <Column j="center" a="center">
          <HeaderTwo str="Payments" />
          <Query
            query={PAYMENTS}
            variables={{
              contractId: job.contracts[0]._id,
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
