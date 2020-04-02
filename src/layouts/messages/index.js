import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import { useStyles } from './styles';
import { ContentTop, StyledNavBar } from '../../components';
import { AppMenu } from '../menus';
import { MessagesDrawer } from '../menus/messagesDrawer';
import { Conversations } from './views/conversations';

function MessagesLayout(props) {
  const [page, setPage] = React.useState('conversations');
  const pageJump = props.match ? props.match.params.page : null;
  const pathParam = props
    ? props.match
      ? props.match.params.pathParam
        ? props.match.params.pathParam
        : null
      : null
    : null;

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  if (pageJump !== page) {
    setPage(pageJump);
  }

  return (
    <div>
      <CssBaseline />
      <StyledNavBar
        open={open}
        menu={<AppMenu handleDrawerOpen={handleDrawerOpen} open={open} />}
      ></StyledNavBar>
      <MessagesDrawer handleDrawerClose={handleDrawerClose} open={open} />

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <ContentTop>
          <div>
            {page === 'conversations' ? (
              <Conversations roleId={pathParam} />
            ) : null}
          </div>
        </ContentTop>
      </main>
    </div>
  );
}

export default MessagesLayout;
