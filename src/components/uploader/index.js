import React from 'react';
import axios from 'axios';

import { useStyles } from './styles';
import { Typography, Button, Icon } from '@material-ui/core';
import Cookies from 'js-cookie';

function Uploader({
  cbImage,
  styleOverride,
  className,
  cbDelete,
  hasFile,
  setImagePosition,
  size,
}) {
  const classes = useStyles();
  const [statusMessage, setStatusMessage] = React.useState('');

  let uploadInput = null;

  async function handleUpload(ev) {
    // Split the filename to get the name and type
    if (!uploadInput.files[0]) {
      return null;
    }
    let file = uploadInput.files[0];
    let fileParts = uploadInput.files[0].name.split('.');
    let fileName = fileParts[0];
    let fileType = fileParts[1];
    let fileSize = uploadInput.files[0].size;

    const headers = {
      'Content-Type': 'image/jpeg',
    };

    const uploadURL = `${process.env.REACT_APP_API}/sign_s3`;
    const token = Cookies.get('token');
    let config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    setStatusMessage('Loading...');
    await axios
      .post(uploadURL, {
        ...config,
        fileName: fileName,
        fileType: fileType,
        fileSize,
        category: 'profileBG',
      })
      .then((response) => {
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
            .then((result) => {
              setStatusMessage('');
              cbImage(url);
            })
            .catch((error) => {
              setStatusMessage(error);
              console.log(error);
            });
        } else {
          setStatusMessage(response.data.error);
        }
      })
      .catch((error) => {
        setStatusMessage('Error');
        console.log(error);
      });
  }

  return (
    <label
      className={`${classes.imageIconWrapper} ${className}`}
      style={styleOverride}
    >
      {statusMessage === 'Uploading...' && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.2)',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h2" component="p">
            Uploading....please wait
          </Typography>
        </div>
      )}

      {statusMessage && <Typography gutterBottom>{statusMessage}</Typography>}

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
        <div style={{ textAlign: 'center' }}>
          <Icon className={classes.imageIcon}>add_photo_alternate</Icon>
          {size && (
            <Typography
              variant="body1"
              style={{ fontSize: 10, marginTop: -10 }}
            >
              {size}
            </Typography>
          )}
        </div>
      ) : (
        <Icon className={classes.imageIcon} style={{ fontSize: 20 }}>
          cancel
        </Icon>
      )}
      <input
        type="file"
        ref={(input) => {
          uploadInput = input;
        }}
        style={{ display: 'none' }}
        onChange={handleUpload}
      />
    </label>
  );
}

export default Uploader;
