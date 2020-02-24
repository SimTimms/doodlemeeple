import React from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Form, FormInput } from '../../../../../components/form';
import { styles } from './styles';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import { Mutation } from 'react-apollo';
import { PASSWORD_RESET_MUTATION } from '../../../../../data/mutations';
import { ErrorBox } from '../../../../../components/pageElements';
var passwordValidator = require('password-validator');

export default function ResetCard({ history, setPage, token }) {
  const classes = styles();
  const [password, setPassword] = React.useState('');
  const [buttonStatus, setButtonStatus] = React.useState({
    value: 'Reset Password',
    action: submitChecks,
  });
  const [errors, setError] = React.useState({
    password: null,
  });

  function submitChecks(SignupMutation) {
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
    console.log(password);
    setError({
      password: !passwordPass ? 'Enter a valid password' : null,
    });

    if (passed) {
      setButtonStatus({ value: 'Working', action: () => {} });
      SignupMutation();
    }
  }

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Card className={classes.card}>
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
          <Divider />
          <CardContent className={classes.cardContentCenter}>
            <Mutation
              mutation={PASSWORD_RESET_MUTATION}
              variables={{ password, token }}
              onCompleted={async data => {
                setButtonStatus({ value: 'Done', action: () => {} });
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
                        buttonStatus.action(passwordResetMutation);
                      }}
                      variant="contained"
                      color="secondary"
                    >
                      {buttonStatus.value}
                    </Button>
                  </div>
                );
              }}
            </Mutation>
          </CardContent>
        </Card>
      </div>
    </Slide>
  );
}
