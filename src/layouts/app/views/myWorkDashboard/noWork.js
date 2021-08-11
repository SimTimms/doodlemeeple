import React from 'react';
import { Typography } from '@material-ui/core';
import { Column, CardComponent } from '../../../../components';
import { useStyles } from './styles';
import { HistoryContext } from '../../../../context';

export default function NoWork() {
  const classes = useStyles();

  return (
    <HistoryContext>
      {(history) => {
        return (
          <Column>
            <CardComponent p={10} styleOverride={{ width: 400, marginTop: 10 }}>
              <Column>
                <Typography
                  variant="h6"
                  component="h6"
                  className={classes.notice}
                >
                  No Work
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  className={classes.notice}
                >
                  Your quotes and active jobs will appear here.
                </Typography>
              </Column>
            </CardComponent>
          </Column>
        );
      }}
    </HistoryContext>
  );
}
