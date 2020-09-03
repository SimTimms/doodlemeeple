import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { IconButton } from '../../';

export default function InviteButton({ mutation, invite, disabled }) {
  const classes = useStyles();
  const [on, setOn] = React.useState(false);

  useEffect(() => {
    setOn(invite);
  }, [invite]);

  return (
    <IconButton
      title={on ? 'Invited' : disabled ? ' 5 Max' : 'invite'}
      color={on ? 'primary' : 'text-dark'}
      disabled={disabled}
      styleOverride={{ margin: 0 }}
      type="button"
      iconPos="right"
      onClickEvent={() => {
        mutation();
      }}
      icon={disabled ? '' : on ? 'thumb_up' : ''}
    />
    /*
    <Button
      variant="contained"
      className={clsx({
        [classes.root]: true,
        [classes.rootOn]: on,
      })}
      onClick={() => {
        disabled
          ? toaster('5 Invites Max')
          : toaster(
              !on ? (
                <Icon className={classes.iconOn}>thumb_up</Icon>
              ) : (
                'Invite Cancelled'
              )
            );
        if (!disabled) {
          on === true ? setOn(false) : setOn(true);
        }
        mutation();
      }}
    >
      <Typography variant="body1" component="p" style={{ color: '#fff' }}>
        {!on ? (disabled ? '5 Max' : 'Invite') : 'Selected'}
      </Typography>
    </Button>*/
  );
}
