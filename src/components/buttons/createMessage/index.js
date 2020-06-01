import React from 'react';
import { TextField, Button, Icon } from '@material-ui/core';
import { Mutation } from 'react-apollo';
import { CREATE_MESSAGE } from '../../../data/mutations';
import { useStyles } from './styles';
import { IconButton } from '../../';

export default function CreateMessage({ conversationId, updateMessageArray }) {
  const [newMessage, setNewMessage] = React.useState('');
  const classes = useStyles();

  return (
    <Mutation
      mutation={CREATE_MESSAGE}
      variables={{
        id: 'new',
        message: {
          messageStr: newMessage,
          conversationId: conversationId,
        },
      }}
    >
      {(mutation) => {
        return (
          <div className={classes.root}>
            <TextField
              id={'type'}
              label="Message"
              inputProps={{ maxLength: 512 }}
              multiline
              type="text"
              value={newMessage}
              onChange={(e) => {
                setNewMessage(e.target.value);
              }}
              margin="normal"
              variant="outlined"
              style={{ width: '100%', margin: 0 }}
            />
            <IconButton
              icon="send"
              title="Send"
              disabled={false}
              secondaryColor={false}
              warning={false}
              onClickEvent={() => {
                updateMessageArray(newMessage);
                mutation();
                setNewMessage('');
              }}
              styleOverride={{
                margin: 0,
                marginLeft: 10,
                width: 100,
                paddingLeft: 10,
                paddingRight: 10,
              }}
            />
          </div>
        );
      }}
    </Mutation>
  );
}
