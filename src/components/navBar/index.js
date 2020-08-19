import React from 'react';
import { useMediaQuery, Toolbar, AppBar, Icon } from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from './styles';
import { MenuButton, Row } from '../';

function StyledNavBar(props) {
  const { children, open, history, theme } = props;
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');

  const helpButton = {
    name: 'Help',
    icon: <Icon>contact_support</Icon>,
    link: () => history.push('/app/help'),
    color: theme.palette.primary.main,
    count: 0,
  };
  const alphaButton = {
    name: 'Closed Beta',
    icon: <Icon>construction</Icon>,
    link: () => history.push('/app/beta'),
    color: theme.palette.error.main,
    count: 0,
  };
  const creativeRoster = {
    name: 'Creatives',
    icon: <Icon>brush</Icon>,
    link: () => history.push('/app/creative-roster'),
    color: theme.palette.secondary.main,
    count: 0,
  };
  return (
    <AppBar
      position="relative"
      className={`${clsx({
        [classes.appBar]: !mobile,
        [classes.appBarMobile]: mobile,
        [classes.appBarShift]: open,
        [classes.appBarShiftMobile]: mobile && open,
      })} ${classes.root}`}
    >
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div
          className={clsx({
            [classes.appBarChild]: !mobile,
            [classes.appBarChildMobile]: mobile,
          })}
        >
          {children}
          <div>
            <Row>
              <MenuButton text={alphaButton} onClickEvent={alphaButton.link} />
              <MenuButton
                text={creativeRoster}
                onClickEvent={creativeRoster.link}
              />
              <MenuButton text={helpButton} onClickEvent={helpButton.link} />
            </Row>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default StyledNavBar;
