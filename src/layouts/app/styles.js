import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 160;

export const useStyles = makeStyles((theme) => ({
  root: { height: '100vh', background: '#efeff5' },
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
    marginLeft: 140,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    background: '#efeff5',
  },
  contentMobile: { width: '100%', marginLeft: 0 },
}));
