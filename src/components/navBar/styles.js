import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 140;
export const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.wrap.main,
    zIndex: 9,
    color: theme.palette.primary.main,
  },
  appBar: {
    height: 64,
    position: 'relative',
    boxSizing: 'border-box',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
  },
  appBarShift: {
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    height: 64,
    boxSizing: 'border-box',
    borderBottom: '1px solid #ddd',
    padding: 0,
  },
  appBarShiftMobile: {
    width: `100%`,
    marginLeft: 0,
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
