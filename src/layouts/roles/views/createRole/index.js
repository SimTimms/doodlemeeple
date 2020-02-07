import React from 'react';
import Slide from '@material-ui/core/Slide';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { FormInput } from '../../../../components/form';
import { CardHeader } from '../../../../components/headers';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';

export function CreateRole({ gameId, roles }) {
  const classes = useStyles();
  const [roleName, setRoleName] = React.useState('');

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4" color="textPrimary">
            Create a Role for {gameId}
          </Typography>
          <Typography color="textPrimary" gutterBottom>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </Typography>
        </CardContent>
        <Divider />
        <CardContent>
          <CardHeader title="Role Details" />
          <FormInput
            fieldName={'roleName'}
            fieldTitle={'Role Name'}
            fieldValue={roleName}
            setFieldValue={setRoleName}
            style={{ width: '100%' }}
          />
        </CardContent>
      </Card>
    </Slide>
  );
}
