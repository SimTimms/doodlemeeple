import React from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Form, FormInput } from '../../../components/form';
import { styles } from './styles';
import Slide from '@material-ui/core/Slide';
import { Mutation } from 'react-apollo';
import Button from '@material-ui/core/Button';
import { LOGIN_MUTATION, POST_MUTATION } from '../../../data/mutations';
import Cookies from 'js-cookie';

export default function LoginCard({ history }) {
  const classes = styles();
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

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
              />
            </Form>
          </CardContent>
          <Divider />
          <CardContent className={classes.cardContentCenter}>
            <Mutation
              mutation={LOGIN_MUTATION}
              variables={{ email, password }}
              onCompleted={data => {
                if (data.login.token) {
                  Cookies.set('token', data.login.token);
                  history.push('/app/dashboard');
                }
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
            <Mutation
              mutation={POST_MUTATION}
              variables={{ url: 'dd', description: 'dd' }}
              onCompleted={data => {
                console.log(data);
              }}
            >
              {PostMutation => {
                return (
                  <div>
                    <Button
                      onClick={() => {
                        PostMutation();
                      }}
                      variant="contained"
                      color="secondary"
                    >
                      Login2
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
