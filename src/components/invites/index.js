import React from 'react';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';
import CardMedia from '@material-ui/core/CardMedia';
import tim from '../../assets/tim.jpg';

export function InvitesWidget({ invites, setInvite, edit }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {invites.map((invite, index) => (
        <div className={classes.inviteMain} key={`cardmedia_${index}`}>
          <CardMedia
            className={classes.profileImg}
            component="img"
            alt="Profile Photo"
            image={invite.profileImg}
            title="Profile Photo"
          />

          {edit && (
            <Icon
              className={classes.inviteRemove}
              onClick={() => {
                const newInviteArr = invites.filter(
                  item => item.id !== invite.id,
                );
                setInvite(newInviteArr);
              }}
            >
              close_circle
            </Icon>
          )}
        </div>
      ))}

      {invites.length < 5 && edit && (
        <div className={classes.inviteAdd}>
          <Icon
            style={{ fontSize: 50, color: '#fff' }}
            onClick={() => {
              const newInviteArr = [
                ...invites,
                {
                  id: Math.floor(Math.random() * 100),
                  profileImg: tim,
                  name: 'Tim Simms',
                },
              ];
              setInvite(newInviteArr);
            }}
          >
            add_circle
          </Icon>
        </div>
      )}
    </div>
  );
}
