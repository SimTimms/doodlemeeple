import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import { Column, RowCheckList, Row, MenuButtonShortcut } from '../';
import clsx from 'clsx';

export default function CheckListItem({
  color,
  label,
  status,
  icon,
  ...props
}) {
  const classes = useStyles();
  const { onClickEvent } = props;
  return (
    <RowCheckList j="space-between" active={true}>
      <Column a="space-between">
        <Row j="flex-start" w={220}>
          <Typography
            className={clsx({
              [classes.tag]: true,
              [classes.dull]: true,
              [classes.red]: color === 'warning',
              [classes.green]: color === 'green',
            })}
          >
            {label} <b>{status}</b>
          </Typography>
        </Row>
      </Column>
      <MenuButtonShortcut
        text={{
          name: '',
          color: '',
          border: color,
          icon: icon,
          count: 0,
          back: '',
        }}
        onClickEvent={() => onClickEvent && onClickEvent()}
        active={false}
      />
    </RowCheckList>
  );
}
