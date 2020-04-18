import React from 'react';
import {
  Icon,
  Card,
  Typography,
  Slide,
  TextField,
  Button,
} from '@material-ui/core';
import { useStyles } from './styles';
import { LoadIcon, ErrorBox, ContentHeader } from '../../../../components';
import { Query, Mutation } from 'react-apollo';
import { PROFILE } from '../../../../data/queries';
import { UPDATE_EMAIL, DELETE_ACCOUNT } from '../../../../data/mutations';
import { readableErrors } from '../../../../utils/readableErrors';
import { toaster } from '../../../../utils/toaster';
import { validate } from 'email-validator';
import Cookies from 'js-cookie';

export function Account({ history }) {
  function submitChecks(mutation) {
    let passed = true;

    const emailPass = validate(email);
    !emailPass && (passed = false);

    setError({
      email: !emailPass ? 'Valid email require' : null,
    });

    passed && mutation();
  }

  const classes = useStyles();
  const [email, setEmail] = React.useState('');
  const [confirm, setConfirm] = React.useState(false);
  const [errors, setError] = React.useState({
    email: null,
  });

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Query
          query={PROFILE}
          onCompleted={(data) => {
            setEmail(data.profile.email);
          }}
          fetchPolicy="network-only"
        >
          {({ loading, error, data }) => {
            if (loading) return <LoadIcon />;
            if (error) return <div>Error</div>;
            return <div></div>;
          }}
        </Query>

        <div className={classes.root}>
          <ContentHeader>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Typography variant="h1" color="textPrimary">
                Account
              </Typography>
            </div>
            <Typography color="textSecondary" component="p">
              -
            </Typography>
          </ContentHeader>

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Mutation
              mutation={UPDATE_EMAIL}
              variables={{
                email,
              }}
              onError={(error) => {
                setError(readableErrors(error, errors));
              }}
              onCompleted={() => {
                toaster('Saved');
              }}
            >
              {(mutation) => {
                return (
                  <Button
                    onClick={() => {
                      submitChecks(mutation);
                    }}
                    variant="contained"
                    color="primary"
                    style={{ margin: 10 }}
                    disabled={!validate}
                  >
                    <Icon style={{ fontSize: 18, color: '#fff' }}>save</Icon>
                  </Button>
                );
              }}
            </Mutation>
          </div>
          <Card className={classes.card}>
            <div style={{ padding: 10 }}>
              <TextField
                id={'email'}
                label={`Email ${email ? `(${256 - email.length})` : ''}`}
                inputProps={{ maxLength: 256 }}
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                margin="normal"
                variant="outlined"
                style={{ width: '100%' }}
              />

              <ErrorBox errorMsg={errors.email} />
              <Button
                className={classes.iconButton}
                onClick={() => {
                  setConfirm(true);
                }}
              >
                <Icon className={classes.iconButtonIcon}>delete</Icon>
                Delete Account
              </Button>
              {confirm && (
                <div>
                  This action will delete your account and all uploaded media.
                  This is irreversible. Are you sure you want to continue?{' '}
                  <Button
                    className={classes.iconButtonNo}
                    onClick={() => {
                      setConfirm(false);
                    }}
                  >
                    <Icon className={classes.iconButtonNoIcon}>cancel</Icon>
                    No
                  </Button>
                  <Mutation
                    mutation={DELETE_ACCOUNT}
                    onCompleted={() => {
                      Cookies.remove('token');
                      history.push('/deleted');
                    }}
                    onError={() => {
                      Cookies.remove('token');
                      history.push('/deleted');
                    }}
                  >
                    {(mutation) => {
                      return (
                        <Button
                          className={classes.iconButton}
                          onClick={() => {
                            mutation();
                          }}
                        >
                          <Icon className={classes.iconButtonIcon}>delete</Icon>
                          Yes
                        </Button>
                      );
                    }}
                  </Mutation>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </Slide>
  );
}
