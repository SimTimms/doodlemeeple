import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import {
  Row,
  Column,
  DividerMini,
  Divider,
  MenuButtonCircle,
} from '../../../../components';

import { HistoryContext } from '../../../../context';

export default function SubTitle({ title, menuStr, primaryButton }) {
  const classes = useStyles();

  return (
    <HistoryContext.Consumer>
      {(history) => (
        <Column w="100%">
          <Divider />
          <Row j="space-between" a="center" w="100%">
            <Row
              j="space-between"
              a="center"
              w={300}
              className={classes.subTitle}
            >
              <Typography className={classes.subTitleText}>{title}</Typography>
              {primaryButton && (
                <MenuButtonCircle
                  icon={primaryButton.icon}
                  onClickEvent={primaryButton.onClickEvent}
                />
              )}
            </Row>
            <Typography className={classes.menuStr}>{menuStr}</Typography>
          </Row>
          <DividerMini />
        </Column>
      )}
    </HistoryContext.Consumer>
  );
}
