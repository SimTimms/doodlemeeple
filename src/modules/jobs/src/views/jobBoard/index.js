import React from 'react';
import { Column, IconButton } from '../../../imports/sharedComponents';

export default function JobBoard({ history }) {
  return (
    <Column>
      <IconButton title="Post to Job Board" onClickEvent={() => null} />
      <IconButton
        title="Create a Project"
        onClickEvent={() => {
          history.push(`/app/edit-job/new/public`);
        }}
      />
      <div>Publish</div>
      <IconButton
        title="Invite Only Job"
        onClickEvent={() => {
          history.push(`/app/edit-job/new/invite`);
        }}
      />
      <div>Invite Artists</div>
      <div>Create Job</div>
      <div>Publish</div>
    </Column>
  );
}
