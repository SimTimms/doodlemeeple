import React from 'react';
import { Card } from '@material-ui/core';
import { useStyles } from '../../styles';
import { FieldBox, Column } from '../../../../../imports/sharedComponents';

export default function PageZero({ setJob, job, mutation }) {
  const classes = useStyles();

  return (
    <Column>
      <Card className={classes.card}>
        <Column a="center" j="center">
          <div
            style={{
              width: '100%',
              padding: 10,
              paddingBottom: 0,
              boxSizing: 'border-box',
            }}
          >
            <FieldBox
              title="Project Title"
              value={job.name}
              maxLength={86}
              placeholder="24 full colour images..."
              onChangeEvent={(e) => {
                setJob({
                  ...job,
                  name: e,
                });
              }}
              replaceMode="loose"
              info="Give the job a title that describes the work."
              warning="Example: 24 full colour fantasy images for cards"
              size="s"
              multiline={false}
            />
          </div>
        </Column>
      </Card>
    </Column>
  );
}
