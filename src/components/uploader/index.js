import React from 'react';
import axios from 'axios';
import { useStyles } from './styles';
import { Typography, Button, Icon } from '@material-ui/core';
import Cookies from 'js-cookie';
import { Buffer } from 'buffer';
import resizeImage from '../../utils/resizeImage';

function Uploader({
  cbImage,
  styleOverride,
  className,
  cbDelete,
  hasFile,
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
    let fileName = `${fileParts[0]}${Date.now()}`
      .replace(/[^a-z0-9]/gi, '_')
      .toLowerCase();
    let fileType = fileParts[fileParts.length - 1];
    let fileSize = uploadInput.files[0].size;

    const uploadURL = `${process.env.REACT_APP_API_S3}/sign_s3`;
    const token = Cookies.get('token');
    let config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    setStatusMessage('Loading...');
    const base64data = await resizeImage(file, 1920, 1080);
    const bufferdata = Buffer.from(
      base64data.replace(/^data:image\/\w+;base64,/, ''),
      'base64'
    );
    await axios
      .post(uploadURL, {
        ...config,
        fileName: fileName,
        fileType: fileType,
        fileSize: bufferdata.length,
        category: 'profileBG',
      })
      .then(async (response) => {
        setStatusMessage('Sending...');
        if (response.data.data) {
          setStatusMessage('Uploading...');
          const returnData = response.data.data.returnData;
          const signedRequest = returnData.signedRequest;
          const url = returnData.url;

          axios
            .put(signedRequest, bufferdata, {
              headers: {
                'Content-Type': file.type,
                'Content-Encoding': 'base64',
              },
            })
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
          <Icon className={classes.imageIconDelete} style={{ fontSize: 20 }}>
            close
          </Icon>
        </Button>
      ) : statusMessage === '' ? (
        <div style={{ textAlign: 'center' }}>
          <Icon className={classes.imageIcon}>add_photo_alternate</Icon>
          {size && (
            <Typography variant="body1" style={{ fontSize: 10, lineHeight: 1 }}>
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
