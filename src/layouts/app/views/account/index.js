import React from 'react';
import { Link } from 'react-router-dom';
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
import { UPDATE_USER_MUTATION } from '../../../../data/mutations';
import { readableErrors } from '../../../../utils/readableErrors';
import { toaster } from '../../../../utils/toaster';
import { validate } from 'email-validator';

export function Account({ theme }) {
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
        >
          {({ loading, error, data }) => {
            if (loading) return <LoadIcon />;
            if (error) return <div>Error</div>;
            return <div></div>;
          }}
        </Query>
        <Mutation
          mutation={UPDATE_USER_MUTATION}
          variables={{
            email,
          }}
          update={(store, { data: { updateUser } }) => {
            const data = store.readQuery({ query: PROFILE });
            const profile = data.profile;
            profile.email = email;
            toaster('Saved');
            store.writeQuery({ query: PROFILE, data });
          }}
          onError={(error) => {
            setError(readableErrors(error, errors));
          }}
        >
          {(mutation) => {
            return (
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
                </div>
                <Card className={classes.card}>
                  <ErrorBox errorMsg={errors.email} />
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
                  </div>
                </Card>
              </div>
            );
          }}
        </Mutation>
      </div>
    </Slide>
  );
}
