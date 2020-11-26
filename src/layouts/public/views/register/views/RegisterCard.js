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
  ErrorBox,
  IconButton,
  Meta,
  FieldBox,
} from '../../../../../components';
import { styles } from './styles';
import { sharedStyles } from '../../styles';
import { Mutation } from 'react-apollo';
import { SIGNUP_MUTATION } from '../../../../../data/mutations';
import { readableErrors } from '../../../../../utils/readableErrors';
import { validate } from 'email-validator';
import clsx from 'clsx';

var passwordValidator = require('password-validator');

export default function RegisterCard({ setPage, ...props }) {
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

  const { campaignId } = props;

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
              variant="h2"
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
            <FieldBox
              value={name}
              title="Name"
              maxLength={26}
              onChangeEvent={(e) => {
                setName(e);
              }}
              replaceMode="tight"
              placeholder="Example: David Jones"
              info="Your name, callsign, company name, handle, alias or whatever else you want to be know as."
              warning=""
              size="s"
              multiline={false}
            />
            <ErrorBox errorMsg={errors.name} />
            <FieldBox
              value={email}
              title="Email"
              maxLength={226}
              onChangeEvent={(e) => {
                setEmail(e);
              }}
              replaceMode=""
              placeholder="Example: info@doodlemeeple.com"
              info="Your email address, used for logging into your account"
              warning=""
              size="s"
              multiline={false}
            />
            <ErrorBox errorMsg={errors.email} />
            <FieldBox
              value={password}
              title="Password"
              maxLength={20}
              onChangeEvent={(e) => {
                setPassword(e);
              }}
              replaceMode=""
              placeholder="Example: *********"
              info="The password you will use for logging into your account"
              warning=""
              size="s"
              type="password"
              multiline={false}
            />
            <ErrorBox errorMsg={errors.password} />
          </CardContent>
          <CardContent className={classes.cardContentCenter}>
            <Mutation
              mutation={SIGNUP_MUTATION}
              variables={{ name, email, password, campaignId }}
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
                  href="https://doodlemeeple.com/privacy-policy/"
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
