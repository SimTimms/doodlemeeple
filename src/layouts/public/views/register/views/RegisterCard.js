import React from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Form, FormInput } from 'src/components/form';
import { styles } from './styles';
import ActionButton from '../components';
import Slide from '@material-ui/core/Slide';

export default function RegisterCard({ setPage }) {
  const classes = styles();
  const [name, setName] = React.useState('');
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
              Register
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
              <FormInput
                fieldName="emailAddress"
                fieldTitle="Email"
                fieldValue={email}
                setFieldValue={setEmail}
              />
            </Form>
          </CardContent>
          <Divider />
          <CardContent className={classes.cardContentCenter}>
            <ActionButton
              name="Register"
              onClick={() => {
                setPage(1);
              }}
            />
          </CardContent>
        </Card>
      </div>
    </Slide>
  );
}
