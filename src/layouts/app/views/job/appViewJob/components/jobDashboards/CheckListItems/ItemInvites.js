import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import {
  Column,
  RowCheckList,
  Row,
  MenuButtonShortcut,
} from '../../../../../../../../components';
import clsx from 'clsx';

export default function ItemInvites({ setTabNbr }) {
  const classes = useStyles();
  return (
    <RowCheckList j="space-between" active={true}>
      <Column a="space-between">
        <Row j="flex-start" w={170}>
          <Typography style={{ marginRight: 10, width: 80 }}>
            Invites Sent:
          </Typography>
          <Typography
            className={clsx({
              [classes.green]: true,
            })}
          >
            <b>Done</b>
          </Typography>
        </Row>
      </Column>
    </RowCheckList>
  );
}
