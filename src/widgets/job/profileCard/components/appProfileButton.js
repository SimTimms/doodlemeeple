import React from 'react';
import { IconButton } from '../../../../components';

export default function AppProfileButton({ jobId, history }) {
  return (
    <IconButton
      color="text-dark"
      title="Full Description"
      icon=""
      styleOverride={{ marginTop: 0 }}
      onClickEvent={() => {
        history.push(`/app/job-description/${jobId}`);
      }}
    />
  );
}
