import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Divider,
  CardContent,
  Typography,
  useMediaQuery,
  Button,
  Slide,
} from '@material-ui/core';
import { styles } from './styles';
import { sharedStyles } from '../../styles';
import { Mutation } from 'react-apollo';
import { PASSWORD_FORGOT_MUTATION } from '../../../../../data/authorisation';
import { PROFILE_EMAIL } from '../../../../../utils/dataLengths';
import { ErrorBox, Form, FormInput } from '../../../../../components';
import { validate } from 'email-validator';
import clsx from 'clsx';

export default function ForgotCard({ history, setPage }) {
  const classes = { ...styles(), ...sharedStyles() };
  const [email, setEmail] = React.useState('');
  const [errors, setError] = React.useState({
    email: null,
  });
  const mobile = useMediaQuery('(max-width:800px)');

  function submitChecks(SignupMutation) {
    let passed = true;

    const emailPass = validate(email);
    !emailPass && (passed = false);

    setError({
      email: !emailPass ? 'Valid email require' : null,
    });

    passed && SignupMutation();
  }

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.cardWrapper}>
        <Card
          className={clsx({
            [classes.card]: true,
            [classes.cardMobile]: mobile,
          })}
        >
          <CardContent style={{ padding: 5 }}>
            <Typography
              variant="h1"
              color="textPrimary"
              style={{ textAlign: 'center' }}
            >
              Forgot your password?
            </Typography>
            <Typography
              variant="body1"
              component="p"
              style={{ textAlign: 'center' }}
              className={classes.description}
            >
              Enter your email address and we'll send you a reset link
            </Typography>
          </CardContent>
          <Divider />
          <CardContent className={classes.cardContentCenter}>
            <Form width={200}>
              <FormInput
                fieldName="emailAddress"
                fieldValue={email}
                setFieldValue={setEmail}
                fieldTitle={`Email ${
                  email ? `(${PROFILE_EMAIL - email.length})` : ''
                }`}
                inputProps={{ maxLength: PROFILE_EMAIL }}
              />
              <ErrorBox errorMsg={errors.email} />
            </Form>
          </CardContent>
          <CardContent className={classes.cardContentCenter}>
            <Mutation
              mutation={PASSWORD_FORGOT_MUTATION}
              variables={{ email }}
              onCompleted={async (data) => {
                setPage(1);
              }}
              onError={(error) => {
                setPage(1);
              }}
            >
              {(passwordForgotMutation) => {
                return (
                  <Button
                    onClick={() => {
                      submitChecks(passwordForgotMutation);
                    }}
                    variant="contained"
                    color="primary"
                  >
                    Reset Password
                  </Button>
                );
              }}
            </Mutation>
          </CardContent>
          <Divider />
          <CardContent
            style={{
              paddingBottom: 70,
              display: 'flex',
              flexDirection: 'column',
            }}
            className={classes.cardContentCenter}
          >
            <Typography
              component="p"
              style={{ textAlign: 'center', fontSize: 12 }}
              color="primary"
            >
              Remembered your password?
            </Typography>
            <Link to="/login">
              <Button
                color="primary"
                style={{
                  width: 80,
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: 16,
                  padding: 0,
                }}
              >
                Login
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </Slide>
  );
}
