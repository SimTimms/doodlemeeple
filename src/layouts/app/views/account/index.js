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
import {
  ErrorBox,
  Column,
  BorderBox,
  IconButton,
} from '../../../../components';
import { Query, Mutation } from 'react-apollo';
import { PROFILE } from '../../../../data/queries';
import { UPDATE_EMAIL, DELETE_ACCOUNT } from '../../../../data/mutations';
import { readableErrors } from '../../../../utils/readableErrors';
import { toaster } from '../../../../utils/toaster';
import { validate } from 'email-validator';
import Cookies from 'js-cookie';
import axios from 'axios';

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
  async function requestStripe(history) {
    {
      await axios
        .post('http://localhost:4000/stripe-onboarding')
        .then((response) => {
          console.log(response);
          window.location.replace(response.data.url);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <IconButton
          color="text-white"
          disabled={false}
          onClickEvent={() => {
            requestStripe(history);
          }}
          icon=""
          title="Post a Job"
          styleOverride={null}
          type="button"
          iconPos="right"
        />

        <Query
          query={PROFILE}
          onCompleted={(data) => {
            setEmail(data.profile.email);
          }}
          fetchPolicy="network-only"
        >
          {({ data }) => {
            return null;
          }}
        </Query>

        <div className={classes.root}>
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
                toaster('Autosave');
              }}
            >
              {(mutation) => {
                return (
                  <IconButton
                    onClickEvent={() => {
                      submitChecks(mutation);
                    }}
                    icon="save"
                    title="Save"
                    color="primary"
                    style={{ margin: 10 }}
                  />
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
                  setEmail(e.target.value.substring(0, 256));
                }}
                margin="normal"
                variant="outlined"
                style={{ width: '100%' }}
              />

              <ErrorBox errorMsg={errors.email} />
              <IconButton
                onClickEvent={() => {
                  setConfirm(true);
                }}
                icon="delete"
                title="Delete"
                color="warning"
              />

              {confirm && (
                <BorderBox>
                  <Column>
                    <Typography>
                      This action will delete your account and all uploaded
                      media. This is irreversible. Are you sure you want to
                      continue?
                    </Typography>
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
                          <IconButton
                            onClickEvent={() => {
                              mutation();
                            }}
                            icon="warning"
                            title="Confirm"
                            color="warning"
                          />
                        );
                      }}
                    </Mutation>
                    <IconButton
                      onClickEvent={() => {
                        setConfirm(false);
                      }}
                      icon="cancel"
                      title="Cancel"
                      color="text-dark"
                      styleOverride={{ margin: 0 }}
                    />
                  </Column>
                </BorderBox>
              )}
            </div>
          </Card>
        </div>
      </div>
    </Slide>
  );
}
