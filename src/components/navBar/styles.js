import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 160;
export const useStyles = makeStyles((theme) => ({
  root: {
    background: '#fff',
    zIndex: 9,
    color: theme.palette.primary.main,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: 64,
    position: 'relative',
    paddingLeft: 48,
    boxSizing: 'border-box',
    boxShadow: 'none',
    borderBottom: '1px solid #ddd',
  },
  appBarNoSidebar: {
    paddingLeft: 0,
  },
  appBarMobile: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: 94,
    paddingTop: 14,
    boxSizing: 'border-box',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarShiftMobile: {
    width: `100%`,
    marginLeft: 0,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarChild: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appBarChildMobile: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));
