import React from 'react';
import { Query } from 'react-apollo';
import { QUOTE_IN_WIDGET } from './data';
import { Column } from '../../components';
import { QuoteInCard } from './quoteCard';

export default function QuoteInWidget({ jobId }) {
  return (
    <Column>
      <Query
        query={QUOTE_IN_WIDGET}
        variables={{ jobId }}
        fetchPolicy="network-only"
      >
        {({ data }) => {
          if (data)
            return data.quoteInWidget.map((contract, index) => (
              <QuoteInCard contract={contract} key={`contract_${index}`} />
            ));
          return null;
        }}
      </Query>
    </Column>
  );
}
