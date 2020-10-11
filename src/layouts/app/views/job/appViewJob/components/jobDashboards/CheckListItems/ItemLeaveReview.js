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

export default function ItemLeaveReview({ paid, setTabNbr }) {
  const classes = useStyles();
  return (
    <RowCheckList j="space-between" active={true}>
      <Column a="space-between">
        <Row j="flex-start" w={220}>
          <Typography
            className={clsx({
              [classes.tag]: true,
              [classes.dull]: true,
              [classes.red]: paid !== 'paid',
            })}
          >
            Leave Review: <b>No</b>
          </Typography>
        </Row>
      </Column>
      <MenuButtonShortcut
        text={{
          name: '',
          color: '',
          border: paid !== 'paid' ? 'warning' : 'check',
          icon: paid !== 'paid' ? 'star' : 'check',
          count: 0,
          back: '',
        }}
        onClickEvent={() => setTabNbr(2)}
        active={false}
      />
    </RowCheckList>
  );
}
