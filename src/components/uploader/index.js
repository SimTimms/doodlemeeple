import React from 'react';
import axios from 'axios';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

export function Uploader({
  cbImage,
  styleOverride,
  className,
  cbDelete,
  hasFile,
}) {
  const classes = useStyles();
  const [statusMessage, setStatusMessage] = React.useState('');

  let uploadInput = null;

  async function handleUpload(ev) {
    let file = uploadInput.files[0];
    // Split the filename to get the name and type
    let fileParts = uploadInput.files[0].name.split('.');
    let fileName = fileParts[0];
    let fileType = fileParts[1];
    let fileSize = uploadInput.files[0].size;

    const headers = {
      'Content-Type': 'image/jpeg',
    };

    const uploadURL = `${process.env.REACT_APP_API}/sign_s3`;

    setStatusMessage('Loading...');
    await axios
      .post(uploadURL, {
        fileName: fileName,
        fileType: fileType,
        fileSize,
        category: 'profileBG',
      })
      .then(response => {
        setStatusMessage('Sending...');
        if (response.data.data) {
          setStatusMessage('Uploading...');
          const returnData = response.data.data.returnData;
          const signedRequest = returnData.signedRequest;
          const url = returnData.url;

          const options = {
            headers: headers,
          };

          axios
            .put(signedRequest, file, options)
            .then(result => {
              setStatusMessage('');
              cbImage(url);
            })
            .catch(error => {
              setStatusMessage(error);
              console.log(error);
            });
        } else {
          setStatusMessage(response.data.error);
        }
      })
      .catch(error => {
        setStatusMessage('Error');
        console.log(error);
      });
  }

  return (
    <label
      className={`${classes.imageIconWrapper} ${className}`}
      style={styleOverride}
    >
      <Typography gutterBottom>{statusMessage}</Typography>
      {hasFile ? (
        <Button
          onClick={() => {
            cbDelete();
          }}
          style={{ color: '#fff', left: 0 }}
        >
          <Icon className={classes.imageIcon} style={{ fontSize: 20 }}>
            delete
          </Icon>
        </Button>
      ) : statusMessage === '' ? (
        <Icon className={classes.imageIcon}>add_photo_alternate</Icon>
      ) : (
        <Icon className={classes.imageIcon} style={{ fontSize: 20 }}>
          cancel
        </Icon>
      )}
      <input
        type="file"
        ref={input => {
          uploadInput = input;
        }}
        style={{ display: 'none' }}
        onChange={handleUpload}
      />
    </label>
  );
}
