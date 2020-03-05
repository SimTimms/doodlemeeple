import React from 'react';
import Button from '@material-ui/core/Button';

export function AddNotableProject({ setNotableProjects, notableProjects }) {
  return (
    <div style={{ width: '100%' }}>
      <Button
        onClick={() => {
          const newNotableProject = { summary: '', id: 'new' };
          const newNotableProjects = Object.assign([], notableProjects);
          newNotableProjects.push(newNotableProject);
          setNotableProjects(newNotableProjects);
        }}
        color="secondary"
        style={{ textTransform: 'none' }}
      >
        {`+ Add a notable project (${5 - notableProjects.length})`}
      </Button>
    </div>
  );
}
