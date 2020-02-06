import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { useStyles } from './styles';
import { conversationsData } from '../../../../testData/conversations';

export function Conversation({ conversationId }) {
  const classes = useStyles();

  let conversation = conversationsData.filter(
    conversation => conversation.id === conversationId,
  )[0];

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <Typography
        variant="h6"
        color="textPrimary"
        style={{
          minWidth: 600,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
        }}
      >
        Conversation with &nbsp;
        {conversation.groupMembers.map((groupMember, index) => (
          <div>
            {index > 0 && ','} {groupMember.name}
          </div>
        ))}
      </Typography>
    </Slide>
  );
}
