import React from 'react';
import { Typography } from '@material-ui/core';
import {
  ErrorBox,
  IconButton,
  Meta,
  FieldBox,
  CardComponent,
  Column,
  DividerWithBorder,
  Divider,
  DividerMini,
} from '../../../../../components';
import { styles } from './styles';
import { sharedStyles } from '../../styles';
import { Mutation } from 'react-apollo';
import { SIGNUP_MUTATION } from '../../../../../data/authorisation';
import { readableErrors } from '../../../../../utils/readableErrors';
import { validate } from 'email-validator';

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

  const { campaignId, history } = props;

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
    <div className={`${classes.pageWrapper}`}>
      <CardComponent
        styleOverride={{
          width: 400,
          boxShadow: '5px 5px 20px rgba(0,0,0,0.2)',
        }}
      >
        <Column>
          <Typography variant="h5">Register</Typography>
          <Typography> Enter a few details to create your account</Typography>
          <DividerWithBorder />
        </Column>
        <Divider />
        <Column>
          <FieldBox
            value={name}
            title="Name"
            maxLength={26}
            onChangeEvent={(e) => {
              setName(e);
            }}
            replaceMode="tight"
            placeholder="Example: David Jones"
            info="Your name, this will be visible to all users"
            warning=""
            size="s"
            multiline={false}
          />
          <ErrorBox errorMsg={errors.name} />
          <DividerMini />
          <FieldBox
            value={email}
            title="Email"
            maxLength={226}
            onChangeEvent={(e) => {
              setEmail(e);
            }}
            replaceMode=""
            placeholder={`Example: ${process.env.REACT_APP_INFO_EMAIL}`}
            info="Your email address, used for logging into your account. This will not be displayed to other users"
            warning=""
            size="s"
            multiline={false}
          />
          <ErrorBox errorMsg={errors.email} />
          <DividerMini />
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
        </Column>

        <Column>
          <Mutation
            mutation={SIGNUP_MUTATION}
            variables={{ name, email, password, campaignId, available: true }}
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
          <DividerWithBorder />
          <Meta
            str={`By registering you agree to the ${process.env.REACT_APP_COMPANY_PUBLIC_NAME}`}
          />
          <Meta
            str={
              <a
                href={process.env.REACT_APP_TERMS_LINK}
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
                href={process.env.REACT_APP_PRIVACY_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            }
          />
        </Column>

        <Divider />
        <Column
          style={{ paddingBottom: 70 }}
          className={classes.cardContentCenter}
        >
          <Typography
            component="p"
            style={{ textAlign: 'center', fontSize: 12, cursor: 'pointer' }}
            color="primary"
            onClick={() => history.push('/')}
          >
            Back to Login
          </Typography>
        </Column>
      </CardComponent>
    </div>
  );
}
