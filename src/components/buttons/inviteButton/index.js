import React, { useEffect } from 'react';
import { IconButton } from '../../';

export default function InviteButton({ mutation, invite, disabled }) {
  const [on, setOn] = React.useState(false);

  useEffect(() => {
    setOn(invite);
  }, [invite]);

  return (
    <IconButton
      title={on ? 'Invited' : disabled ? ' 5 Max' : 'invite'}
      color={on ? 'primary' : 'text-dark'}
      disabled={disabled}
      type="button"
      iconPos="right"
      onClickEvent={() => {
        mutation();
      }}
      icon={disabled ? '' : on ? 'local_post_office' : 'local_post_office'}
    />
  );
}
