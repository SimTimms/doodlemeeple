import React from 'react';
import Button from '@material-ui/core/Button';
import { Mutation } from 'react-apollo';
import { REMOVE_NOTABLE_PROJECT_MUTATION } from '../../../../../../../data/mutations';

export function DeleteButton({
  index,
  notableProjects,
  setNotableProjects,
  notableProjectId,
}) {
  return (
    <Mutation
      mutation={REMOVE_NOTABLE_PROJECT_MUTATION}
      variables={{
        id: notableProjectId,
      }}
    >
      {RemoveNotableProjectMutation => {
        return (
          <Button
            color="secondary"
            onClick={() => {
              notableProjectId !== 'new' && RemoveNotableProjectMutation();
              let newNotableProjects = Object.assign([], notableProjects);
              newNotableProjects.splice(index, 1);
              setNotableProjects(newNotableProjects);
            }}
          >
            Remove
          </Button>
        );
      }}
    </Mutation>
  );
}
