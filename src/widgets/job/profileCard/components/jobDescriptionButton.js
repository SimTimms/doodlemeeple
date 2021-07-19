import React from 'react';
import { IconButton } from '../../../../components';
import { HistoryContext } from '../../../../context';

export default function JobDescriptionButton({ jobId, history }) {
  return (
    <HistoryContext.Consumer>
      {(history) => (
        <IconButton
          color="text-dark"
          title="Full Description"
          icon=""
          styleOverride={{ marginTop: 0 }}
          onClickEvent={() => {
            history.push(`/app/job-description/${jobId}`);
          }}
        />
      )}
    </HistoryContext.Consumer>
  );
}
