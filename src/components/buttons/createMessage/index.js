import React from 'react';
import { TextField, Button, Icon } from '@material-ui/core';
import { Mutation } from 'react-apollo';
import { CREATE_MESSAGE } from '../../../data/mutations';

export default function CreateMessage({ conversationId, updateMessageArray }) {
  const [newMessage, setNewMessage] = React.useState('');

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
          <div style={{ display: 'flex' }}>
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
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                updateMessageArray(newMessage);
                mutation();
                setNewMessage('');
              }}
              style={{ marginLeft: 10 }}
            >
              Send <Icon style={{ marginLeft: 10 }}>send</Icon>
            </Button>
          </div>
        );
      }}
    </Mutation>
  );
}
