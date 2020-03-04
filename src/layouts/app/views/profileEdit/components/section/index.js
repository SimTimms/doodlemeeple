import React from 'react';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { SaveButton } from './saveButton';
import { DeleteButton } from './deleteButton';
import { DeleteNotableProjectButton } from './deleteNotableProjectButton';
import { useStyles } from './styles';
import { MediaGalleryObject } from '../mediaGalleryOject';
import {
  UPDATE_SECTION_MUTATION,
  UPDATE_GALLERY_SECTION_MUTATION,
} from '../../../../../../data/mutations';

export function Section({ index, sections, setSections, section }) {
  const classes = useStyles();
  const [title, setTitle] = React.useState(section.title);
  const [summary, setSummary] = React.useState(section.summary);
  const [changed, setChanged] = React.useState(false);

  let sectionValues = { summary, title };
  return (
    <div>
      <Divider />

      <div className={classes.sectionWrapper}>
        <TextField
          id={'title'}
          label={`Title ${title ? `(${46 - title.length})` : ''}`}
          inputProps={{ maxLength: 46 }}
          value={title}
          margin="normal"
          variant="outlined"
          style={{ width: '100%' }}
          onChange={ev => {
            setChanged(true);
            setTitle(ev.target.value);
          }}
        />
        <TextField
          id={'summary'}
          label={`Summary ${summary ? `(${46 - summary.length})` : ''}`}
          inputProps={{ maxLength: 46 }}
          value={summary}
          margin="normal"
          variant="outlined"
          style={{ width: '100%' }}
          onChange={ev => {
            setChanged(true);
            setSummary(ev.target.value);
          }}
        />
        <TextField
          id={'summary'}
          label={`Summary ${summary ? `(${46 - summary.length})` : ''}`}
          inputProps={{ maxLength: 46 }}
          value={summary}
          margin="normal"
          variant="outlined"
          style={{ width: '100%' }}
          onChange={ev => {
            setChanged(true);
            setSummary(ev.target.value);
          }}
        />
        <div className={classes.actionWrapper}>
          <DeleteButton
            sectionId={section.id}
            sections={sections}
            index={index}
            setSections={setSections}
          />
          <SaveButton
            sectionId={section.id}
            sectionValues={sectionValues}
            disabledValue={changed}
            setDisabledValue={setChanged}
            mutation={UPDATE_SECTION_MUTATION}
          />
        </div>
      </div>
    </div>
  );
}

export function GallerySection({ index, sections, setSections, section }) {
  const classes = useStyles();
  const [title, setTitle] = React.useState(section.title);
  const [summary, setSummary] = React.useState(section.summary);
  const [images, setImages] = React.useState(section.gallery.images);
  const [notableProjects, setNotableProjects] = React.useState(
    section.notableProjects,
  );
  const [testimonials, setTestimonials] = React.useState([
    { name: 'test', summary: 'test' },
  ]);
  const [changed, setChanged] = React.useState(false);

  const imageFilter = images.map(item => {
    return {
      img: item.img,
    };
  });
  let sectionValues = {
    summary,
    title,
    gallery: { images: imageFilter },
    notableProjects,
    testimonials,
  };

  const notableProjectsLength = notableProjects ? notableProjects.length : 0;

  return (
    <div>
      <Divider />
      <div className={classes.sectionWrapper}>
        <div className={classes.sectionHeader}>
          <Icon style={{ fontSize: 42, marginRight: 10 }}>edit</Icon>
          <div>
            <Typography variant="h1" color="textPrimary">
              Artist
            </Typography>
            <Typography variant="h6" color="textPrimary">
              Fantasy, Sci-Fi, Character Design...
            </Typography>
          </div>
        </div>
        <TextField
          id={'title'}
          value={title}
          label={`Title ${title ? `(${46 - title.length})` : ''}`}
          inputProps={{ maxLength: 46 }}
          multiline
          margin="normal"
          variant="outlined"
          style={{ width: '300px' }}
          onChange={ev => {
            setChanged(true);
            setTitle(ev.target.value);
          }}
        />
        <TextField
          id={'summary'}
          label={`Description ${summary ? `(${256 - summary.length})` : ''}`}
          inputProps={{ maxLength: 256 }}
          multiline
          value={summary}
          margin="normal"
          variant="outlined"
          style={{ width: '100%' }}
          onChange={ev => {
            setChanged(true);
            setSummary(ev.target.value);
          }}
        />
        <Typography variant="h6" color="textPrimary" style={{ marginTop: 20 }}>
          Notable Projects
        </Typography>
        {notableProjects &&
          notableProjects.map((notableProject, index) => {
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
                    const newNotableProjects = Object.assign(
                      [],
                      notableProjects,
                    );
                    newNotableProjects[index].summary = ev.target.value;

                    setNotableProjects(newNotableProjects);
                  }}
                />
                <DeleteNotableProjectButton
                  notableProjectId={notableProject.id}
                  notableProjects={notableProjects}
                  index={index}
                  setNotableProjects={setNotableProjects}
                />
              </div>
            );
          })}
        {notableProjectsLength < 5 && (
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
        )}
        <MediaGalleryObject
          images={images}
          setImages={newImages => {
            setChanged(true);
            setImages(newImages);
          }}
          index={index}
        />
        <div className={classes.actionWrapper}>
          <DeleteButton
            sectionId={section.id}
            sections={sections}
            index={index}
            setSections={setSections}
          />
          <SaveButton
            sectionId={section.id}
            sectionValues={sectionValues}
            disabledValue={changed}
            setDisabledValue={setChanged}
            mutation={UPDATE_GALLERY_SECTION_MUTATION}
          />
        </div>
      </div>
    </div>
  );
}