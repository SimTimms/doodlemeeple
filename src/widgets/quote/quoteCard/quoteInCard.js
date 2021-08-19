import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Row, Column, MenuButtonStandard } from '../../../components';
import { nameShortener } from '../../../utils';
import { MenuContext } from '../../../context';

export default function QuoteInCard({ contract }) {
  const classes = useStyles();
  return (
    <div
      className={clsx({
        [classes.creativeCard]: true,
      })}
    >
      <Column j="space-between" h="100%">
        <Row j="space-between">
          <Column a="flex-start">
            <Typography className={classes.title} component="h1">
              {contract.cost} {contract.currency}
            </Typography>
            <a
              href={`${process.env.REACT_APP_URL}/public-preview/${contract.user._id}`}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.meta}
            >
              <Typography className={classes.meta} component="h1">
                {nameShortener(contract.user.name, 60)}
              </Typography>
            </a>
          </Column>
          <MenuContext.Consumer>
            {(menu) => (
              <MenuButtonStandard
                title="View"
                onClickEvent={() => {
                  menu.updateMenuContext({
                    ...menu.jobPage,
                    secondaryPage: 'view_quote',
                    contractId: contract._id,
                  });
                }}
              />
            )}
          </MenuContext.Consumer>
        </Row>
      </Column>
    </div>
  );
}
