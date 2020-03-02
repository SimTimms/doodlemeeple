import React from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { Form, FormInput } from '../../../../components/form';
import { styles } from './styles';
import { Mutation } from 'react-apollo';
import { LOGIN_MUTATION } from '../../../../data/mutations';
import Cookies from 'js-cookie';
import { readableErrors } from '../../../../utils/readableErrors';
import { ErrorBox } from '../../../../components/pageElements';
import { Link } from 'react-router-dom';

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
          <CardContent style={{ marginTop: 50 }}>
            <Typography
              variant="h1"
              color="textPrimary"
              style={{ textAlign: 'center' }}
            >
              Register
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
              <ErrorBox errorMsg={errors.passwordError} />
              <ErrorBox errorMsg={errors.noUserError} />
              <Button
                onClick={() => {
                  history.push('/password-forgot');
                }}
                style={{ color: '#aaa', paddingTop: 0, textTransform: 'none' }}
              >
                Forgot Password
              </Button>
            </Form>
          </CardContent>
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
                      style={{ width: 80 }}
                    >
                      Login
                    </Button>
                  </div>
                );
              }}
            </Mutation>
          </CardContent>
          <Divider />
          <CardContent
            style={{ paddingBottom: 70 }}
            className={classes.cardContentCenter}
          >
            <Typography
              component="p"
              style={{ textAlign: 'center', fontSize: 12 }}
              color="secondary"
            >
              Don't have an account?
            </Typography>
            <Link to="/register">
              <Button
                color="secondary"
                style={{
                  width: 80,
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: 16,
                  padding: 0,
                }}
              >
                Sign Up
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </Slide>
  );
}
