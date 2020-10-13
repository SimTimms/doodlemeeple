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

export default function ItemCreativePaid({
  totalPaid,
  cost,
  currency,
  setTabNbr,
  color,
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
            Creative Paid:{' '}
            <b>
              {`${totalPaid} / ${cost} 
              ${currency}`}
            </b>
          </Typography>
        </Row>
      </Column>
      <MenuButtonShortcut
        text={{
          name: '',
          color: '',
          icon: color === 1 ? 'check' : color === 2 ? 'star' : '',
          count: 0,
          back: color === 1 ? 'secondary' : color === 2 ? 'warning' : '',
        }}
        onClickEvent={() => setTabNbr(4)}
        active={false}
      />
    </RowCheckList>
  );
}
