import React from 'react';
import { Query } from 'react-apollo';
import { Column } from '../../../../components';
import { useStyles } from './styles';
import NoWork from './noWork';
import { HistoryContext, MenuContext } from '../../../../context';
import { QUOTE_WIDGET } from '../../../../widgets/quote/data';
import { QuoteComponent } from '../../../../widgets';
import { randomKey } from '../../../../utils';

export default function ActiveWork() {
  const classes = useStyles();
  const [contractArray, setContractArray] = React.useState([]);

  return (
    <HistoryContext.Consumer>
      {(history) => (
        <div className={classes.root}>
          {contractArray.length > 0 &&
            contractArray.map((contract, index) => {
              return (
                <Column key={randomKey()}>
                  <MenuContext.Consumer>
                    {(menu) => {
                      return (
                        <QuoteComponent
                          key={`quote_${index}`}
                          contract={contract}
                          onClickEvent={() =>
                            menu.updateMenuContext({
                              ...menu,
                              workPage: {
                                ...menu.workPage,
                                primaryPage: 'work_dashboard',
                                secondaryPage: 'work_dashboard_home',
                                jobId: contract.job._id,
                              },
                            })
                          }
                        />
                      );
                    }}
                  </MenuContext.Consumer>
                </Column>
              );
            })}
          <Query
            query={QUOTE_WIDGET}
            variables={{ status: ['accepted'] }}
            fetchPolicy="network-only"
            onCompleted={(data) => setContractArray(data.quoteWidget)}
          >
            {({ data }) => {
              return data && data.quoteWidget.length === 0 ? (
                <NoWork history={history} />
              ) : null;
            }}
          </Query>
        </div>
      )}
    </HistoryContext.Consumer>
  );
}
