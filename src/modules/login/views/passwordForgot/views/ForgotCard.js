import React from 'react';
import { Link } from 'react-router-dom';
import {
  CardContent,
  Typography,
  useMediaQuery,
  Slide,
} from '@material-ui/core';
import { styles } from './styles';
import { sharedStyles } from '../../sharedStyles';
import { useMutation } from '@apollo/client';
import { PASSWORD_FORGOT_MUTATION } from '../../../data';
import { PROFILE_EMAIL } from '../../../../../utils/dataLengths';
import {
  ErrorBox,
  Form,
  FormInput,
  CardComponent,
  Column,
  Divider,
  IconButton,
} from '../../../../../components';
import { validate } from 'email-validator';
import clsx from 'clsx';

export default function ForgotCard({ history, setPage }) {
  const classes = { ...styles(), ...sharedStyles() };
  const [email, setEmail] = React.useState('');
  const [errors, setError] = React.useState({
    email: null,
  });
  const mobile = useMediaQuery('(max-width:800px)');
  const [mutation, { loading }] = useMutation(PASSWORD_FORGOT_MUTATION, {
    variables: { email },
    async onCompleted({ userLogin }) {
      setPage(1);
    },
    onError(error) {
      setPage(1);
    },
  });

  function submitChecks(SignupMutation) {
    let passed = true;

    const emailPass = validate(email);
    !emailPass && (passed = false);

    setError({
      email: !emailPass ? 'Valid email required' : null,
    });

    passed && SignupMutation();
  }

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.cardWrapper}>
        <CardComponent
          styleOverride={{
            width: 400,
            boxShadow: '5px 5px 20px rgba(0,0,0,0.2)',
          }}
        >
          <Column>
            <Typography variant="h5">Forgot your password?</Typography>
            <Typography>
              Enter your email address and we'll send you a reset link
            </Typography>
          </Column>
          <Column>
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
          </Column>
          <Column>
            <IconButton
              title="Reset Password"
              icon="check"
              disabled={false}
              color="primary"
              onClickEvent={() => {
                submitChecks(mutation);
              }}
              styleOverride={null}
              type="button"
              iconPos="right"
            />
          </Column>

          <Divider />
          <Column>
            <Typography
              component="p"
              style={{
                textAlign: 'center',
                fontSize: 12,
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
              color="primary"
              onClick={() => history.push('/login')}
            >
              Login
            </Typography>
          </Column>
        </CardComponent>
      </div>
    </Slide>
  );
}
