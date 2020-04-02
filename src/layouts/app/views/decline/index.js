import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import {
  Card,
  CardContent,
  Typography,
  Slide,
  Button,
} from '@material-ui/core';
import { ProjectComponent } from './components';
import { CardActionArea } from '../../../../components';

export function Decline({ projectId }) {
  const classes = useStyles();
  const [message, setMessage] = React.useState('');

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
            Decline Invite
          </Typography>
          <Typography color="textPrimary" gutterBottom>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </Typography>
          <ProjectComponent
            fieldValue={message}
            setFieldValue={setMessage}
            title="Message"
            width="100%"
          />
        </CardContent>
        <CardActionArea>
          <Link to={`/app/view-project/${projectId}`}>
            <Button variant="contained">Cancel</Button>
          </Link>
          <Link to={`/app/invites`}>
            <Button variant="contained" color="primary">
              Decline
            </Button>
          </Link>
        </CardActionArea>
      </Card>
    </Slide>
  );
}
