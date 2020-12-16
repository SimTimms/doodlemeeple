import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { useStyles } from './styles';
import {
  Uploader,
  IconButton,
  Row,
  Column,
  FieldBox,
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
  setDisabled,
}) {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');
  return project._id === 'new' ? (
    <Mutation
      mutation={CREATE_PROJECT}
      variables={{
        summary: project.summary,
        name: project.name,
        image: project.image,
        sectionId: sectionId,
      }}
      onCompleted={(data) => {
        toaster('Autosave');

        const copyArr = Object.assign([], projects);
        if (project._id === 'new') {
          const indexProject = copyArr
            .map((project, index) => project._id === 'new' && index)
            .filter((project) => project !== false)[0];
          copyArr[indexProject ? indexProject : 0]._id =
            data.notableProjectCreateOne.recordId;
        }

        setNotableProjects(copyArr);
      }}
    >
      {(mutation) => {
        return (
          <div
            style={{
              width: '100%',
              background: '#fff',
              padding: 5,
              boxSizing: 'border-box',
            }}
          >
            <Column a="center" j="center">
              <FieldBox
                value={project.name}
                title="Project Name"
                maxLength={86}
                onChangeEvent={(e) => {
                  const copyArr = Object.assign([], projects);
                  copyArr[index].name = e;
                  setNotableProjects(copyArr);
                }}
                replaceMode="none"
                placeholder="Example: Settlers of Catan"
                info="What is the game/project called?"
                warning=""
                size="s"
                multiline={false}
              />
              <IconButton
                title="Create"
                onClickEvent={mutation}
                icon="check"
                iconPos="right"
                disabled={project.name.length < 1}
                color="primary"
                type="button"
                styleOverride={{
                  width: 200,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
            </Column>
          </div>
        );
      }}
    </Mutation>
  ) : (
    <Mutation
      mutation={UPDATE_PROJECT}
      variables={{
        summary: project.summary,
        name: project.name,
        image: project.image,
        projectId: project._id,
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
            style={{
              width: '100%',
              background: '#fff',
              padding: 5,
              boxSizing: 'border-box',
              marginBottom: 5,
              marginTop: 5,
            }}
          >
            <Row a="" j="">
              <Column a="center" j="center">
                <FieldBox
                  value={project.name}
                  title="Title"
                  maxLength={86}
                  onChangeEvent={(e) => {
                    const copyArr = Object.assign([], projects);
                    copyArr[index].name = e;
                    setNotableProjects(copyArr);
                  }}
                  replaceMode="none"
                  placeholder="Example: Settlers of Catan"
                  info="What is the game/project called?"
                  warning=""
                  size="s"
                  multiline={false}
                />
                <FieldBox
                  value={project.summary}
                  title="Description"
                  maxLength={126}
                  onChangeEvent={(e) => {
                    autosave(mutation, 'project');
                    const copyArr = Object.assign([], projects);
                    copyArr[index].summary = e;
                    setNotableProjects(copyArr);
                  }}
                  replaceMode="none"
                  placeholder="Example: Created box art and rules cover."
                  info="What was your role/achievement on this Project?"
                  warning=""
                  size="s"
                  multiline={true}
                />
              </Column>
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
                    autosave(mutation, 'project');
                    setNotableProjects(copyArr);
                  }}
                  styleOverride={null}
                  cbDelete={() => {
                    const copyArr = Object.assign([], projects);
                    copyArr[index].image = '';
                    autosave(mutation, 'project');
                    setNotableProjects(copyArr);
                  }}
                  hasFile={project.image !== '' || project.image ? true : false}
                  className={null}
                  size="2MB PNG JPG"
                />
              </div>
              <DeleteButtonProject
                onClickEvent={() => {
                  let copyArr = Object.assign([], projects);
                  copyArr.splice(index, 1);
                  setDisabled(true);
                  setNotableProjects(copyArr);
                }}
                projectId={project._id}
              />
            </Row>
          </div>
        );
      }}
    </Mutation>
  );
}
