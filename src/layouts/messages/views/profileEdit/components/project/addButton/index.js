import React from 'react';
import Button from '@material-ui/core/Button';

export function AddProject({ setNotableProjects, projects, setShowAdd }) {
  return (
    <div style={{ width: '100%' }}>
      <Button
        onClick={() => {
          const newObj = { summary: '', id: 'new', image: '', name: '' };
          const copyArr = Object.assign([], projects);
          copyArr.push(newObj);
          setNotableProjects(copyArr);
          setShowAdd(false);
        }}
        color="primary"
        style={{ textTransform: 'none' }}
      >
        {`+ Add a Project (${5 - projects.length})`}
      </Button>
    </div>
  );
}
