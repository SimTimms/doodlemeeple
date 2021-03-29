import React from 'react';
import { Typography, Slide, TextField } from '@material-ui/core';
import { useStyles } from './styles';
import {
  ErrorBox,
  Column,
  BorderBox,
  IconButton,
  Paper,
  FieldTitleDashboard,
  Divider,
} from '../../../../components';
import { Query, Mutation } from 'react-apollo';
import { PROFILE } from '../../../../data/queries';
import { DELETE_ACCOUNT } from '../../../../data/mutations';
import Cookies from 'js-cookie';
import { SaveButton } from './components';

export function Account({ history }) {
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
          {({ data }) => {
            return null;
          }}
        </Query>

        <div className={classes.root}>
          <Paper pt={10}>
            <FieldTitleDashboard name="Details" inline={false} a="c" />
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
            <SaveButton email={email} errors={errors} setError={setError} />
          </Paper>

          <Paper pt={10}>
            <FieldTitleDashboard
              name="Delete Account Permanently"
              inline={false}
              a="c"
            />
            <Divider />
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
                    This action will delete your account and all uploaded media.
                    This is irreversible. Are you sure you want to continue?
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
          </Paper>
        </div>
      </div>
    </Slide>
  );
}
