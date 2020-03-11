import React from 'react';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

import { ContentHeader } from '../../../../components/headers/contentHeader';
import { useStyles } from './styles';
import { creativesTemp } from '../../../../testData/creatives';

export function Account() {
  const userProfile = creativesTemp[0];
  const [emailAddress, setEmailAddress] = React.useState(
    userProfile.emailAddress,
  );
  const [stripe, setStripe] = React.useState(userProfile.stripe);
  const classes = useStyles();

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <ContentHeader>
          <Typography variant="h1" color="textPrimary">
            Account
          </Typography>
          <Typography color="textSecondary" component="p">
            Change your account settings
          </Typography>
        </ContentHeader>
        <TextField
          id={'email'}
          label={'Email'}
          value={emailAddress}
          onChange={e => {
            setEmailAddress(e.target.value);
          }}
          margin="normal"
          variant="outlined"
          style={{ width: '100%' }}
        />

        <TextField
          id={'stripe'}
          label={'Stripe'}
          value={stripe}
          onChange={e => {
            setStripe(e.target.value);
          }}
          margin="normal"
          variant="outlined"
          style={{ width: '100%' }}
        />
        <Divider />
        <Button color="primary" variant="contained" style={{ marginTop: 10 }}>
          Change Password
        </Button>
      </div>
    </Slide>
  );
}
