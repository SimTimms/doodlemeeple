import React from 'react';
import { Slide, Typography } from '@material-ui/core';
import {
  LoadIcon,
  Column,
  ContractSummaryForCreative,
} from '../../../../../components';
import { PREVIEW_CONTRACT } from '../../../../../data/queries';
import { Query } from 'react-apollo';
import QuoteSummaryCreator from './views/quoteSummaryForCreator';
import Cookies from 'js-cookie';

export default function AppViewContract({ contractId, history }) {
  const [tabs] = React.useState([true, false, false]);

  const userId = Cookies.get('DMuserId');

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div style={{ width: '700px', marginBottom: 50 }}>
        <Query
          query={PREVIEW_CONTRACT}
          variables={{ contractId }}
          fetchPolicy="network-only"
        >
          {({ loading, data }) => {
            const contractData = data ? data.contractById : null;

            return loading ? (
              <LoadIcon />
            ) : !contractData ? (
              <Typography
                variant="h6"
                style={{ textAlign: 'center', marginTop: 30 }}
              >
                This quote no longer exists, it may have been retracted or
                supersceded
              </Typography>
            ) : (
              data && (
                <Column a="center" j="center">
                  <div style={{ width: '100%' }}>
                    {userId === contractData.user._id ? (
                      <ContractSummaryForCreative contractData={contractData} />
                    ) : (
                      <QuoteSummaryCreator
                        display={tabs[0]}
                        contractData={contractData}
                        history={history}
                      />
                    )}
                  </div>
                </Column>
              )
            );
          }}
        </Query>
      </div>
    </Slide>
  );
}
