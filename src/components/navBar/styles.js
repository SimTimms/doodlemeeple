import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 140;
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
    boxSizing: 'border-box',
    boxShadow: 'none',
    borderBottom: '1px solid #ddd',
  },

  appBarShift: {
    paddingLeft: drawerWidth,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarMobile: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: 64,
    boxSizing: 'border-box',
    borderBottom: '1px solid #ddd',
    padding: 0,
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
    marginRight: 10,
    marginLeft: 10,
  },
  appBarChildMobile: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appBarNoSidebar: {
    paddingLeft: 0,
  },
}));
