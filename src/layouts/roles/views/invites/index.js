import React from 'react';
import Slide from '@material-ui/core/Slide';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import { rolesArrayTemp } from '../../../../testData/roles';
import { creativesTemp } from '../../../../testData/creatives';
import { PictureProfileCard, ProfileCard } from './components';

import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

function ProfileExtraButton({ display, setDisplay }) {
  const onClick = () => {
    return display ? setDisplay(false) : setDisplay(true);
  };
  return display ? (
    <Button variant="contained" style={{ marginRight: 10 }} onClick={onClick}>
      <Icon style={{ color: '#222' }}>keyboard_arrow_up</Icon>
    </Button>
  ) : (
    <Button variant="contained" style={{ marginRight: 10 }} onClick={onClick}>
      <Icon style={{ color: '#222' }}>keyboard_arrow_down</Icon>{' '}
    </Button>
  );
}

export function Invites({ roleId }) {
  const classes = useStyles();
  const [page, setPage] = React.useState('search');
  const [invited, setInvited] = React.useState([]);
  const thisRole = rolesArrayTemp.filter(role => role.id === roleId)[0];
  const creativeKeywords = thisRole.creatives;
  const keywords = thisRole.keywords;
  const creativesFiltered = creativesTemp.filter(
    creative => creative.keywords.indexOf('Digital Artist') > -1,
  );
  const creativesFiltered2 = creativesTemp.filter(
    creative => creative.keywords.indexOf('Fantasy Artist') > -1,
  );
  const profile = creativesFiltered[0];
  const profile2 = creativesFiltered2[0];
  const allProfiles = creativesTemp;

  function ProfileActions({ display, setDisplay, creativeId }) {
    const classes = useStyles();
    return (
      <div className={classes.actionArea} style={{ zIndex: 1 }}>
        <ProfileExtraButton display={display} setDisplay={setDisplay} />
        <Button variant="contained">
          <Icon>favorite_border</Icon>
        </Button>

        <Button
          variant="contained"
          style={{ marginLeft: 10 }}
          color="secondary"
          onClick={() => {
            setInvited([creativeId]);
          }}
        >
          Invite
        </Button>
      </div>
    );
  }

  return (
    <div>
      {page === 'search' ? (
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
              <PictureProfileCard
                profile={profile}
                ProfileActions={ProfileActions}
              />
            </CardContent>
            <Divider />
            <CardContent>
              <Typography variant="h4" color="textPrimary">
                Highest Ranked
              </Typography>
              <PictureProfileCard
                profile={profile2}
                ProfileActions={ProfileActions}
              />
            </CardContent>
            <Divider />
            <CardContent>
              <Typography variant="h4" color="textPrimary">
                Browse
              </Typography>
              {allProfiles.map((item, index) => {
                return (
                  <ProfileCard profile={item} ProfileActions={ProfileActions} />
                );
              })}
            </CardContent>
            <Divider style={{ margin: '10px 0 0 0' }} />
            <CardContent
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            ></CardContent>
          </Card>
        </Slide>
      ) : null}
    </div>
  );
}
