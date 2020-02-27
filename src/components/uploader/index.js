import React from 'react';
import axios from 'axios';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

export function Uploader({ cbImage, styleOverride }) {
  const classes = useStyles();
  const [statusMessage, setStatusMessage] = React.useState('');
  let uploadInput = null;

  function handleUpload(ev) {
    let file = uploadInput.files[0];
    // Split the filename to get the name and type
    let fileParts = uploadInput.files[0].name.split('.');
    let fileName = fileParts[0];
    let fileType = fileParts[1];
    let fileSize = uploadInput.files[0].size;

    const headers = {
      'Content-Type': 'image/jpeg',
    };

    const uploadURL = 'http://localhost:4000/sign_s3';

    setStatusMessage('Uploading...');
    axios
      .post(uploadURL, {
        fileName: fileName,
        fileType: fileType,
        fileSize,
        category: 'profileBG',
      })
      .then(response => {
        setStatusMessage('Sending...');
        if (response.data.data) {
          setStatusMessage('Sending more...');
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
          setStatusMessage(response.data.toString());
        }
      })
      .catch(error => {
        setStatusMessage('Error');
        console.log(error);
      });
  }

  return (
    <label className={classes.imageIconWrapper} style={styleOverride}>
      <Typography gutterBottom>{statusMessage}</Typography>
      <Icon className={classes.imageIcon}>add_photo_alternate</Icon>
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
