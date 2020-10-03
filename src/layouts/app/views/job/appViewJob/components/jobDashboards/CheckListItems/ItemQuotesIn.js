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
  const classes = useStyles();
  return (
    <RowCheckList j="space-between" active={true}>
      <Column a="space-between">
        <Row j="flex-start" w={220}>
          <Typography style={{ marginRight: 10, width: 80 }}>
            Quotes:
          </Typography>
          <Typography
            className={clsx({
              [classes.dull]: true,
              [classes.green]: contracts.length === invites.length,
              [classes.green]:
                contracts.length > 0 && contracts.length < invites.length,
            })}
          >
            <b>
              {!contracts
                ? 'None Submitted'
                : contracts.length === invites.length
                ? 'All Submitted'
                : contracts.length > 0 &&
                  contracts.length < invites.length &&
                  'Some Submitted'}
            </b>
          </Typography>
        </Row>
      </Column>
      <MenuButtonShortcut
        text={{
          name: '',
          color: '',
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
