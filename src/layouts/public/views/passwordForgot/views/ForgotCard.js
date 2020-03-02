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
import { PASSWORD_FORGOT_MUTATION } from '../../../../../data/mutations';
import { ErrorBox } from '../../../../../components/pageElements';
import { validate } from 'email-validator';

export default function ForgotCard({ history, setPage }) {
  const classes = styles();
  const [email, setEmail] = React.useState('');
  const [errors, setError] = React.useState({
    email: null,
  });

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
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent style={{ padding: 5 }}>
            <Typography
              variant="h1"
              color="textPrimary"
              style={{ textAlign: 'center' }}
            >
              Forgotten Password
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
                fieldName="emailAddress"
                fieldTitle="Email"
                fieldValue={email}
                setFieldValue={setEmail}
              />
              <ErrorBox errorMsg={errors.email} />
            </Form>
          </CardContent>
          <Divider />
          <CardContent className={classes.cardContentCenter}>
            <Mutation
              mutation={PASSWORD_FORGOT_MUTATION}
              variables={{ email }}
              onCompleted={async data => {
                setPage(1);
              }}
              onError={error => {
                setPage(1);
              }}
            >
              {passwordForgotMutation => {
                return (
                  <div>
                    <Button
                      onClick={() => {
                        submitChecks(passwordForgotMutation);
                      }}
                      variant="contained"
                      color="secondary"
                    >
                      Reset Password
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
