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

export default function ItemQuotesIn({ contracts, setTabNbr, invites }) {
  const noQuotes = !contracts || contracts.length === 0;
  const someQuotes = contracts.length < invites.length;
  const allQuotes = contracts.length === invites.length;
  const classes = useStyles();
  return (
    <RowCheckList j="space-between" active={true}>
      <Column a="space-between">
        <Row j="flex-start" w={220}>
          <Typography
            className={clsx({
              [classes.tag]: true,
              [classes.dull]: true,
              [classes.red]: contracts.length === 0,
            })}
          >
            Quotes:{' '}
            <b>
              {noQuotes
                ? 'None Submitted'
                : allQuotes
                ? 'All Submitted'
                : someQuotes && 'Some Submitted'}
            </b>
          </Typography>
        </Row>
      </Column>
      <MenuButtonShortcut
        text={{
          name: '',
          color: '',
          border: '',
          icon: 'chevron_right',
          count: 0,
          back: '',
        }}
        onClickEvent={() => setTabNbr(2)}
        active={false}
      />
    </RowCheckList>
  );
}
