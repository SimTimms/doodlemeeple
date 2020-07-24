import React from 'react';
import Button from '@material-ui/core/Button';
import { IconButton } from '../../../../../../../components';

export function AddProject({ setNotableProjects, projects, setShowAdd }) {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <IconButton
        title={`Add a Project (${5 - projects.length})`}
        icon="add"
        styleOverride={{ marginBottom: 20 }}
        color="primary"
        disabled={false}
        onClickEvent={() => {
          const newObj = { summary: '', _id: 'new', image: '', name: '' };
          const copyArr = Object.assign([], projects);
          copyArr.push(newObj);
          setNotableProjects(copyArr);
          setShowAdd(false);
        }}
        iconPos="right"
        type="button"
      />
    </div>
  );
}
