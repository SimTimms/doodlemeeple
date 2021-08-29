import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import { Row, Column, DividerMini, Divider } from '../../../../components';

import { HistoryContext } from '../../../../context';

export default function SubTitle({ title, menuStr }) {
  const classes = useStyles();

  return (
    <HistoryContext.Consumer>
      {(history) => (
        <Column w="100%">
          <Divider />
          <Row j="space-between" a="center" w="100%">
            <Typography className={classes.subTitle}>{title}</Typography>
            <Typography className={classes.menuStr}>{menuStr}</Typography>
          </Row>
          <DividerMini />
        </Column>
      )}
    </HistoryContext.Consumer>
  );
}
