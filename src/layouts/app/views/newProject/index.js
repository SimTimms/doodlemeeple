import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { useStyles } from './styles';
import { ProjectComponent, ProjectHeader, GalleryHeader } from './components';
import { Link } from 'react-router-dom';
import ActionButton from '../../../../components/buttons';
import { MediaGallery } from '../../../../components/mediaGallery';
import { FileGallery } from '../../../../components/fileGallery';
import { InvitesWidget } from '../../../../components/invites';
import { TagsWidget } from '../../../../components/tags';
import tim from '../../../../assets/tim.jpg';

export function NewProject({ gamesTemp, setGamesTestData, projectId }) {
  let project = gamesTemp.filter(project => project.id === projectId)[0];
  if (!project) project = { projectName: '', invites: [] };
  const classes = useStyles();

  const [title, setTitle] = React.useState(project.projectName);
  const [primaryImage, setPrimaryImage] = React.useState(project.primaryImage);
  const [summary, setSummary] = React.useState(project.projectSummary);
  const [invites, setInvite] = React.useState(project.invites);
  const [tags, setTags] = React.useState(project.tags);
  const [about, setAbout] = React.useState(project.about);
  const [sketches, setSketches] = React.useState(project.projectSketches);
  const [files, setFiles] = React.useState(project.projectFiles);
  const [budget, setBudget] = React.useState(project.budget);
  const [deadline, setDeadline] = React.useState(project.deadline);

  const user = {
    profileImg: tim,
    name: 'Tim Simms',
  };
  const newId = 'ID128';
  return (
    <Slide
      direction="left"
      in={true}
      mountOnEnter
      unmountOnExit
      style={{ width: 700 }}
    >
      <Card className={classes.card}>
        <ProjectHeader
          profile={user}
          primaryImage={primaryImage}
          setPrimaryImage={setPrimaryImage}
        />
        <CardContent>
          <ProjectComponent
            fieldValue={title}
            setFieldValue={setTitle}
            title="Project Name"
            width={200}
          />
          <ProjectComponent
            fieldValue={summary}
            setFieldValue={setSummary}
            title="Description"
            width={'100%'}
          />
        </CardContent>

        <Divider />
        <CardContent>
          <GalleryHeader title="Invites" />
          <InvitesWidget invites={invites} setInvite={setInvite} edit={true} />
        </CardContent>
        <Divider />
        {tags ? (
          <div>
            <Divider />
            <CardContent>
              <GalleryHeader title="Tags" />
              <TagsWidget tags={tags} setTags={setTags} edit={true} />
            </CardContent>
          </div>
        ) : null}
        {about ? (
          <div>
            <Divider />
            <CardContent>
              <GalleryHeader title="About" />
              <ProjectComponent
                fieldValue={about}
                setFieldValue={setAbout}
                title="About"
                width={'100%'}
              />
            </CardContent>
          </div>
        ) : null}
        {sketches ? (
          <div>
            <Divider />
            <CardContent>
              <GalleryHeader title="Gallery" />
              <MediaGallery
                items={sketches}
                sketches={sketches}
                setSketches={setSketches}
                edit={true}
              />
            </CardContent>
          </div>
        ) : null}
        {files ? (
          <div>
            <Divider />
            <CardContent>
              <GalleryHeader title="Files" />
              <FileGallery
                items={files}
                setFiles={setFiles}
                files={files}
                edit={true}
              />
            </CardContent>
          </div>
        ) : null}
        {budget ? (
          <div>
            <Divider />
            <CardContent>
              <GalleryHeader title="Budget" />
              <ProjectComponent
                fieldValue={budget}
                setFieldValue={setBudget}
                title="Budget"
                width={'100%'}
              />
            </CardContent>
          </div>
        ) : null}
        {deadline ? (
          <div>
            <Divider />
            <CardContent>
              <GalleryHeader title="Deadline" />
              <ProjectComponent
                fieldValue={deadline}
                setFieldValue={setDeadline}
                title="Deadline"
                width={'100%'}
              />
            </CardContent>
          </div>
        ) : null}
        <Divider />
        <CardContent
          style={{
            background: '#ddd',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={() => {
            if (!tags) {
              setTags([]);
            } else if (!about) {
              setAbout(' ');
            } else if (!sketches) {
              setSketches([]);
            } else if (!files) {
              setFiles([]);
            } else if (!budget) {
              setBudget(' ');
            } else if (!deadline) {
              setDeadline(' ');
            }
          }}
        >
          <Icon style={{ fontSize: 50, color: '#fff' }}>add_circle</Icon>
          <Typography
            color="textSecondary"
            component="p"
            style={{ fontSize: 24, color: '#fff', marginLeft: 10 }}
          >
            Add Section
          </Typography>
        </CardContent>
        <Divider style={{ margin: '10px 0 0 0' }} />
        <CardContent
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Link to="/app/projects">
            <ActionButton name="Cancel" />
          </Link>

          <Link
            to={`/roles/dashboard/${newId}`}
            onClick={() => {
              const newArr = [
                ...gamesTemp,
                {
                  id: newId,
                  primaryImage,
                  projectName: title,
                  projectSummary: summary,
                  projectFiles: files,
                  invites: invites,
                  tags: tags,
                  projectSketches: sketches,
                  user: {
                    profileImg: tim,
                    name: 'Tim Simms',
                  },
                },
              ];
              setGamesTestData(newArr);
            }}
          >
            <ActionButton name="Roles" />
          </Link>
        </CardContent>
      </Card>
    </Slide>
  );
}
