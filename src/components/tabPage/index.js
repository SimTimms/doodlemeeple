import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import {
  Column,
  Row,
  PrimaryMenuWrapper,
  MenuButtonShortcut,
  MenuButtonSecondary,
} from '../';
import clsx from 'clsx';
import { randomKey } from '../../utils';

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
      <PrimaryMenuWrapper>
        <Typography className={classes.mainHeader}>{title && title}</Typography>
        {primaryMenu &&
          primaryMenu.map((menuItem) => {
            return (
              <MenuButtonShortcut
                text={{
                  name: menuItem.name,
                  color: 'light',
                  icon: menuItem.icon,
                  count: menuItem.count,
                }}
                onClickEvent={menuItem.link}
                active={activePrimary === menuItem.machineName ? true : false}
                column={true}
                disabled={menuItem.disabled}
                key={randomKey()}
              />
            );
          })}
      </PrimaryMenuWrapper>
      <Column a="flex-start">
        {secondaryMenu && (
          <div className={classes.secondaryMenuWrapper}>
            {secondaryMenu.map((menuItem) => {
              return (
                <MenuButtonSecondary
                  title={menuItem.name}
                  icon={menuItem.icon}
                  onClickEvent={menuItem.link}
                  count={menuItem.count}
                  active={
                    activeSecondary === menuItem.machineName ? true : false
                  }
                  disabled={menuItem.disabled}
                  key={randomKey()}
                />
              );
            })}
          </div>
        )}

        <div
          className={clsx({
            [classes.tabPageContent]: true,
            [classes.tabPageContentSingle]: !primaryMenu,
          })}
        >
          {menu && <Row mt={10}>{menu}</Row>}
          {children}
        </div>
      </Column>
    </Column>
  );
}
