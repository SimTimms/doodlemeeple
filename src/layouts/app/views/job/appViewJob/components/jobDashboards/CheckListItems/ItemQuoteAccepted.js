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

export default function ItemQuoteAccepted({
  setTabNbr,
  color,
  contracts,
  activeContract,
}) {
  const classes = useStyles();
  const noContracts = contracts.length === 0;
  const someContracts = contracts.length > 0;

  return (
    <RowCheckList
      j="space-between"
      active={true}
      onClickEvent={() => (activeContract ? setTabNbr(3) : setTabNbr(2))}
      pointer={color === 2}
    >
      <Column a="space-between">
        <Row j="flex-start" w={220}>
          <Typography
            className={clsx({
              [classes.tag]: true,
              [classes.dull]: true,
            })}
          >
            Quotes:
            <b>
              {activeContract
                ? 'Accepted'
                : noContracts
                ? 'None Received'
                : someContracts
                ? 'Received'
                : 'No'}
            </b>
          </Typography>
        </Row>
      </Column>
      <MenuButtonShortcut
        text={{
          name: '',
          color: '',
          icon: noContracts
            ? 'query_builder'
            : color === 1
            ? 'check'
            : color === 2
            ? 'star'
            : '',
          count: 0,
          back: noContracts
            ? ''
            : color === 1
            ? 'secondary'
            : color === 2
            ? 'warning'
            : '',
        }}
        onClickEvent={() => {}}
        active={false}
      />
    </RowCheckList>
  );
}
