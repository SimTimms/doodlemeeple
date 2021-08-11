import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import {
  Column,
  Row,
  LeftMenuWrapper,
  MenuButtonShortcut,
  MenuButtonSecondary,
} from '../';

export default function TabPage({
  title,
  activePrimary,
  activeSecondary,
  menu,
  children,
  ...props
}) {
  const classes = useStyles();
  const primaryMenu = props.primaryMenu;
  const secondaryMenu = props.secondaryMenu;
  return (
    <Column>
      {primaryMenu && (
        <LeftMenuWrapper>
          {primaryMenu.map((menuItem) => {
            return (
              <MenuButtonShortcut
                text={{
                  name: menuItem.name,
                  color: 'light',
                  icon: menuItem.icon,
                  count: 0,
                }}
                onClickEvent={menuItem.link}
                active={activePrimary === menuItem.machineName ? true : false}
                column={true}
                disabled={menuItem.disabled}
              />
            );
          })}
        </LeftMenuWrapper>
      )}
      {title && <Typography className={classes.tabTitle}>{title}</Typography>}
      <Column a="flex-start">
        {secondaryMenu && (
          <div className={classes.secondaryMenuWrapper}>
            {secondaryMenu.map((menuItem) => {
              return (
                <MenuButtonSecondary
                  title={menuItem.name}
                  icon={menuItem.icon}
                  onClickEvent={menuItem.link}
                  active={
                    activeSecondary === menuItem.machineName ? true : false
                  }
                  disabled={menuItem.disabled}
                />
              );
            })}
          </div>
        )}

        <div className={classes.tabPageContent}>
          {menu && <Row mt={10}>{menu}</Row>}
          {children}
        </div>
      </Column>
    </Column>
  );
}
