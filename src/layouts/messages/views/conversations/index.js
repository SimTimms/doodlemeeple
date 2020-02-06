import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { useStyles } from './styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { conversationsData } from '../../../../testData/conversations';

export function Conversations() {
  const classes = useStyles();
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div>
        <Typography variant="h6" color="textPrimary">
          Conversations
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <div className={classes.messageWrapper}>
          {conversationsData.map((conversation, index) => {
            return (
              <div key={`conversation_${index}`}>
                <div className={classes.avatarWrapper}>
                  {conversation.groupMembers.map((groupMember, index) => {
                    return (
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        image={groupMember.profileImg}
                        title="Contemplative Reptile"
                        className={classes.avatarRounded}
                        style={{ marginRight: -20 }}
                        key={`conversation_media_${index}`}
                      />
                    );
                  })}
                </div>
                <Card className={classes.card}>
                  <div className={classes.profileWrapper}>
                    <div className={classes.wrapperOne}>
                      <div className={classes.messageDetails}>
                        <Typography color="textSecondary" component="p">
                          <b>Jamie just messaged:</b> "hey take a look at...."
                        </Typography>
                      </div>
                    </div>
                    <Link
                      to={`/message/conversation/${conversation.id}`}
                      className={classes.messageButton}
                    >
                      <Button variant="contained" color="primary">
                        Reply
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </Slide>
  );
}
