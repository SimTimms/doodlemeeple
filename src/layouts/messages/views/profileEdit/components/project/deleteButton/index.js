import React from 'react';
import { Button, Icon } from '@material-ui/core';
import { Mutation } from 'react-apollo';
import { REMOVE_PROJECT_MUTATION } from '../../../../../../../data/mutations';

export function DeleteButton({
  index,
  projects,
  setNotableProjects,
  projectId,
  setShowAdd,
}) {
  return (
    <Mutation
      mutation={REMOVE_PROJECT_MUTATION}
      variables={{
        id: projectId,
      }}
    >
      {(mutation) => {
        return (
          <Button
            onClick={() => {
              projectId !== 'new' && mutation();
              let copyArr = Object.assign([], projects);
              copyArr.splice(index, 1);
              setShowAdd(true);
              setNotableProjects(copyArr);
            }}
            variant="contained"
            style={{
              margin: 3,
              boxShadow: 'none',
              marginLeft: 10,
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
