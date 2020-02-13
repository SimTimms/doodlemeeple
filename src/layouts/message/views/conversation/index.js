import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { useStyles } from './styles';
import { conversationsData } from '../../../../testData/conversations';

export function Conversation({ conversationId }) {
  const classes = useStyles();
  const myId = 'TIMSIMMS';
  let conversation = conversationsData.filter(
    conversation => conversation.id === conversationId,
  )[0];

  console.log(conversationId);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div>
        <Typography
          variant="h6"
          color="textPrimary"
          style={{
            minWidth: 300,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
          }}
        >
          Conversation with &nbsp;
          {conversation.groupMembers.map((groupMember, index) => (
            <div key={`group_member_${index}`}>
              {index > 0 && ','} {groupMember.name}
            </div>
          ))}
        </Typography>
        <div
          style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}
        >
          {conversation.conversation.map((message, index) => {
            const classB =
              myId === message.speaker.id
                ? classes.messageBoxMe
                : classes.messageBoxYou;
            return (
              <div
                key={`message_${index}`}
                className={`${classes.messageBox} ${classB}`}
              >
                <div className={classes.speakerWrapper}>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    image={message.speaker.profileImg}
                    title="Contemplative Reptile"
                    className={classes.avatarRounded}
                    key={`conversation_media_${index}`}
                  />
                  <div className={classes.speakerName}>
                    {message.speaker.id}
                  </div>
                </div>
                <div>{message.messageStr}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Slide>
  );
}
