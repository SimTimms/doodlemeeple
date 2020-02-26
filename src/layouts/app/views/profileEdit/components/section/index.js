import React from 'react';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import TextField from '@material-ui/core/TextField';
import { useStyles } from './styles';

export function Section({ index, sections, setSections, section }) {
  const classes = useStyles();
  const [summary, setSummary] = React.useState(section.summary);
  return (
    <div>
      <Divider />
      <div className={classes.sectionWrapper}>
        <TextField
          id={'summary'}
          label={'Summary'}
          value={summary}
          margin="normal"
          variant="outlined"
          style={{ width: '100%' }}
          onChange={ev => {
            setSummary(ev.target.value);
          }}
        />

        <Button
          color="secondary"
          onClick={() => {
            let newSections = Object.assign([], sections);
            newSections.splice(index, 1);
            setSections(newSections);
          }}
        >
          Remove
        </Button>
      </div>
    </div>
  );
}
