import React from 'react';
import { Typography } from '@material-ui/core';
import { Query } from 'react-apollo';
import { QUOTE_IN_WIDGET } from './data';
import { Column, CardComponent } from '../../components';
import { QuoteInCard } from './quoteCard';

export default function QuoteInWidget({ jobId }) {
  return (
    <Column>
      <Column w={600}>
        <Query
          query={QUOTE_IN_WIDGET}
          variables={{ jobId }}
          fetchPolicy="network-only"
        >
          {({ data }) => {
            if (data && data.quoteInWidget.length === 0) {
              return (
                <CardComponent type="dark">
                  <Typography>No Quotes Yet</Typography>
                </CardComponent>
              );
            }
            if (data)
              return data.quoteInWidget.map((contract, index) => (
                <QuoteInCard contract={contract} key={`contract_${index}`} />
              ));
            return null;
          }}
        </Query>
      </Column>
    </Column>
  );
}
