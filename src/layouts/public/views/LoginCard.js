import React from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Form, FormInput } from '../../../components/form';
import { styles } from './styles';
import Slide from '@material-ui/core/Slide';
import { Mutation } from 'react-apollo';
import { LOGIN_MUTATION } from '../../../data/mutations';
import Cookies from 'js-cookie';
import { readableErrors } from '../../../utils/readableErrors';
import { ErrorBox } from '../../../components/pageElements';

export default function LoginCard({ history }) {
  const classes = styles();
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [errors, setError] = React.useState({
    passwordError: null,
    noUserError: null,
  });

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Card className={classes.card}>
          <CardContent style={{ padding: 5 }}>
            <Typography
              variant="h6"
              color="textPrimary"
              style={{ textAlign: 'center' }}
            >
              Login
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
              <FormInput
                fieldName="password"
                fieldTitle="Password"
                fieldValue={password}
                setFieldValue={setPassword}
                type="password"
              />
            </Form>
          </CardContent>
          <Divider />
          <CardContent className={classes.cardContentCenter}>
            <Mutation
              mutation={LOGIN_MUTATION}
              variables={{ email, password }}
              onCompleted={async data => {
                if (data.login.token) {
                  await Cookies.set('token', data.login.token);
                  history.replace('/app/dashboard');
                }
              }}
              onError={error => {
                setError(readableErrors(error, errors));
              }}
            >
              {LoginMutation => {
                return (
                  <div>
                    <Button
                      onClick={() => {
                        LoginMutation();
                      }}
                      variant="contained"
                      color="secondary"
                    >
                      Login
                    </Button>
                  </div>
                );
              }}
            </Mutation>
            <ErrorBox errorMsg={errors.passwordError} />
            <ErrorBox errorMsg={errors.noUserError} />
          </CardContent>

          <CardContent className={classes.cardContentCenter}>
            <Button
              onClick={() => {
                history.push('/password-forgot');
              }}
            >
              Forgot Password
            </Button>
          </CardContent>
        </Card>
      </div>
    </Slide>
  );
}
