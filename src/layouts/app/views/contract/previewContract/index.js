import React from 'react';
import { Slide, Typography, Card } from '@material-ui/core';
import { LoadIcon, IconButton, Column, Row } from '../../../../../components';
import { PREVIEW_CONTRACT, GET_MESSAGES } from '../../../../../data/queries';
import { Query } from 'react-apollo';
import { useStyles } from './styles';
import QuoteSummary from './views/quote';
import Chat from './views/chat';
import PaymentElement from './views/payments';

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

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div style={{ width: '700px', marginBottom: 50 }}>
        <Row j="center" a="center">
          <IconButton
            color="secondary"
            icon="request_quote"
            title="Quote"
            onClickEvent={() => setTabs([true, false, false])}
            disabled={false}
            styleOverride={null}
            type="button"
            iconPos="left"
          />
          <IconButton
            color="secondary"
            icon="chat"
            title="Chat"
            onClickEvent={() => setTabs([false, true, false])}
            disabled={false}
            styleOverride={null}
            type="button"
            iconPos="left"
          />
          <IconButton
            title="Payments"
            icon="payment"
            disabled={false}
            color="secondary"
            styleOverride={null}
            type="button"
            onClickEvent={() => setTabs([false, false, true])}
            iconPos="left"
          />
        </Row>
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
                    <QuoteSummary
                      display={tabs[0]}
                      contractData={contractData}
                      setContract={setContract}
                      history={history}
                    />
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
