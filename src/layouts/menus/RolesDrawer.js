import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

export function RolesDrawer(props) {
  const classes = useStyles();
  const { handleDrawerClose, open, variant } = props;
  const theme = useTheme();
  const menuArr =
    variant === 'my-roles'
      ? [
          {
            name: 'Back',
            icon: <ChevronLeft />,
            link: '/app/dashboard',
          },
        ]
      : [
          {
            name: 'Games',
            icon: <ChevronLeft />,
            link: '/app/projects',
          },
        ];
  return (
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
        {menuArr.map((text, index) => (
          <Link to={text.link} className={classes.link} key={text.name}>
            <ListItem button>
              <ListItemIcon className={classes.icon}>{text.icon}</ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}
