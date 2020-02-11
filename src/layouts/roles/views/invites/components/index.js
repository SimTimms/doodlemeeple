import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import { MediaGallery } from '../../../../../components/mediaGallery';

function ProfileInterior({ profile }) {
  const classes = useStyles();
  return (
    <div className={classes.profileWrapper} style={{ zIndex: 1 }}>
      <div className={classes.avatarWrapper}>
        <CardMedia
          component="img"
          alt="Profile Photo"
          image={profile.profileImg}
          title="Profile Photo"
          className={classes.avatar}
        />
      </div>
      <div className={classes.summaryWrapper}>
        <div className={classes.rowWrapper}>
          <Typography variant="h5" color="textPrimary">
            {profile.userName}
          </Typography>
          <div className={classes.iconWrapper}>
            <Icon>location_on</Icon>
            {profile.location}
          </div>
        </div>
        <Typography color="textPrimary">{profile.summary}</Typography>
      </div>
    </div>
  );
}

function ProfileExtra({ display, profile }) {
  const classes = useStyles();

  return (
    <Collapse in={display} timeout="auto" unmountOnExit style={{ zIndex: 1 }}>
      <div className={classes.colWrapper} style={{ width: '100%' }}>
        <MediaGallery
          items={profile.gallery}
          sketches={null}
          setSketches={null}
          edit={false}
        />
      </div>
    </Collapse>
  );
}

export function PictureProfileCard({ profile, ProfileActions }) {
  const classes = useStyles();
  const [display, setDisplay] = React.useState(false);

  return (
    <Card className={classes.card}>
      <CardContent className={classes.profileStandard} style={{ padding: 0 }}>
        <div
          className={classes.profileBG}
          style={{
            backgroundImage: `url(${profile.profileBG})`,
            position: 'relative',
            padding: 10,
          }}
        >
          <ProfileInterior profile={profile} />
          <div style={{ width: '100%', margin: 5 }}></div>
          <ProfileActions
            display={display}
            setDisplay={setDisplay}
            creativeId={profile.id}
          />
        </div>
        <ProfileExtra profile={profile} display={display} />
      </CardContent>
    </Card>
  );
}

export function ProfileCard({ profile, ProfileActions }) {
  const [display, setDisplay] = React.useState(false);
  const classes = useStyles();
  return (
    <CardContent className={classes.profileStandard}>
      <ProfileInterior profile={profile} />
      <ProfileExtra profile={profile} display={display} />
      <ProfileActions
        display={display}
        setDisplay={setDisplay}
        creativeId={profile.id}
      />
    </CardContent>
  );
}
