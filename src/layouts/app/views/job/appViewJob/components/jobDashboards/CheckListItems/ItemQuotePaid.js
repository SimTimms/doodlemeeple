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

export default function ItemQuotePaid({
  paid,
  setTabNbr,
  color,
  jobHasContract,
  isCreator,
  ...props
}) {
  const classes = useStyles();
  const { pending } = props;
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
            Funded:{' '}
            <b>{pending ? 'Pending Confirmation' : !paid ? 'No' : 'Yes'}</b>
          </Typography>
        </Row>
      </Column>
      <MenuButtonShortcut
        text={{
          name: '',
          color: '',
          icon:
            jobHasContract && (!paid || pending) && !isCreator
              ? 'query_builder'
              : color === 1
              ? 'check'
              : color === 2 ||
                (jobHasContract && (!paid || pending) && !isCreator)
              ? 'star'
              : '',
          count: 0,
          back: color === 1 ? 'secondary' : color === 2 ? 'warning' : '',
        }}
        onClickEvent={() => (jobHasContract ? setTabNbr(4) : null)}
        active={false}
      />
    </RowCheckList>
  );
}
