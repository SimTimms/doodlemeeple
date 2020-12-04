import React from 'react';
import { Typography, Slide, TextField, Icon } from '@material-ui/core';
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
import { PROFILE, GET_STRIPE } from '../../../../data/queries';
import stripeButton from '../../../../assets/stripe_button.png';
import {
  DELETE_ACCOUNT,
  DELETE_STRIPE_ACCOUNT,
} from '../../../../data/mutations';
import Cookies from 'js-cookie';
import { requestStripe } from '../../../../utils/stripe';
import { SaveButton } from './components';

export function Account({ history, searchValues }) {
  const classes = useStyles();
  const [email, setEmail] = React.useState('');
  const [isCreative, setIsCreative] = React.useState(false);
  const [refresh, setRefresh] = React.useState(0);
  const [confirm, setConfirm] = React.useState(false);
  const [errors, setError] = React.useState({
    email: null,
  });

  const searchArr = searchValues.split('&');
  let searchObj = {};
  for (let i = 0; i < searchArr.length; i++) {
    searchObj[searchArr[i].split('=')[0]] = searchArr[i].split('=')[1];
  }

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Query
          query={PROFILE}
          onCompleted={(data) => {
            setEmail(data.profile.email);
            setIsCreative(data.profile.creativeTrue);
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

          {isCreative && (
            <Paper pt={10}>
              <FieldTitleDashboard name="Stripe" inline={false} a="c" />
              <Divider />
              <a href="https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_IK62p427A6Ilh5CyeAxMeoOxans1qDbR&scope=read_write&redirect_uri=http://localhost:3000/app/stripe-connect">
                aa
              </a>
              <Query
                query={GET_STRIPE}
                variables={{ refresh }}
                fetchPolicy="network-only"
              >
                {({ data }) => {
                  return data ? (
                    data.getStripe.object !== 'account' ? (
                      <img
                        src={stripeButton}
                        onClick={() => {
                          requestStripe(history);
                        }}
                        style={{ width: 200 }}
                        alt=""
                      />
                    ) : !data.getStripe.payouts_enabled ? (
                      <Column>
                        <Typography className={classes.status}>
                          Your Stripe account hasn't been verified, please login
                          to your Stripe dashboard to continue.
                        </Typography>
                        <Divider />
                        <a href="https://dashboard.stripe.com/login">
                          <Typography>Login to Stripe</Typography>
                        </a>
                        <Mutation
                          mutation={DELETE_STRIPE_ACCOUNT}
                          onCompleted={(data) => {
                            setRefresh(refresh + 1);
                          }}
                        >
                          {(mutation) => {
                            return (
                              <IconButton
                                title="Delete Stripe Account"
                                onClickEvent={() => mutation()}
                              />
                            );
                          }}
                        </Mutation>
                      </Column>
                    ) : (
                      <Column>
                        <Mutation
                          mutation={DELETE_STRIPE_ACCOUNT}
                          onCompleted={(data) => {
                            setRefresh(refresh + 1);
                          }}
                        >
                          {(mutation) => {
                            return (
                              <IconButton
                                title="Delete Stripe Account"
                                onClickEvent={() => mutation()}
                              />
                            );
                          }}
                        </Mutation>
                      </Column>
                    )
                  ) : null;
                }}
              </Query>
            </Paper>
          )}
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
              color="primary"
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
