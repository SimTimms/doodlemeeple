import React from 'react';
import { TextField } from '@material-ui/core';
import { Mutation } from 'react-apollo';
import { CREATE_MESSAGE } from '../../../data/mutations';
import { useStyles } from './styles';
import { IconButton } from '../../';
import { Uploader, Row } from '../../';

export default function CreateMessage({ updateMessageArray, jobId, receiver }) {
  const [newMessage, setNewMessage] = React.useState('');
  const [uploadURL, setUploadURL] = React.useState('');

  const classes = useStyles();
  return (
    <Row j="center" a="center">
      <Mutation
        mutation={CREATE_MESSAGE}
        variables={{
          receiverId: receiver._id,
          jobId: jobId,
          message: newMessage,
          type: 'message',
        }}
        onCompleted={(data) => updateMessageArray(data.messageCreateOne.record)}
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
                  setNewMessage(e.target.value.substring(0, 512));
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
                type="button"
                iconPos="right"
              />
            </div>
          );
        }}
      </Mutation>
      <Mutation
        mutation={CREATE_MESSAGE}
        variables={{
          receiverId: receiver._id,
          jobId: jobId,
          message: uploadURL,
          type: 'upload',
        }}
        onCompleted={(data) => updateMessageArray(data.messageCreateOne.record)}
      >
        {(mutation) => {
          return (
            <Uploader
              cbImage={(url) => {
                setUploadURL(url);
                mutation();
              }}
              styleOverride={{ border: '2px solid #ddd', marginLeft: 10 }}
              className={null}
              cbDelete={null}
              hasFile={false}
              size="2MB Max"
            />
          );
        }}
      </Mutation>
    </Row>
  );
}
