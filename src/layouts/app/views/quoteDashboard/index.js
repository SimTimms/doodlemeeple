import React from 'react';
import { useStyles } from './styles';
import { MenuContext } from '../../../../context';
import QuoteListPage from './quoteListPage';
import { EditQuote } from '../../../../modules/quotes';
import { Query } from 'react-apollo';
import { PREVIEW_CONTRACT } from '../../../../data/queries';

export default function QuoteDashboard() {
  const classes = useStyles();

  return (
    <MenuContext.Consumer>
      {(menu) => (
        <div className={classes.root}>
          {menu.jobPage.secondaryPage === 'quote_list' && (
            <QuoteListPage menu={menu} />
          )}
          {menu.jobPage.secondaryPage === 'view_quote' && (
            <Query
              query={PREVIEW_CONTRACT}
              variables={{ contractId: menu.jobPage.contractId }}
              fetchPolicy="network-only"
            >
              {({ data, loading }) => {
                return loading
                  ? null
                  : data && <EditQuote contractData={data.contractById} />;
              }}
            </Query>
          )}
        </div>
      )}
    </MenuContext.Consumer>
  );
}
