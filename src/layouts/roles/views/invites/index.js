import React from 'react';
import Slide from '@material-ui/core/Slide';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import ActionButton from '../../../../components/buttons';
import { rolesArrayTemp } from '../../../../testData/roles';
import { creativesTemp } from '../../../../testData/creatives';

export function Invites({ roleId }) {
  const classes = useStyles();

  const thisRole = rolesArrayTemp.filter(role => role.id === roleId)[0];
  const creativeKeywords = thisRole.creatives;
  const keywords = thisRole.keywords;

  //This will de done on the back-end
  const creativesFiltered = creativesTemp
    .map(creative => {
      const match = creative.keywords.map(keyword => {
        if (keyword.name === 'Graphic Artist') {
          return true;
        }
        return false;
      });

      return match[0] !== false ? creative : { id: false };
    })
    .filter(item => item.id);

  //search for the role
  //also search for the project?
  //match keywords from role to artist

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4" color="textPrimary">
            Invite Creatives to {roleId}
            DEBUG: Search for: {`${creativeKeywords} ${keywords}`}
          </Typography>
          <Typography color="textPrimary" gutterBottom>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </Typography>
        </CardContent>
        <Divider />
        <CardContent>
          <Typography variant="h4" color="textPrimary">
            We recommend
          </Typography>
          <Typography color="textPrimary" gutterBottom>
            {creativesFiltered[0].name}
          </Typography>
        </CardContent>
        <Divider />
        <CardContent>
          <Typography variant="h4" color="textPrimary">
            Highest Ranked
          </Typography>
          <Typography color="textPrimary" gutterBottom>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </Typography>
        </CardContent>
        <Divider style={{ margin: '10px 0 0 0' }} />
        <CardContent
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Link to={`/roles/invites/${roleId}`}>
            <ActionButton name={`Button`} />
          </Link>
        </CardContent>
      </Card>
    </Slide>
  );
}
