import React from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-router-dom';
import { Form, FormInput } from '../../../../../components/form';
import { styles } from './styles';
import { sharedStyles } from '../../styles';
import { Mutation } from 'react-apollo';
import { PASSWORD_RESET_MUTATION } from '../../../../../data/mutations';
import { ErrorBox } from '../../../../../components/pageElements';
import clsx from 'clsx';

var passwordValidator = require('password-validator');

export default function ResetCard({ setPage, token }) {
  const classes = { ...styles(), ...sharedStyles() };
  const mobile = useMediaQuery('(max-width:800px)');
  const [password, setPassword] = React.useState('');
  const [buttonStatus, setButtonStatus] = React.useState({
    value: 'Reset Password',
    action: submitChecks,
  });
  const [errors, setError] = React.useState({
    password: null,
  });

  function submitChecks(password, SignupMutation) {
    let passed = true;

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
      password: !passwordPass ? 'Valid password required' : null,
    });

    if (passed) {
      setButtonStatus({ value: 'Working', action: () => {} });
      SignupMutation();
    }
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
              Reset Password
            </Typography>
            <Typography
              color="textSecondary"
              component="p"
              style={{ textAlign: 'center' }}
              className={classes.description}
            >
              Enter a new password.
            </Typography>
          </CardContent>
          <Divider />
          <CardContent className={classes.cardContentCenter}>
            <Form width={200}>
              <FormInput
                fieldName="password"
                type="password"
                fieldTitle="Password"
                fieldValue={password}
                setFieldValue={setPassword}
              />
              <ErrorBox errorMsg={errors.password} />
            </Form>
          </CardContent>
          <CardContent className={classes.cardContentCenter}>
            <Mutation
              mutation={PASSWORD_RESET_MUTATION}
              variables={{ password, token }}
              onCompleted={async data => {
                data.passwordReset === true
                  ? setPage(1)
                  : setButtonStatus({
                      value: 'Try Again',
                      action: submitChecks,
                    });
              }}
              onError={error => {
                setButtonStatus({
                  value: 'Invalid Token',
                  action: submitChecks,
                });
              }}
            >
              {passwordResetMutation => {
                return (
                  <div>
                    <Button
                      onClick={() => {
                        buttonStatus.action(password, passwordResetMutation);
                      }}
                      variant="contained"
                      color="primary"
                    >
                      {buttonStatus.value}
                    </Button>
                  </div>
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
