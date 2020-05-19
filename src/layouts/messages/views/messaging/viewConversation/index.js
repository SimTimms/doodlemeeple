import React from 'react';
import Slide from '@material-ui/core/Slide';
import { MessageComponent } from './components/messageComponent';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { MESSAGES } from '../../../../../data/queries';
import { LoadIcon, ContentHeader } from '../../../../../components';

export default function ViewConversations({ history, jobId }) {
  const classes = useStyles();
  const [messageArray, setMessageArray] = React.useState([]);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <ContentHeader title="Conversations" subTitle="" button={null} />
        <div className={classes.cardGrid}>
          {messageArray.map((conversation, index) => {
            return (
              <MessageComponent
                key={`project_${index}`}
                conversation={conversation}
                history={history}
              />
            );
          })}
        </div>
        <Query
          query={MESSAGES}
          fetchPolicy="network-only"
          variables={{ jobId: jobId }}
          onCompleted={(data) => {
            setMessageArray(data.getMessages);
          }}
        >
          {({ data }) => {
            return <div></div>;
          }}
        </Query>
      </div>
    </Slide>
  );
}
