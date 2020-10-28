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

export default function ItemQuoteAcceptedCreative({
  setTabNbr,
  color,
  activeContract,
}) {
  const classes = useStyles();

  return (
    <RowCheckList j="space-between" active={true}>
      <Column a="space-between">
        <Row j="flex-start" w={220}>
          <Typography
            className={clsx({
              [classes.tag]: true,
              [classes.dull]: true,
            })}
          >
            Client Response:
            <b>
              {color === 3 ? 'Waiting' : activeContract ? 'Accepted' : 'No'}
            </b>
          </Typography>
        </Row>
      </Column>
      <MenuButtonShortcut
        text={{
          name: '',
          color: '',
          icon:
            color === 3
              ? 'query_builder'
              : color === 1
              ? 'check'
              : color === 2
              ? 'star'
              : '',
          count: 0,
          back: color === 1 ? 'secondary' : color === 2 ? 'warning' : '',
        }}
        onClickEvent={() => null}
        active={false}
      />
    </RowCheckList>
  );
}
