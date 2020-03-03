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
import Cookies from 'js-cookie';
import { readableErrors } from '../../../../utils/readableErrors';
import { ErrorBox } from '../../../../components/pageElements';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

export default function LoginCard({ history }) {
  const classes = { ...styles(), ...sharedStyles() };

  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [errors, setError] = React.useState({
    passwordError: null,
    noUserError: null,
  });
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
            </Typography>{' '}
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
                      style={{ width: 180, marginTop: 0 }}
                    >
                      Login
                    </Button>
                  </div>
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
                Register
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </Slide>
  );
}
