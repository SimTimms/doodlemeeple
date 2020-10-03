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

export default function ItemQuote({ contract, setTabNbr }) {
  const classes = useStyles();
  return (
    <RowCheckList j="space-between" active={true}>
      <Column a="space-between">
        <Row j="flex-start" w={170}>
          <Typography style={{ marginRight: 10, width: 80 }}>
            My quote:{' '}
          </Typography>
          <Typography
            className={clsx({
              [classes.dull]: true,
              [classes.primary]: !contract,
              [classes.green]: contract && contract.status === 'submitted',
            })}
          >
            <b>
              {!contract
                ? 'Create Now'
                : contract.status === null
                ? 'In Draft'
                : contract.status === 'submitted' && 'Submitted'}
            </b>
          </Typography>
        </Row>
      </Column>
      {!contract ? (
        <MenuButtonShortcut
          text={{
            name: '',
            color: '#fff',
            icon: 'chevron_right',
            count: 0,
            back: 'primary',
          }}
          onClickEvent={() => setTabNbr(6)}
          active={false}
        />
      ) : contract.status === null ? (
        <MenuButtonShortcut
          text={{
            name: '',
            color: '#fff',
            icon: 'chevron_right',
            count: 0,
            back: 'primary',
          }}
          onClickEvent={() => setTabNbr(6)}
          active={false}
        />
      ) : (
        contract.status === 'submitted' && (
          <MenuButtonShortcut
            text={{
              name: '',
              color: '',
              icon: 'chevron_right',
              count: 0,
              back: '',
            }}
            onClickEvent={() => setTabNbr(6)}
            active={false}
          />
        )
      )}
    </RowCheckList>
  );
}
