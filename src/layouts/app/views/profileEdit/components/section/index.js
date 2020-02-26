import React from 'react';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { SaveButton } from './saveButton';
import { DeleteButton } from './deleteButton';
import { useStyles } from './styles';
import { MediaGalleryObject } from '../mediaGalleryOject';

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
          label={'Title'}
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
          label={'Summary'}
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
  const [images, setImages] = React.useState(section.gallery);
  const [changed, setChanged] = React.useState(false);

  let sectionValues = { summary, title, gallery: images };

  return (
    <div>
      <Divider />
      <div className={classes.sectionWrapper}>
        <TextField
          id={'title'}
          label={'Title'}
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
          label={'Summary'}
          value={summary}
          margin="normal"
          variant="outlined"
          style={{ width: '100%' }}
          onChange={ev => {
            setChanged(true);
            setSummary(ev.target.value);
          }}
        />
        <MediaGalleryObject
          images={images}
          setImages={setImages}
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
          />
        </div>
      </div>
    </div>
  );
}
