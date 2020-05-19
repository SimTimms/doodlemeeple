import React from 'react';
import Slide from '@material-ui/core/Slide';
import { MessageComponent } from './components/messageComponent';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { CONVERSATIONS } from '../../../../../data/queries';
import { LoadIcon, ContentHeader } from '../../../../../components';

export default function Conversations({ history }) {
  const classes = useStyles();
  const [jobArray, setJobArray] = React.useState([]);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <ContentHeader title="Conversations" subTitle="" button={null} />
        <div className={classes.cardGrid}>
          {jobArray.map((conversation, index) => {
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
          query={CONVERSATIONS}
          fetchPolicy="network-only"
          onCompleted={(data) => {
            setJobArray(data.getConversations);
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
