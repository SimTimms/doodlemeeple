import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  link: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 48,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',

    background: '#efeff5',
  },
  contentMobile: { marginLeft: 0 },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
    background: '#efeff5',
  },
}));
