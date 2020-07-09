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
import {
  Form,
  FormInput,
  ErrorBox,
  IconButton,
  Meta,
  Text,
} from '../../../../../components';
import { styles } from './styles';
import { sharedStyles } from '../../styles';
import { Mutation } from 'react-apollo';
import { SIGNUP_MUTATION } from '../../../../../data/mutations';
import { readableErrors } from '../../../../../utils/readableErrors';
import {
  PROFILE_NAME,
  PROFILE_EMAIL,
  PROFILE_PASSWORD,
} from '../../../../../utils/dataLengths';
import { validate } from 'email-validator';
import clsx from 'clsx';

var passwordValidator = require('password-validator');

export default function RegisterCard({ setPage }) {
  const classes = { ...styles(), ...sharedStyles() };
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [errors, setError] = React.useState({
    name: null,
    email: null,
    password: null,
  });
  const [password, setPassword] = React.useState('');
  const [buttonStatus, setButtonStatus] = React.useState('Register');
  const mobile = useMediaQuery('(max-width:800px)');

  function submitChecks(SignupMutation) {
    let passed = true;

    const emailPass = validate(email);
    !emailPass && (passed = false);

    const namePass = name.length > 2 ? true : false;
    !namePass && (passed = false);

    let passwordSchema = new passwordValidator();
    passwordSchema
      .is()
      .min(6) // Minimum length 8
      .is()
      .max(22) // Maximum length 100
      .has()
      .uppercase() // Must have uppercase letters
      .has()
      .lowercase() // Must have lowercase letters
      .has()
      .digits() // Must have digits
      .has()
      .not()
      .spaces() // Should not have spaces
      .is()
      .not()
      .oneOf(['Passw0rd', 'Password123']);

    const passwordPass = passwordSchema.validate(password);
    !passwordPass && (passed = false);

    setError({
      name: !namePass ? 'Enter your name' : null,
      email: !emailPass ? 'Valid email required' : null,
      password: !passwordPass
        ? 'At least 6 characters, 1 uppercase, 1 lowercase, 1 number'
        : null,
    });
    !passed && setButtonStatus('Try Again');
    passed && SignupMutation();
  }

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
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
              Register
            </Typography>
            <Typography
              variant="body1"
              component="p"
              style={{ textAlign: 'center' }}
              className={classes.description}
            >
              Enter a few details to create your account
            </Typography>
          </CardContent>
          <Divider />
          <CardContent className={classes.cardContentCenter}>
            <Form width={200}>
              <FormInput
                fieldName="name"
                fieldValue={name}
                setFieldValue={setName}
                fieldTitle={`Name ${
                  name ? `(${PROFILE_NAME - name.length})` : ''
                }`}
                inputProps={{ maxLength: PROFILE_NAME }}
              />
              <ErrorBox errorMsg={errors.name} />
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
              <FormInput
                fieldName="password"
                fieldValue={password}
                type="password"
                setFieldValue={setPassword}
                fieldTitle={`Password ${
                  password ? `(${PROFILE_PASSWORD - password.length})` : ''
                }`}
                inputProps={{ maxLength: PROFILE_PASSWORD }}
              />
              <ErrorBox errorMsg={errors.password} />
            </Form>
          </CardContent>
          <CardContent className={classes.cardContentCenter}>
            <Mutation
              mutation={SIGNUP_MUTATION}
              variables={{ name, email, password }}
              onError={(error) => {
                setButtonStatus('Error');
                setError(readableErrors(error, errors));
              }}
              onCompleted={(a, b) => {
                setButtonStatus('Done');
                setPage();
              }}
            >
              {(SignupMutation) => {
                return (
                  <div>
                    <IconButton
                      onClickEvent={() => {
                        setButtonStatus('Checking...');
                        submitChecks(SignupMutation);
                      }}
                      title={buttonStatus}
                      disabled={false}
                      icon=""
                      iconPos="right"
                      type="button"
                      color="primary"
                      styleOverride={null}
                    />
                  </div>
                );
              }}
            </Mutation>
            <Meta str={`By registering you agree to the DoodleMeeple`} />
            <Meta
              str={
                <a
                  href="https://doodlemeeple.com/terms-of-service/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>
              }
            />
            <Meta
              str={
                <a
                  href="https://doodlemeeple.com/privacy-policy-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              }
            />
          </CardContent>
          <Divider />
          <CardContent
            style={{ paddingBottom: 70 }}
            className={classes.cardContentCenter}
          >
            <Typography
              component="p"
              style={{ textAlign: 'center', fontSize: 12 }}
              color="primary"
            >
              Already have an account?
            </Typography>
            <Link to="/">
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
