import React, { useEffect } from 'react';
import { IconButton } from '../../';

export default function InviteButton({ mutation, invite, disabled }) {
  const [on, setOn] = React.useState(false);

  useEffect(() => {
    setOn(invite);
  }, [invite]);

  return (
    <IconButton
      title={on ? '' : disabled ? ' 5 Max' : 'INVITE'}
      color={on ? 'secondary' : 'text-dark'}
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
        borderTop: '1px solid #ddd',
        margin: 0,
        justifyContent: 'center',
      }}
      icon={disabled ? '' : on ? 'mail' : ''}
    />
  );
}
