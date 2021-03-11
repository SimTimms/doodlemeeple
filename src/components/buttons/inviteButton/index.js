import React, { useEffect } from 'react';
import { IconButton } from '../../';

export default function InviteButton({ mutation, invite, disabled }) {
  const [on, setOn] = React.useState(false);

  useEffect(() => {
    setOn(invite);
  }, [invite]);

  return (
    <IconButton
      title={on ? '' : disabled ? ' 5 Max' : ''}
      color={on ? 'secondary' : 'grey'}
      disabled={disabled}
      type="button"
      iconPos="right"
      onClickEvent={() => {
        mutation();
      }}
      description="Invite this creative"
      styleOverride={{
        width: '100%',
        borderRadius: 0,
        margin: 0,
        justifyContent: 'center',
        color: '#fff',
      }}
      icon={disabled ? '' : on ? 'mail' : 'drafts'}
    />
  );
}
