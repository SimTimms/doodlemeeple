import React from 'react';
import { Query } from 'react-apollo';
import { QUOTE_WIDGET } from './data';
import { Column } from '../../components';
import { QuoteComponent } from '../../widgets';

export default function QuoteOutWidget({ onClickEvent }) {
  return (
    <Column w={400}>
      <Query query={QUOTE_WIDGET} fetchPolicy="network-only">
        {({ data }) => {
          if (data)
            return data.quoteWidget.map((contract, index) => (
              <QuoteComponent contract={contract} onClickEvent={onClickEvent} />
            ));
          return null;
        }}
      </Query>
    </Column>
  );
}
