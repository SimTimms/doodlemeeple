import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import {
  DividerWithBorder,
  Column,
  Row,
  TopMenuWrapper,
  MenuButtonShortcut,
} from '../';

export default function TabPage({ title, menu, children, ...props }) {
  const classes = useStyles();
  const topMenu = props.topMenu;
  return (
    <Column>
      {topMenu && (
        <TopMenuWrapper j="center">
          {topMenu.map((menuItem) => {
            return (
              <MenuButtonShortcut
                text={{
                  name: menuItem.name,
                  color: 'light',
                  icon: menuItem.icon,
                  count: 0,
                }}
                onClickEvent={menuItem.link}
                active={false}
                column={true}
              />
            );
          })}
        </TopMenuWrapper>
      )}
      <Typography className={classes.tabTitle}>{title}</Typography>
      <Row mt={10}>{menu}</Row>
      <DividerWithBorder />
      {children}
    </Column>
  );
}
