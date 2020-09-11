import React from 'react';
import {
  ColumnWrapper,
  HeaderTwo,
  Column,
  Payments,
} from '../../../../../../components';
import { Query } from 'react-apollo';
import { PAYMENTS } from '../../../../../../data/queries';

export default function PaymentsView({ job }) {
  return (
    <ColumnWrapper>
      <Column j="center" a="center">
        <HeaderTwo str="Payments" />
        <Query
          query={PAYMENTS}
          variables={{ contractId: job.contracts[0]._id }}
          fetchPolicy="network-only"
        >
          {({ data }) => {
            return data ? <Payments data={data.paymentMany.reverse()} /> : null;
          }}
        </Query>
      </Column>
    </ColumnWrapper>
  );
}
