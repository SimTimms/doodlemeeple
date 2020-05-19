import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Slide,
  Button,
  Divider,
} from '@material-ui/core';
import { useStyles } from './styles';
import { FormInput, CardActionArea } from '../../../../components';
import { Link } from 'react-router-dom';

export function NewQuote({ projectId }) {
  const classes = useStyles();
  const [message, setMessage] = React.useState('');
  const [amount, setAmount] = React.useState(1000);
  const [deposit, setDeposit] = React.useState(250);

  return (
    <Slide
      direction="left"
      in={true}
      mountOnEnter
      unmountOnExit
      style={{ width: 700 }}
    >
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4" color="textPrimary">
            Quote
          </Typography>
          <Typography color="textPrimary" gutterBottom>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </Typography>
          <FormInput
            fieldName={'title'}
            fieldTitle={'Message'}
            fieldValue={message}
            setFieldValue={setMessage}
            style={{ width: '100%' }}
          />
          <Divider style={{ margin: 10 }} />
          <Typography color="textPrimary" gutterBottom>
            Add a quote......
          </Typography>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
            <FormInput
              fieldName={'title'}
              fieldTitle={'Total Amount'}
              fieldValue={amount}
              setFieldValue={setAmount}
              style={{ width: '150px' }}
            />
            <FormInput
              fieldName={'title'}
              fieldTitle={'Deposit'}
              fieldValue={deposit}
              setFieldValue={setDeposit}
              style={{ width: '150px' }}
            />
          </div>
        </CardContent>
        <CardActionArea>
          <Link to={`/app/view-project/${projectId}`}>
            <Button variant="contained">Cancel</Button>
          </Link>
          <Link to={`/app/invites`}>
            <Button variant="contained" color="primary">
              Send
            </Button>
          </Link>
        </CardActionArea>
      </Card>
    </Slide>
  );
}
