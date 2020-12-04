import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import { Column, RowCheckList, Row } from '../../../../../../../../components';
import clsx from 'clsx';

export default function ItemResponse({ contract, setTabNbr }) {
  const classes = useStyles();
  return (
    <RowCheckList j="space-between" active={true}>
      <Column a="space-between">
        <Row j="space-start" w={270}>
          <Typography style={{ marginRight: 10, width: 80 }}>
            Creator:
          </Typography>
          <Typography
            className={clsx({
              [classes.tag]: true,
              [classes.red]: true,
            })}
          >
            <b>
              {contract && contract.status === 'submitted'
                ? 'Waiting for Response'
                : '-'}
            </b>
          </Typography>
        </Row>
      </Column>
    </RowCheckList>
  );
}
