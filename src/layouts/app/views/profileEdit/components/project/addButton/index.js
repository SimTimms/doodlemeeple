import React from 'react';
import { IconButton } from '../../../../../../../components';

export function AddProject({
  setNotableProjects,
  projects,
  setDisabled,
  disabled,
}) {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <IconButton
        title={`Add a Project (${5 - projects.length})`}
        icon="add"
        styleOverride={{ marginBottom: 20 }}
        color="text-dark"
        disabled={disabled}
        onClickEvent={() => {
          setDisabled(true);
          const newObj = { summary: '', _id: 'new', image: '', name: '' };
          const copyArr = Object.assign([], projects);
          copyArr.push(newObj);
          setNotableProjects(copyArr);
        }}
        iconPos="right"
        type="button"
      />
    </div>
  );
}
