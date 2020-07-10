import React, { useEffect } from 'react';
import { Divider, TextField } from '@material-ui/core';
import { DeleteButton } from './deleteButton';
import { useStyles } from './styles';

import 'react-toastify/dist/ReactToastify.css';

export function Section({ index, sections, setSections, section }) {
  const classes = useStyles();
  const [title, setTitle] = React.useState('loading...');
  const [summary, setSummary] = React.useState(section.summary);

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
            setSummary(ev.target.value.substring(0, 46));
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
            setSummary(ev.target.value.substring(0, 46));
          }}
        />
        <div className={classes.actionWrapper}>
          {`${section._id} asdas`}
          <DeleteButton
            sectionId={section._id}
            sections={sections}
            index={index}
            setSections={setSections}
            deleteAction={null}
          />
          {/*
          <SaveButton
            sectionId={section.id}
            sectionValues={sectionValues}
            disabledValue={changed}
            mutation={UPDATE_SECTION_MUTATION}
          />*/}
        </div>
      </div>
    </div>
  );
}
