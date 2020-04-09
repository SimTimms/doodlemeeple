import React from 'react';
import Button from '@material-ui/core/Button';

export function AddProject({ setNotableProjects, projects }) {
  return (
    <div style={{ width: '100%' }}>
      <Button
        onClick={() => {
          const newObj = { summary: '', id: 'new', image: '', name: '' };
          const copyArr = Object.assign([], projects);
          copyArr.push(newObj);
          setNotableProjects(copyArr);
        }}
        color="primary"
        style={{ textTransform: 'none' }}
      >
        {`+ Add a Project (${5 - projects.length})`}
      </Button>
    </div>
  );
}
