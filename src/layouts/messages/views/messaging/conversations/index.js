import React from 'react';
import Slide from '@material-ui/core/Slide';
import { MessageComponent } from './components/messageComponent';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { CONVERSATIONS } from '../../../../../data/queries';
import { ContentHeader } from '../../../../../components';

export default function Conversations({ history }) {
  const classes = useStyles();
  const [conversationArray, setConversationArray] = React.useState([]);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <ContentHeader title="Conversations" subTitle="" button={null} />
        <div className={classes.cardGrid}>
          {conversationArray.map((conversation, index) => {
            return (
              <MessageComponent
                key={`conversationparent_${index}`}
                conversation={conversation}
                history={history}
              />
            );
          })}
        </div>
        <Query
          query={CONVERSATIONS}
          fetchPolicy="network-only"
          onCompleted={(data) => {
            setConversationArray(data.getConversations.conversations);
          }}
        >
          {({ data }) => {
            return null;
          }}
        </Query>
      </div>
    </Slide>
  );
}
