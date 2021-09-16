import React from 'react';
import {
  ContractSummaryForCreator,
  FullContractComponent,
  BorderBox,
  Signature,
} from '../../../../../../../components';
import { PREVIEW_CONTRACT } from '../../../../../../../data/queries';
import { Query } from 'react-apollo';
import ActionSetOne from '../../../../../../../components/inviteComponentFull/ActionSetOne';

export default function QuotePreview({ contract, setTabNbr, history }) {
  const [tabNbrTwo, setTabNbrTwo] = React.useState(0);

  return (
    <Query
      query={PREVIEW_CONTRACT}
      variables={{ contractId: contract._id }}
      fetchPolicy="network-only"
    >
      {({ data }) => {
        return data ? (
          <div
            style={{
              background: '#efeff5',
              marginTop: 20,
              width: '100%',
            }}
          >
            <div
              style={{
                width: '100%',
                background: '#fff',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
              }}
            >
              {tabNbrTwo === 0 && (
                <BorderBox>
                  <ContractSummaryForCreator contractData={data.contractById} />
                  {contract.status !== 'accepted' && (
                    <ActionSetOne
                      setTabNbrTwo={setTabNbrTwo}
                      setTabNbr={setTabNbr}
                      contract={contract}
                      history={history}
                    />
                  )}
                </BorderBox>
              )}
            </div>
          </div>
        ) : null;
      }}
    </Query>
  );
}
