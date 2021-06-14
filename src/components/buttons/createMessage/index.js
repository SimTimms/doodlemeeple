import React from 'react';
import { TextField } from '@material-ui/core';
import { useMutation } from '@apollo/client';
import { CREATE_MESSAGE } from '../../../data/mutations';
import { useStyles } from './styles';
import { IconButton } from '../../';
import { Uploader, Row, Column } from '../../';

export default function CreateMessage({
  updateMessageArray,
  jobId,
  receiver,
  setConversationUser,
}) {
  const [newMessage, setNewMessage] = React.useState('');
  const imageUrl = '';
  const classes = useStyles();
  const [createMessage, { loadingImage }] = useMutation(
    CREATE_MESSAGE,
    {
      variables: {
        receiverId: receiver._id,
        jobId: jobId,
        message: newMessage,
        type: 'message',
      },
    },
    {
      onCompleted({ messageCreateOne }) {
        updateMessageArray(messageCreateOne.record);
      },
    }
  );
  const [createImageMessage, { loading }] = useMutation(
    CREATE_MESSAGE,
    {
      variables: {
        receiverId: receiver._id,
        jobId: jobId,
        message: imageUrl,
        type: 'upload',
      },
    },
    {
      onCompleted({ messageCreateOne }) {
        updateMessageArray(messageCreateOne.record);
      },
    }
  );
  return (
    <Column>
      <div className={classes.header}>
        <IconButton
          icon="close"
          title="Close"
          disabled={false}
          color="text-white-mini"
          onClickEvent={() => {
            setConversationUser(null);
          }}
          type="button"
          iconPos="right"
        />
      </div>
      <Row j="center" a="center">
        <div className={classes.root}>
          <TextField
            id={'type'}
            label="Message"
            inputProps={{ maxLength: 5124 }}
            multiline
            type="text"
            value={newMessage}
            onChange={(e) => {
              setNewMessage(e.target.value.substring(0, 5124));
            }}
            margin="normal"
            variant="outlined"
            style={{ width: '100%', margin: 0 }}
          />
          <IconButton
            icon="chat"
            title="Send"
            disabled={false}
            color="primary"
            onClickEvent={() => {
              createMessage();
              setNewMessage('');
            }}
            styleOverride={{
              margin: 0,
              width: 100,
              paddingLeft: 10,
              paddingRight: 10,
              borderRadius: '0 10px 10px 0',
              paddingTop: 17,
              paddingBottom: 17,
            }}
            type="button"
            iconPos="right"
          />
        </div>

        <Uploader
          cbImage={(url) => {
            imageUrl = url;
            createImageMessage();
          }}
          styleOverride={{ border: '2px solid #ddd', marginLeft: 10 }}
          className={null}
          cbDelete={null}
          hasFile={false}
          size="2MB Max"
        />
      </Row>
    </Column>
  );
}
