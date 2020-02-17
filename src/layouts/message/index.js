import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import { useStyles } from './styles';
import { ContentTop } from '../../components';
import { StyledNavBar } from '../../components/navBar';
import { AppMenu } from '../menus';
import { MessageDrawer } from '../menus/MessageDrawer';
import { Conversation } from './views/conversation';

function MessageLayout(props) {
  const [page, setPage] = React.useState('conversations');

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

  return (
    <div>
      <CssBaseline />
      <StyledNavBar
        open={open}
        menu={<AppMenu handleDrawerOpen={handleDrawerOpen} open={open} />}
      ></StyledNavBar>
      <MessageDrawer handleDrawerClose={handleDrawerClose} open={open} />

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <ContentTop>
          <div>
            <Conversation conversationId={pathParam} />
          </div>
        </ContentTop>
      </main>
    </div>
  );
}

export default MessageLayout;
