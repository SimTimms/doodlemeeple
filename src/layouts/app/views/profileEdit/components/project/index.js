import React from 'react';
import { TextField, useMediaQuery } from '@material-ui/core';
import { useStyles } from './styles';
import {
  Uploader,
  IconButton,
  Row,
  ActionWrapper,
} from '../../../../../../components';
import {
  UPDATE_PROJECT,
  CREATE_PROJECT,
} from '../../../../../../data/mutations';
import { Mutation } from 'react-apollo';
import clsx from 'clsx';
import autosave from '../../../../../../utils/autosave';
import { toaster } from '../../../../../../utils/toaster';
import DeleteButtonProject from './deleteButton';

export function Project({
  project,
  index,
  setNotableProjects,
  projects,
  sectionId,
  autosaveIsOn,
  setShowAdd,
}) {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');
  return project.id === 'new' ? (
    <Mutation
      mutation={CREATE_PROJECT}
      variables={{
        project: project,
        sectionId,
      }}
      onCompleted={(data) => {
        toaster('Saved');

        const copyArr = Object.assign([], projects);

        if (project.id === 'new') {
          const indexProject = copyArr
            .map((item, index) => item.id === 'new' && index)
            .filter((item) => item !== false)[0];
          copyArr[indexProject ? indexProject : 0].id = data.createProject;
        }

        setNotableProjects(copyArr);
      }}
    >
      {(mutation) => {
        return (
          <Row>
            <TextField
              id={'name'}
              label={`Project Name ${
                project.name ? `(${36 - project.name.length})` : ''
              }`}
              inputProps={{ maxLength: 36 }}
              multiline
              value={project.name}
              margin="normal"
              variant="outlined"
              style={{ width: '100%' }}
              onChange={(ev) => {
                const copyArr = Object.assign([], projects);
                copyArr[index].name = ev.target.value.substring(0, 36);
                setNotableProjects(copyArr);
              }}
            />
            <IconButton
              title="Create"
              onClickEvent={mutation}
              styleOverride={{ marginTop: 16 }}
              icon="chevron_right"
              iconPos="right"
              disabled={false}
              color="primary"
              type="button"
            />
          </Row>
        );
      }}
    </Mutation>
  ) : (
    <Mutation
      mutation={UPDATE_PROJECT}
      variables={{
        project: project,
        sectionId,
      }}
      onCompleted={(data) => {
        toaster('Saved');

        const copyArr = Object.assign([], projects);
        setNotableProjects(copyArr);
      }}
    >
      {(mutation) => {
        return (
          <div
            className={clsx({
              [classes.inputWrapper]: true,
              [classes.inputWrapperMobile]: mobile,
            })}
          >
            <div
              style={{
                backgroundImage: project.image && `url(${project.image}) `,
              }}
              className={clsx({
                [classes.avatarWrapper]: true,
                [classes.avatarWrapperMobile]: mobile,
              })}
            >
              <Uploader
                cbImage={(url) => {
                  const copyArr = Object.assign([], projects);
                  copyArr[index].image = url;
                  autosaveIsOn && autosave(mutation, 'project');
                  setNotableProjects(copyArr);
                }}
                styleOverride={null}
                cbDelete={() => {
                  const copyArr = Object.assign([], projects);
                  copyArr[index].image = '';
                  autosaveIsOn && autosave(mutation, 'project');
                  setNotableProjects(copyArr);
                }}
                hasFile={project.image !== '' || project.image ? true : false}
                className={null}
                size="1MB PNG JPG"
              />
            </div>

            <div className={classes.actionInputWrapper}>
              <TextField
                id={'name'}
                label={`Project Name ${
                  project.name ? `(${36 - project.name.length})` : ''
                }`}
                inputProps={{ maxLength: 36 }}
                multiline
                value={project.name}
                margin="normal"
                variant="outlined"
                style={{ width: '100%' }}
                onChange={(ev) => {
                  autosaveIsOn && autosave(mutation);
                  const copyArr = Object.assign([], projects);
                  copyArr[index].name = ev.target.value.substring(0, 36);
                  setNotableProjects(copyArr);
                }}
              />
              <TextField
                id={'testimonial'}
                label={`Description ${
                  project.summary ? `(${126 - project.summary.length})` : ''
                }`}
                inputProps={{ maxLength: 126 }}
                multiline
                value={project.summary}
                margin="normal"
                variant="outlined"
                rowsMax={4}
                rows={4}
                style={{ width: '100%' }}
                onChange={(ev) => {
                  autosaveIsOn && autosave(mutation, 'project');
                  const copyArr = Object.assign([], projects);
                  copyArr[index].summary = ev.target.value.substring(0, 126);
                  setNotableProjects(copyArr);
                }}
              />
            </div>
            <DeleteButtonProject
              onClickEvent={() => {
                let copyArr = Object.assign([], projects);
                copyArr.splice(index, 1);
                setShowAdd(true);
                setNotableProjects(copyArr);
              }}
              projectId={project.id}
            />
          </div>
        );
      }}
    </Mutation>
  );
}
