import React from 'react';
import { Query } from 'react-apollo';
import { QUOTE_WIDGET } from './data';
import { Column } from '../../components';
import { QuoteCard } from './quoteCard';

export default function QuoteOutWidget() {
  return (
    <Column>
      <Query query={QUOTE_WIDGET} fetchPolicy="network-only">
        {({ data }) => {
          if (data)
            return data.quoteWidget.map((contract, index) => (
              <QuoteCard contract={contract} />
            ));
          return null;
        }}
      </Query>
    </Column>
  );
}
