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
import { SIGNUP_MUTATION } from '../../../../../data/mutations';
import { readableErrors } from '../../../../../utils/readableErrors';
import { ErrorBox } from '../../../../../components/pageElements';
import { validate } from 'email-validator';
var passwordValidator = require('password-validator');

export default function RegisterCard({ setPage }) {
  const classes = styles();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [errors, setError] = React.useState({
    name: null,
    email: null,
    password: null,
  });
  const [password, setPassword] = React.useState('');

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
      email: !emailPass ? 'Enter a valid email address' : null,
      password: !passwordPass ? 'This password is not secure' : null,
    });
    passed && SignupMutation();
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
              Register
            </Typography>
            <Typography
              color="textSecondary"
              component="p"
              style={{ textAlign: 'center' }}
              className={classes.description}
            >
              Enter a few details and we'll send you a registration link.
            </Typography>
          </CardContent>
          <Divider />
          <CardContent className={classes.cardContentCenter}>
            <Form width={200}>
              <FormInput
                fieldName="name"
                fieldTitle="Name"
                fieldValue={name}
                setFieldValue={setName}
              />
              <ErrorBox errorMsg={errors.name} />
              <FormInput
                fieldName="emailAddress"
                fieldTitle="Email"
                fieldValue={email}
                setFieldValue={setEmail}
              />
              <ErrorBox errorMsg={errors.email} />
              <FormInput
                fieldName="password"
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
              mutation={SIGNUP_MUTATION}
              variables={{ name, email, password }}
              onError={error => {
                setError(readableErrors(error, errors));
              }}
              onCompleted={() => {
                setPage();
              }}
            >
              {SignupMutation => {
                return (
                  <div>
                    <Button
                      onClick={() => {
                        submitChecks(SignupMutation);
                      }}
                      variant="contained"
                      color="secondary"
                    >
                      Register
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
