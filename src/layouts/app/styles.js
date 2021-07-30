import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 160;

export const useStyles = makeStyles((theme) => ({
  root: {
    background: '#efeff5',
    display: 'flex',
    width: '100vw',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: '100vh',
    overflow: 'hidden ',
  },
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    background: '#efeff5',
    width: 'calc(100vw - 200px)',
    height: '100vh',
  },
}));
