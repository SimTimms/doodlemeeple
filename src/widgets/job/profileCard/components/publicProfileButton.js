import React from 'react';
import { IconButton } from '../../../../components';

export default function PublicProfileButton({ jobId }) {
  return (
    <a
      href={`/job-description/${jobId}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: 'none',
        color: '#222',
        textAlign: 'center',
      }}
    >
      <IconButton
        color="text-dark"
        title="Full Description"
        icon=""
        styleOverride={{ marginTop: 0 }}
        onClickEvent={() => {}}
      />
    </a>
  );
}
