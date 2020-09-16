import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 160;

export const useStyles = makeStyles((theme) => ({
  root: { height: '100vh', background: '#efeff5', overflow: 'auto' },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  wrapper4: {
    padding: 10,
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    background: '#efeff5',
    position: 'fixed',
    zIndex: 1,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
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
    marginLeft: 44,
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
