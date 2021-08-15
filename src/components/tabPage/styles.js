import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  tabTitle: {
    height: 40,
    width: '100%',
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryMenu: {
    backgroundColor: '#fff',
    boxShadow: '3px 3px 5px rgba(0,0,0,0.1)',
  },
  secondaryMenuWrapper: {
    backgroundColor: theme.palette.primary.dark,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 10px 10px rgba(0,0,0,0.4)',
    padding: '10px 0 10px 0',
    borderBottom: '1px solid rgba(255,255,255,0.15)',
  },
  tabPageContent: {
    overflow: 'auto',
    height: 'calc(100vh - 100px)',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 5,
    boxSizing: 'border-box',
  },
}));
