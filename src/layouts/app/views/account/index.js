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
  Meta,
} from '../../../../components';
import { Query, Mutation } from 'react-apollo';
import { PROFILE, GET_STRIPE } from '../../../../data/queries';
import stripeButton from '../../../../assets/stripe_button.png';
import {
  DELETE_ACCOUNT,
  DISCONNECT_STRIPE_ACCOUNT,
} from '../../../../data/mutations';
import Cookies from 'js-cookie';
import { SaveButton } from './components';

export function Account({ history }) {
  const classes = useStyles();
  const [email, setEmail] = React.useState('');
  const [isCreative, setIsCreative] = React.useState(false);
  const [refresh, setRefresh] = React.useState(0);
  const [confirm, setConfirm] = React.useState(false);
  const [stripeObject, setStripeObject] = React.useState({
    stripeID: null,
    stripeClientId: '',
  });
  const [errors, setError] = React.useState({
    email: null,
    stripe: null,
  });

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Query
          query={PROFILE}
          onCompleted={(data) => {
            setEmail(data.profile.email);
            setIsCreative(data.profile.creativeTrue);
            setStripeObject({
              stripeID: data.profile.stripeID,
              stripeClientId: data.profile.stripeClientId,
            });
            data.profile.stripeStatus === 'error' &&
              setError({ ...errors, stripe: true });
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
              <FieldTitleDashboard
                name="Payment Methods"
                inline={false}
                a="c"
              />

              {errors.stripe ? (
                <Column>
                  <Typography className={classes.status}>
                    We've detected an issue with your Stripe account, please
                    contact{' '}
                    <a
                      style={{ color: '#222', fontWeight: 700 }}
                      href="mailto:support@doodlmeeple.com"
                    >
                      support@doodlemeeple.com
                    </a>{' '}
                    and provide this number:{' '}
                    <div
                      style={{
                        fontWeight: 800,
                        marginTop: 10,
                        marginBottom: 10,
                        width: '100%',
                        fontSize: 20,
                      }}
                    >
                      {stripeObject.stripeID}
                    </div>
                  </Typography>
                  <Divider />
                  <Meta str="Don't worry, your payments are safe and your account hasn't been compromised, contact us and we'll investigate the issue." />
                </Column>
              ) : stripeObject.stripeClientId === null ? (
                <Column>
                  <Divider />
                  <Meta
                    str="
                    You'll need a stripe account if you want to get paid.
                    You can set one up (or link to an existing
                    account) from here"
                  />

                  <Divider />
                  <a
                    href={`https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_STRIPE_CLIENT}&scope=read_write&redirect_uri=${process.env.REACT_APP_STRIPE_REDIRECT}`}
                  >
                    <img src={stripeButton} style={{ width: 200 }} alt="" />
                  </a>
                  <a href={`https://doodlemeeple.com/no-stripe`}>
                    <IconButton
                      title="Stripe is not available in my country"
                      onClickEvent={() => {}}
                      color="text-dark"
                      icon=""
                    />
                  </a>
                </Column>
              ) : stripeObject.stripeClientId !== '' && refresh === 0 ? (
                <Column>
                  <Meta str="Your Stripe account is connected to DoodleMeeple" />
                  <Mutation
                    mutation={DISCONNECT_STRIPE_ACCOUNT}
                    onCompleted={(data) => {
                      setRefresh(refresh + 1);
                    }}
                    variables={{ refresh }}
                  >
                    {(mutation) => {
                      return (
                        <IconButton
                          title="Disconnect your Stripe account"
                          onClickEvent={() => mutation()}
                          color="text-dark"
                          icon=""
                        />
                      );
                    }}
                  </Mutation>
                </Column>
              ) : (
                refresh > 0 && (
                  <Column>
                    <Divider />
                    <Meta str="Your Stripe account has been disconnected from DoodleMeeple" />
                    <Divider />
                    <a
                      href={`https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_STRIPE_CLIENT}&scope=read_write&redirect_uri=${process.env.REACT_APP_STRIPE_REDIRECT}`}
                    >
                      <img src={stripeButton} style={{ width: 200 }} alt="" />
                    </a>
                    <a href={`https://doodlemeeple.com/no-stripe`}>
                      <IconButton
                        title="Stripe is not available in my country"
                        onClickEvent={() => {}}
                        color="text-dark"
                        icon=""
                      />
                    </a>
                  </Column>
                )
              )}
              <Query
                query={GET_STRIPE}
                variables={{ refresh }}
                fetchPolicy="network-only"
              >
                {({ data }) => {
                  return data && stripeObject.stripeID ? (
                    <Column>
                      <Typography className={classes.status}>
                        You have a Stripe Connect account. We're phasing these
                        out in favour of a much simpler approach. Please
                        support@doodlemeeple.com so we can guide you through the
                        process of transferring your account
                      </Typography>

                      {data.getStripe.object === 'account' &&
                        stripeObject.stripeID &&
                        !data.getStripe.payouts_enabled && (
                          <Column>
                            <Typography className={classes.status}>
                              Your Stripe account hasn't been verified, please
                              login to your Stripe dashboard to continue.
                            </Typography>
                            <Divider />
                            <a href="https://dashboard.stripe.com/login">
                              <Typography>Login to Stripe</Typography>
                            </a>
                          </Column>
                        )}
                    </Column>
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
