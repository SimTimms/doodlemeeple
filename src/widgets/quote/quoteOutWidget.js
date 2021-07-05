import React from 'react';
import { Query } from 'react-apollo';
import { QUOTE_WIDGET } from './data';
import { Column } from '../../components';
import { QuoteCard } from './quoteCard';
import { QuoteComponent } from '../../widgets';

export default function QuoteOutWidget({ history }) {
  return (
    <Column w={400}>
      <Query query={QUOTE_WIDGET} fetchPolicy="network-only">
        {({ data }) => {
          if (data)
            return data.quoteWidget.map((contract, index) => (
              <QuoteComponent contract={contract} history={history} />
            ));
          return null;
        }}
      </Query>
    </Column>
  );
}
