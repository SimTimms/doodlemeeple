import React from 'react';
import { useStyles } from './styles';
import { useMediaQuery } from '@material-ui/core';
import clsx from 'clsx';
import { AppMenu } from '../menus';
import { AppDrawer } from '../menus/appDrawer';
import { Jobs } from './views/job';
import { ToastContainer } from 'react-toastify';

import { ContentTop, StyledNavBar } from '../../components';

function MessagesLayout(props) {
  const [page, setPage] = React.useState('home');
  const pageJump = props.match ? props.match.params.page : null;
  const mobile = useMediaQuery('(max-width:800px)');

  //TODO: I guess this is proper dirty
  const pathParam = props
    ? props.match
      ? props.match.params.pathParam
        ? props.match.params.pathParam
        : null
      : null
    : null;

  if (pageJump !== page) {
    setPage(pageJump);
  }

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <ToastContainer />
      <StyledNavBar
        open={open}
        menu={
          <AppMenu
            handleDrawerOpen={handleDrawerOpen}
            open={open}
            history={props.history}
          />
        }
      ></StyledNavBar>
      <AppDrawer
        handleDrawerClose={handleDrawerClose}
        open={open}
        history={props.history}
      />
      <main
        className={clsx({
          [classes.content]: true,
          [classes.contentMobile]: !open && mobile,
          [classes.contentShift]: open,
        })}
      >
        <ContentTop style={{ width: '100%' }}>
          {page === 'conversations' && <Jobs history={props.history} />}
        </ContentTop>
      </main>
    </div>
  );
}

export default MessagesLayout;
