import React from 'react';
import TextField from '@material-ui/core/TextField';
import { DeleteButton } from './deleteButton';
import { useStyles } from './styles';

export function NotableProject({
  notableProject,
  setChanged,
  index,
  setNotableProjects,
  notableProjects,
  autosave,
}) {
  const classes = useStyles();

  return (
    <div className={classes.actionInputWrapper}>
      <TextField
        id={'notableProjects'}
        label={`Notable Projects ${
          notableProject.summary
            ? `(${56 - notableProject.summary.length})`
            : ''
        }`}
        inputProps={{ maxLength: 56 }}
        multiline
        value={notableProject.summary}
        margin="normal"
        variant="outlined"
        style={{ width: '100%' }}
        onChange={ev => {
          setChanged(true);
          autosave && autosave();
          const newNotableProjects = Object.assign([], notableProjects);
          newNotableProjects[index].summary = ev.target.value;
          setNotableProjects(newNotableProjects);
        }}
      />
      <DeleteButton
        notableProjectId={notableProject.id}
        notableProjects={notableProjects}
        index={index}
        setNotableProjects={setNotableProjects}
      />
    </div>
  );
}
