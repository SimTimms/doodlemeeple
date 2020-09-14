import React from 'react';
import { Slide, Typography } from '@material-ui/core';
import { LoadIcon, Column, Row } from '../../../../../components';
import { PREVIEW_CONTRACT, GET_MESSAGES } from '../../../../../data/queries';
import { Query } from 'react-apollo';
import QuoteSummaryCreative from './views/quoteSummaryForCreative';
import QuoteSummaryCreator from './views/quoteSummaryForCreator';
import Chat from './views/chat';
import PaymentElement from './views/payments';
import Cookies from 'js-cookie';

export default function PreviewContract({ contractId, history }) {
  const [tabs, setTabs] = React.useState([true, false, false]);
  const [contract, setContract] = React.useState({
    _id: null,
    user: { _id: null },
    signedDate: null,
    job: null,
    status: '',
  });
  const [job, setJob] = React.useState({ id: null, user: { id: '' } });
  const [conversationId, setConversationId] = React.useState(null);
  const userId = Cookies.get('userId');

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div style={{ width: '700px', marginBottom: 50 }}>
        <Query
          query={PREVIEW_CONTRACT}
          variables={{ contractId }}
          fetchPolicy="network-only"
          onCompleted={(data) => {
            data.contractById && setContract(data.contractById);
            data.contractById && setJob(data.contractById.job);
          }}
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
                      <QuoteSummaryCreative
                        display={tabs[0]}
                        contractData={contractData}
                        history={history}
                      />
                    ) : (
                      <QuoteSummaryCreator
                        display={tabs[0]}
                        contractData={contractData}
                        setContract={setContract}
                        history={history}
                      />
                    )}

                    <Chat
                      display={tabs[1]}
                      conversationId={conversationId}
                      history={history}
                    />
                    <PaymentElement
                      display={tabs[2]}
                      contractData={contractData}
                    />
                  </div>
                </Column>
              )
            );
          }}
        </Query>
        {job.id && conversationId === null && (
          <Query
            query={GET_MESSAGES}
            variables={{ jobId: job.id, userId: contract.user.id }}
            fetchPolicy="network-only"
            onCompleted={(data) => {
              setConversationId(data.determineConversationId);
            }}
          >
            {({ data }) => {
              return null;
            }}
          </Query>
        )}
      </div>
    </Slide>
  );
}
