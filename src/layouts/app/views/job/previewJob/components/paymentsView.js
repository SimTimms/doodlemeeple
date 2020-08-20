import React from 'react';
import { useStyles } from '../styles';
import {
  ColumnWrapper,
  HeaderTwo,
  Column,
  Payments,
} from '../../../../../../components';
import { Query } from 'react-apollo';
import { PAYMENTS } from '../../../../../../data/queries';

export default function PaymentsView({ job }) {
  const classes = useStyles();

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
            data && console.log(data);
            return data ? <Payments data={data.paymentMany.reverse()} /> : null;
          }}
        </Query>
      </Column>
    </ColumnWrapper>
  );
}
