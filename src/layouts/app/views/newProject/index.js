import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { useStyles } from './styles';
import { ProjectComponent, ProjectHeader, GalleryHeader } from './components';
import { MediaGallery } from 'src/components/mediaGallery';
import { FileGallery } from 'src/components/fileGallery';
import { InvitesWidget } from 'src/components/invites';
import { TagsWidget } from 'src/components/tags';
import tim from 'src/assets/tim.jpg';

export function NewProject() {
  const classes = useStyles();
  const [title, setTitle] = React.useState('');
  const [summary, setSummary] = React.useState('');
  const [invites, setInvite] = React.useState([]);
  const [tags, setTags] = React.useState(null);
  const [about, setAbout] = React.useState(null);
  const [sketches, setSketches] = React.useState(null);
  const [files, setFiles] = React.useState(null);
  const [budget, setBudget] = React.useState(null);
  const [deadline, setDeadline] = React.useState(null);

  const project = {
    id: 'ID126',
    primaryImage: null,
    projectName: '',
    projectSummary: '',
    projectFiles: null,
    invites: [],
    tags: null,
    projectSketches: null,
    about: null,
    user: {
      profileImg: tim,
      name: 'Tim Simms',
    },
    budget: null,
    deadline: null,
  };

  return (
    <Slide
      direction="left"
      in={true}
      mountOnEnter
      unmountOnExit
      style={{ width: 700 }}
    >
      <Card className={classes.card}>
        <ProjectHeader profile={project.user} />
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
          <Typography color="textSecondary" component="p">
            {project.projectSummary}
          </Typography>
        </CardContent>
        <Divider />
        <CardContent>
          <GalleryHeader title="Invites" />
          <InvitesWidget invites={invites} setInvite={setInvite} />
        </CardContent>
        <Divider />
        {tags ? (
          <div>
            <Divider />
            <CardContent>
              <GalleryHeader title="Tags" />
              <TagsWidget tags={tags} setTags={setTags} />
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
              />
            </CardContent>
          </div>
        ) : null}
        {files ? (
          <div>
            <Divider />
            <CardContent>
              <GalleryHeader title="Files" />
              <FileGallery items={files} setFiles={setFiles} files={files} />
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
          }}
        >
          <Icon
            style={{ fontSize: 50, color: '#fff' }}
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
            add_circle
          </Icon>
        </CardContent>
        <Divider style={{ margin: '10px 0 0 0' }} />
        <CardContent
          style={{
            background: '#ddd',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Icon style={{ fontSize: 50, color: '#fff' }}>chevron_right</Icon>
        </CardContent>
      </Card>
    </Slide>
  );
}
