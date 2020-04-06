import React from 'react';
import { Button, Icon } from '@material-ui/core';
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
            onClick={() => {
              notableProjectId !== 'new' && RemoveNotableProjectMutation();
              let newNotableProjects = Object.assign([], notableProjects);
              newNotableProjects.splice(index, 1);
              setNotableProjects(newNotableProjects);
            }}
            variant="contained"
            style={{
              margin: 3,
              boxShadow: 'none',
              marginLeft: 10,
              marginTop: 10,
              minWidth: 32,
              maxWidth: 32,
              minHeight: 32,
              maxHeight: 32,
              borderRadius: '50%',
            }}
          >
            <Icon style={{ fontSize: 18, color: '#fff' }}>delete</Icon>
          </Button>
        );
      }}
    </Mutation>
  );
}
