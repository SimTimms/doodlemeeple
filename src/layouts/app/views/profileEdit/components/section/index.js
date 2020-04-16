import React, { useEffect } from 'react';
import { Divider, TextField } from '@material-ui/core';
import { SaveButton } from './saveButton';
import { DeleteButton } from './deleteButton';
import { useStyles } from './styles';
import { UPDATE_SECTION_MUTATION } from '../../../../../../data/mutations';
import 'react-toastify/dist/ReactToastify.css';

export function Section({ index, sections, setSections, section }) {
  const classes = useStyles();
  const [title, setTitle] = React.useState('loading...');
  const [summary, setSummary] = React.useState(section.summary);
  const [changed, setChanged] = React.useState(false);
  let sectionValues = { summary, title };

  useEffect(() => {
    setTitle(section.title);
    setSummary(section.summary);
  }, [section]);

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
          onChange={(ev) => {
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
          onChange={(ev) => {
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
          onChange={(ev) => {
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
