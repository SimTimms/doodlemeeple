import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import {
  MenuButtonStandard,
  Column,
  Row,
  CardComponent,
} from '../../../components';
import { MenuContext } from '../../../context';
import clsx from 'clsx';

export default function QuoteInCard({ contract }) {
  const classes = useStyles();
  const unseenJobOwner = contract.seenByJobOwner === false;

  if (!contract.user)
    return (
      <CardComponent type="dark">
        <Typography>This User No Longer Exists</Typography>
      </CardComponent>
    );
  return (
    <CardComponent p={10}>
      <Column>
        <Row j="space-between" a="center">
          <Row a="center" j="flex-start">
            <div
              style={{
                backgroundImage: `url(${contract.user.profileImg})`,
              }}
              className={clsx({
                [classes.profileThumb]: true,
                [classes.unseen]: unseenJobOwner,
              })}
            ></div>
            <Column a="flex-start">
              <Typography style={{ fontSize: 12, cursor: 'pointer' }}>
                {`Quote from ${contract.user.name}`}
              </Typography>
              <Typography
                style={{ fontSize: 12 }}
                className={clsx({
                  [classes.dull]: true,
                  [classes.red]: unseenJobOwner,
                })}
              >
                {contract.status === '' ? 'Draft' : contract.status}
              </Typography>
            </Column>
          </Row>

          <MenuContext.Consumer>
            {(menu) => (
              <MenuButtonStandard
                title="View"
                onClickEvent={() => {
                  menu.updateMenuContext({
                    ...menu,
                    jobPage: {
                      ...menu.jobPage,
                      secondaryPage: 'view_quote',
                      contractId: contract._id,
                    },
                  });
                }}
              />
            )}
          </MenuContext.Consumer>
        </Row>
      </Column>
    </CardComponent>
  );
}
