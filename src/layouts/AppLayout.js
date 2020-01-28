import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import SideBar from '../sidebars';
import LogIn from '../views/login';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { useStyles } from './styles';
import { StyledNavBar, Content } from '../components';
function PublicLayout() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CssBaseline />
      <StyledNavBar open={open}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon color="primary" />
        </IconButton>
      </StyledNavBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[
            { name: 'Dashboard', icon: <InboxIcon /> },
            { name: 'Profile', icon: <MailIcon /> },
            { name: 'Account', icon: <MailIcon /> },
            { name: 'Invites', icon: <MailIcon /> },
            { name: 'Jobs', icon: <MailIcon /> },
            { name: 'My Games', icon: <MailIcon /> },
            { name: 'Messages', icon: <MailIcon /> },
            { name: 'Community', icon: <MailIcon /> },
            { name: 'Portfolio', icon: <MailIcon /> },
          ].map((text, index) => (
            <ListItem button key={text.name}>
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <SideBar />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>Content Area</Typography>
        <Content>
          <LogIn />
        </Content>
      </main>
    </div>
  );
}

export default PublicLayout;
