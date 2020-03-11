import React from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Form, FormInput } from '../../../../components/form';
import { styles } from './styles';
import { sharedStyles } from '../styles';
import { Mutation } from 'react-apollo';
import { LOGIN_MUTATION } from '../../../../data/mutations';
import { PROFILE_EMAIL, PROFILE_PASSWORD } from '../../../../utils/dataLengths';
import Cookies from 'js-cookie';
import { readableErrors } from '../../../../utils/readableErrors';
import { ErrorBox } from '../../../../components/pageElements';
import { Link } from 'react-router-dom';
import { LoginButton } from './components';
import clsx from 'clsx';

export default function LoginCard({ history }) {
  const classes = { ...styles(), ...sharedStyles() };
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [errors, setError] = React.useState({
    passwordError: null,
    noUserError: null,
  });
  const [loginStatus, setStatus] = React.useState('Login');
  const mobile = useMediaQuery('(max-width:800px)');

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.cardWrapper}>
        <Card
          className={clsx({
            [classes.card]: true,
            [classes.cardMobile]: mobile,
          })}
        >
          <CardContent>
            <Typography
              variant="h1"
              color="textPrimary"
              style={{ textAlign: 'center' }}
            >
              Welcome
            </Typography>
            <Typography
              variant="body1"
              component="p"
              style={{ textAlign: 'center' }}
              className={classes.description}
            >
              Please login
            </Typography>
          </CardContent>
          <Divider />
          <CardContent className={classes.cardContentCenter}>
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
              <FormInput
                fieldName="password"
                fieldValue={password}
                setFieldValue={setPassword}
                type="password"
                fieldTitle={`Password ${
                  password ? `(${PROFILE_PASSWORD - password.length})` : ''
                }`}
                inputProps={{ maxLength: PROFILE_PASSWORD }}
              />
              <ErrorBox errorMsg={errors.passwordError} />
              <ErrorBox errorMsg={errors.noUserError} />
            </Form>
          </CardContent>
          <CardContent
            className={classes.cardContentCenter}
            style={{ paddingTop: 0 }}
          >
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
                setStatus('Login');
                setError(readableErrors(error, errors));
              }}
            >
              {LoginMutation => {
                return (
                  <LoginButton
                    loginMutation={LoginMutation}
                    status={loginStatus}
                    setStatus={setStatus}
                    email={email}
                    password={password}
                  />
                );
              }}
            </Mutation>
            <Button
              onClick={() => {
                history.push('/password-forgot');
              }}
              style={{ color: '#aaa', textTransform: 'none' }}
            >
              Forgot Password
            </Button>
          </CardContent>
          <Divider />
          <CardContent
            style={{
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
              Don't have an account?
            </Typography>
            <Link to="/register">
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
                Register
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </Slide>
  );
}
