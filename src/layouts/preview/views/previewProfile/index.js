import React from 'react';

import FullProfile from './fullProfile';

export function PreviewProfile({ profileId, publicView, ...props }) {
  const { setFullProfile } = props;

  return (
    <FullProfile
      profileId={profileId}
      publicView={publicView}
      setFullProfile={setFullProfile}
    />
  );
}
