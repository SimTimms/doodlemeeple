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
        <Row j="flex-start" w={170}>
          <Typography style={{ marginRight: 10, width: 80 }}>
            Quotes In:
          </Typography>
          <Typography
            className={clsx({
              [classes.dull]: true,
              [classes.green]: contracts.length === invites.length,
              [classes.red]:
                contracts.length > 0 && contracts.length < invites.length,
            })}
          >
            <b>
              {!contracts
                ? 'None'
                : contracts.length === invites.length
                ? 'All'
                : contracts.length > 0 &&
                  contracts.length < invites.length &&
                  'Some'}
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
