import React from 'react';
import { Typography } from '@material-ui/core';
import {
  MenuButtonStandard,
  Column,
  CardComponent,
} from '../../../../components';
import { useStyles } from './styles';
import { MenuContext } from '../../../../context';

export default function NoInvite() {
  const classes = useStyles();

  return (
    <MenuContext.Consumer>
      {(menu) => {
        return (
          <Column>
            <CardComponent p={10} styleOverride={{ width: 400, marginTop: 10 }}>
              <Column>
                <Typography
                  variant="h6"
                  component="h6"
                  className={classes.notice}
                >
                  No invites
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  className={classes.notice}
                >
                  Keep your profile fresh and up-to-date for the best chance of
                  getting noticed.
                </Typography>
                <MenuButtonStandard
                  title="Profile"
                  onClickEvent={() => {
                    menu.updateMenuContext({ ...menu, primaryPage: 'account' });
                  }}
                />
              </Column>
            </CardComponent>
          </Column>
        );
      }}
    </MenuContext.Consumer>
  );
}
