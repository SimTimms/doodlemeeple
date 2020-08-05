import React from 'react';
import { Slide, Typography, Card } from '@material-ui/core';
import {
  LoadIcon,
  InlineHeader,
  IconTitle,
  TabWrapper,
  TabButton,
} from '../../../../../components';
import { PREVIEW_CONTRACT, GET_MESSAGES } from '../../../../../data/queries';
import { Query } from 'react-apollo';
import { useStyles } from './styles';
import Quote from './views/quote';
import Chat from './views/chat';
import PaymentElement from './views/payments';

export default function PreviewContract({ contractId, history }) {
  const [tabs, setTabs] = React.useState([true, false, false]);
  const [contract, setContract] = React.useState({
    id: null,
    user: { id: null },
    signedDate: null,
    job: null,
    status: '',
  });
  const [job, setJob] = React.useState({ id: null, user: { id: '' } });
  const [conversationId, setConversationId] = React.useState(null);

  const classes = useStyles();
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div style={{ width: '700px', marginBottom: 50 }}>
        <Query
          query={PREVIEW_CONTRACT}
          variables={{ contractId }}
          fetchPolicy="network-only"
          onCompleted={(data) => {
            data.previewContract && setContract(data.previewContract);
            data.previewContract && setJob(data.previewContract.job);
          }}
        >
          {({ loading, data }) => {
            const contractData = data ? data.previewContract : null;

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
                <div className={classes.fullWidth}>
                  <Card className={classes.root}>
                    <InlineHeader>
                      <IconTitle icon="request_quote" title="Quote" />
                    </InlineHeader>
                    <div
                      style={{
                        width: '100%',
                        height: 200,
                        background: `url(${contractData.user.profileBG})`,
                        backgroundSize: 'cover',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <div className={classes.profileWrapper}>
                        <img
                          src={contractData.user.profileImg}
                          className={classes.profileImg}
                          alt=""
                        />
                        <div className={classes.profileWrapperDetails}>
                          <Typography variant="h6">
                            You've got a quote from
                          </Typography>
                          <Typography
                            variant="h5"
                            style={{ textAlign: 'center', width: '100%' }}
                          >
                            {contractData.user.name}
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <TabWrapper>
                      <TabButton
                        color="secondary"
                        icon="request_quote"
                        title="Quote"
                        onClickEvent={() => setTabs([true, false, false])}
                        disabled={false}
                        styleOverride={null}
                        type="button"
                      />
                      <TabButton
                        color="secondary"
                        icon="chat"
                        title="Chat"
                        onClickEvent={() => setTabs([false, true, false])}
                        disabled={false}
                        styleOverride={null}
                        type="button"
                      />
                      <TabButton
                        title="Payments"
                        icon="payment"
                        disabled={false}
                        color="secondary"
                        styleOverride={null}
                        type="button"
                        onClickEvent={() => setTabs([false, false, true])}
                      />
                    </TabWrapper>
                    <Quote
                      display={tabs[0]}
                      contractData={contractData}
                      setContract={setContract}
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
                  </Card>
                </div>
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
